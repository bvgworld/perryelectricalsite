import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Save } from 'lucide-react';
import { useJobs } from '../../hooks/useJobs';
import { useAuth } from '../../contexts/AuthContext';
import { validateJobForm } from '../../utils/validation';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, addJob, updateJob } = useJobs();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isEdit = Boolean(id);
  const currentJob = isEdit ? jobs.find(job => job.id === id) : null;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    defaultValues: {
      jobName: '',
      jobDescription: '',
      payRange: '',
      location: '',
      positionType: '',
      status: 'open'
    }
  });

  useEffect(() => {
    if (isEdit && currentJob) {
      setValue('jobName', currentJob.jobName || '');
      setValue('jobDescription', currentJob.jobDescription || '');
      setValue('payRange', currentJob.payRange || '');
      setValue('location', currentJob.location || '');
      setValue('positionType', currentJob.positionType || '');
      setValue('status', currentJob.status || 'open');
    }
  }, [isEdit, currentJob, setValue]);

  const onSubmit = async (data) => {
    setError('');
    setLoading(true);

    try {
      const validation = validateJobForm(data);
      if (!validation.isValid) {
        setError('Please fix the validation errors below.');
        setLoading(false);
        return;
      }

      let result;
      if (isEdit) {
        result = await updateJob(id, data, currentUser.uid);
      } else {
        result = await addJob(data, currentUser.uid);
      }

      if (result.success) {
        navigate('/admin/jobs');
      } else {
        setError(result.error || 'An error occurred while saving the job.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
      console.error('Error saving job:', err);
    } finally {
      setLoading(false);
    }
  };

  const positionTypes = [
    { value: 'Full-Time', label: 'Full-Time' },
    { value: 'Part-Time', label: 'Part-Time' },
    { value: 'Contract', label: 'Contract' }
  ];

  const statusOptions = [
    { value: 'open', label: 'Open' },
    { value: 'closed', label: 'Closed' }
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate('/admin/jobs')}
            className="mr-4 p-2 text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-3xl font-heading font-bold text-text-dark">
            {isEdit ? 'Edit Job' : 'Add New Job'}
          </h1>
        </div>
        <p className="text-gray-600">
          {isEdit ? 'Update job information' : 'Create a new job posting'}
        </p>
      </div>

      <Container className="max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="jobName" className="block text-sm font-medium text-gray-700 mb-2">
              Job Name *
            </label>
            <input
              {...register('jobName')}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              placeholder="e.g., Senior Electrician"
            />
            {errors.jobName && (
              <p className="mt-1 text-sm text-red-600">{errors.jobName}</p>
            )}
          </div>

          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
              Job Description *
            </label>
            <textarea
              {...register('jobDescription')}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              placeholder="Describe the role, responsibilities, and requirements..."
            />
            {errors.jobDescription && (
              <p className="mt-1 text-sm text-red-600">{errors.jobDescription}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="payRange" className="block text-sm font-medium text-gray-700 mb-2">
                Pay Range *
              </label>
              <input
                {...register('payRange')}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="e.g., $50,000 - $70,000"
              />
              {errors.payRange && (
                <p className="mt-1 text-sm text-red-600">{errors.payRange}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                {...register('location')}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="e.g., Kansas City, KS"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="positionType" className="block text-sm font-medium text-gray-700 mb-2">
                Position Type *
              </label>
              <select
                {...register('positionType')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              >
                <option value="">Select position type</option>
                {positionTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.positionType && (
                <p className="mt-1 text-sm text-red-600">{errors.positionType}</p>
              )}
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                {...register('status')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              >
                {statusOptions.map(status => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/jobs')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
            >
              <Save className="h-4 w-4 mr-2" />
              {loading ? 'Saving...' : (isEdit ? 'Update Job' : 'Create Job')}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default JobForm;
