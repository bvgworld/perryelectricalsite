import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const fieldClass =
  'w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors';

const ProjectManagerModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'leads', 'projectManagerRequests'), {
        companyName: data.companyName.trim(),
        name: data.name.trim(),
        phoneNumber: data.phoneNumber.trim(),
        email: data.email.trim().toLowerCase(),
        projectDescription: data.projectDescription.trim(),
        createdAt: serverTimestamp(),
        source: 'project_manager_cta',
        status: 'new'
      });

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        reset();
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Error submitting project manager request:', err);
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

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600">
            We&apos;ll be in touch soon to discuss your project.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Talk to a Project Manager" size="lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name *
            </label>
            <input
              {...register('companyName', {
                required: 'Company name is required',
                minLength: {
                  value: 2,
                  message: 'Company name must be at least 2 characters'
                },
                maxLength: {
                  value: 100,
                  message: 'Company name must be less than 100 characters'
                }
              })}
              type="text"
              className={fieldClass}
              placeholder="Your company name"
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
            )}
          </div>

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Project Description *
          </label>
          <textarea
            {...register('projectDescription', {
              required: 'Project description is required',
              minLength: {
                value: 10,
                message: 'Please provide at least 10 characters'
              },
              maxLength: {
                value: 1000,
                message: 'Description must be less than 1000 characters'
              }
            })}
            rows={5}
            className={fieldClass}
            placeholder="Please describe your project in detail..."
          />
          <div className="flex justify-between items-center mt-1">
            {errors.projectDescription && (
              <p className="text-sm text-red-600">{errors.projectDescription.message}</p>
            )}
            <p className="text-xs text-gray-500 ml-auto">
              {watch('projectDescription')?.length || 0}/1000 characters
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
              'Submit Request'
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProjectManagerModal;
