import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const fieldClass =
  'w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors';

const ScheduleServiceModal = ({ isOpen, onClose, preselectedService = '' }) => {
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

  useEffect(() => {
    if (isOpen && preselectedService) {
      setValue(
        'projectDescription',
        `Interested in: ${preselectedService}\n\n`,
        { shouldDirty: false }
      );
    }
  }, [isOpen, preselectedService, setValue]);

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

      setIsSuccess(true);

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

  const validatePhone = (value) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(value) || 'Please enter a valid phone number';
  };

  const submitForm = handleSubmit((data) => {
    const types = watchedServiceTypes;
    if (!types.length) {
      setError('Please select at least one service type');
      return;
    }
    setError('');
    onSubmit({ ...data, serviceTypes: types });
  });

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600">
            We&apos;ll contact you soon to schedule your service.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Schedule Service" size="lg">
      <form onSubmit={submitForm} className="space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
              className={fieldClass}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              {...register('phoneNumber', {
                required: 'Phone number is required',
                validate: validatePhone
              })}
              type="tel"
              className={fieldClass}
              placeholder="(785) 555-0123"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
            className={fieldClass}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Type * (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 [grid-auto-rows:1fr]">
            {serviceTypes.map((serviceType) => (
              <label
                key={serviceType}
                className="group flex min-h-[4.25rem] w-full min-w-0 cursor-pointer items-start gap-2.5 rounded-lg border border-gray-200 p-2.5 transition-colors hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={watchedServiceTypes.includes(serviceType)}
                  onChange={(e) => handleServiceTypeChange(serviceType, e.target.checked)}
                  className="mt-0.5 h-4 w-4 max-h-4 max-w-4 shrink-0 cursor-pointer rounded border-gray-300 text-primary-blue accent-primary-blue focus:ring-2 focus:ring-primary-blue/30 focus:ring-offset-0"
                />
                <span className="min-w-0 flex-1 text-left text-xs font-medium leading-snug text-gray-700 sm:text-sm">
                  {serviceType}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
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
            className={fieldClass}
            placeholder="Please provide any additional details about your service needs..."
          />
          <div className="flex justify-between items-center mt-1">
            {errors.projectDescription && (
              <p className="text-sm text-red-600">{errors.projectDescription.message}</p>
            )}
            <p className="text-xs text-gray-500 ml-auto">
              {watch('projectDescription')?.length || 0}/500 characters
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-3">
          <Button
            type="button"
            variant="ghost"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
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
