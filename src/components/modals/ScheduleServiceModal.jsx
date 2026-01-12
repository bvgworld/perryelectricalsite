import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const ScheduleServiceModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const serviceTypes = [
    'Repair',
    'Installation',
    'Generator',
    'EV Charger',
    'New Service',
    'Lights'
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm({
    defaultValues: {
      serviceTypes: []
    }
  });

  const watchedServiceTypes = watch('serviceTypes') || [];

  const handleServiceTypeChange = (serviceType, checked) => {
    const currentTypes = watchedServiceTypes;
    if (checked) {
      setValue('serviceTypes', [...currentTypes, serviceType]);
    } else {
      setValue('serviceTypes', currentTypes.filter(type => type !== serviceType));
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      // Submit to Firebase
      await addDoc(collection(db, 'leads', 'serviceRequests'), {
        name: data.name.trim(),
        phoneNumber: data.phoneNumber.trim(),
        email: data.email.trim().toLowerCase(),
        serviceTypes: data.serviceTypes,
        projectDescription: data.projectDescription?.trim() || '',
        createdAt: serverTimestamp(),
        source: 'hero_cta',
        status: 'new'
      });

      // Show success state
      setIsSuccess(true);
      
      // Auto close after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        reset();
        onClose();
      }, 2000);

    } catch (err) {
      console.error('Error submitting service request:', err);
      setError('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      setError('');
      reset();
      onClose();
    }
  };

  // Phone number validation
  const validatePhone = (value) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(value) || 'Please enter a valid phone number';
  };

  // Service types validation
  const validateServiceTypes = (value) => {
    return value.length > 0 || 'Please select at least one service type';
  };

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600">
            We'll contact you soon to schedule your service.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Schedule Service" size="lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                },
                maxLength: {
                  value: 50,
                  message: 'Name must be less than 50 characters'
                }
              })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              {...register('phoneNumber', {
                required: 'Phone number is required',
                validate: validatePhone
              })}
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              placeholder="(785) 555-0123"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Service Types */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Service Type * (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {serviceTypes.map((serviceType) => (
              <label
                key={serviceType}
                className="flex items-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                  checked={watchedServiceTypes.includes(serviceType)}
                  onChange={(e) => handleServiceTypeChange(serviceType, e.target.checked)}
                />
                <span className="ml-3 text-sm font-medium text-gray-700">
                  {serviceType}
                </span>
              </label>
            ))}
          </div>
          {errors.serviceTypes && (
            <p className="mt-2 text-sm text-red-600">{errors.serviceTypes.message}</p>
          )}
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Details (Optional)
          </label>
          <textarea
            {...register('projectDescription', {
              maxLength: {
                value: 500,
                message: 'Description must be less than 500 characters'
              }
            })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
            placeholder="Please provide any additional details about your service needs..."
          />
          <div className="flex justify-between items-center mt-1">
            {errors.projectDescription && (
              <p className="text-sm text-red-600">{errors.projectDescription.message}</p>
            )}
            <p className="text-sm text-gray-500 ml-auto">
              {watch('projectDescription')?.length || 0}/500 characters
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            onClick={handleSubmit((data) => {
              // Validate service types before submission
              if (watchedServiceTypes.length === 0) {
                setError('Please select at least one service type');
                return;
              }
              onSubmit(data);
            })}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Schedule Service'
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ScheduleServiceModal;


