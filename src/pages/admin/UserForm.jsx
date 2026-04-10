import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Save, Eye, EyeOff } from 'lucide-react';
import { useUsers } from '../../hooks/useUsers';
import { useAuth } from '../../contexts/AuthContext';
import { validateUserForm } from '../../utils/validation';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';

const UserForm = () => {
  const navigate = useNavigate();
  const { addUser } = useUsers();
  const { currentUser, createAdminUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      displayName: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    setError('');
    setLoading(true);

    try {
      const validation = validateUserForm(data);
      if (!validation.isValid) {
        setError('Please fix the validation errors below.');
        setLoading(false);
        return;
      }

      // Create user in Firebase Auth
      const user = await createAdminUser(data.email, data.password, data.displayName);
      
      if (user) {
        navigate('/admin/users');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while creating the user.');
      console.error('Error creating user:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate('/admin/users')}
            className="mr-4 p-2 text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-3xl font-heading font-bold text-text-dark">
            Add New User
          </h1>
        </div>
        <p className="text-gray-600">
          Create a new admin user account
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              placeholder="admin@perryelec.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
              Display Name *
            </label>
            <input
              {...register('displayName')}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              placeholder="John Doe"
            />
            {errors.displayName && (
              <p className="mt-1 text-sm text-red-600">{errors.displayName}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password *
            </label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="Enter a secure password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              Password must be at least 6 characters long
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <h4 className="text-sm font-medium text-blue-800 mb-2">User Permissions</h4>
            <p className="text-sm text-blue-700">
              New users will have full admin access and can manage jobs, projects, and other users.
            </p>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline-blue"
              onClick={() => navigate('/admin/users')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
            >
              <Save className="h-4 w-4 mr-2" />
              {loading ? 'Creating User...' : 'Create User'}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default UserForm;
