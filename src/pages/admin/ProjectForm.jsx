import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import { useAuth } from '../../contexts/AuthContext';
import { validateProjectForm } from '../../utils/validation';
import { uploadImage, deleteImage } from '../../utils/imageUpload';
import ImageUploader from '../../components/admin/ImageUploader';
import ImageCropper from '../../components/admin/ImageCropper';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, addProject, updateProject } = useProjects();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [croppedImage, setCroppedImage] = useState(null);

  const isEdit = Boolean(id);
  const currentProject = isEdit ? projects.find(project => project.id === id) : null;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError: setFormError,
    watch
  } = useForm({
        defaultValues: {
          projectName: '',
          description: '',
          projectSize: '',
          projectType: '',
          projectLength: '',
          dollarAmount: '',
          squareFootage: '',
          scope: '',
          location: ''
        }
  });

  const description = watch('description');

      useEffect(() => {
        if (isEdit && currentProject) {
          setValue('projectName', currentProject.projectName || '');
          setValue('description', currentProject.description || '');
          setValue('projectSize', currentProject.projectSize || '');
          setValue('projectType', currentProject.projectType || '');
          setValue('projectLength', currentProject.projectLength || '');
          setValue('dollarAmount', currentProject.dollarAmount || '');
          setValue('squareFootage', currentProject.squareFootage || '');
          setValue('scope', currentProject.scope || '');
          setValue('location', currentProject.location || '');
          setImageUrl(currentProject.projectImage || '');
        }
      }, [isEdit, currentProject, setValue]);

  const handleImageSelect = (file) => {
    setSelectedImage(file);
    setError('');
    
    // Create a preview URL for the image cropper
    if (file) {
      console.log('Image selected:', file.name, file.size, file.type);
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('Image preview URL created:', e.target.result.substring(0, 50) + '...');
        setImageUrl(e.target.result);
      };
      reader.onerror = (e) => {
        console.error('Error reading file:', e);
        setError('Failed to read image file');
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl('');
    }
  };

  const handleCropComplete = (croppedBlob) => {
    setCroppedImage(croppedBlob);
  };

  const onSubmit = async (data) => {
    setError('');
    setLoading(true);

    try {
      const validation = validateProjectForm(data);
      if (!validation.isValid) {
        // Set individual field errors using react-hook-form's setError
        Object.entries(validation.errors).forEach(([field, message]) => {
          setFormError(field, { type: 'manual', message });
        });
        // Show validation errors in a more user-friendly way
        const errorList = Object.values(validation.errors)
          .map((message) => `• ${message}`)
          .join('\n');
        setError(`Please fix the following validation errors:\n${errorList}`);
        setLoading(false);
        return;
      }

      let finalImageUrl = imageUrl;

      // Handle image upload if new image selected or cropped
      if (selectedImage || croppedImage) {
        setUploading(true);
        const imageToUpload = croppedImage || selectedImage;
        const uploadResult = await uploadImage(imageToUpload, 'projects');
        if (!uploadResult.success) {
          setError(uploadResult.error || 'Failed to upload image');
          setLoading(false);
          setUploading(false);
          return;
        }
        finalImageUrl = uploadResult.url;

        // Delete old image if editing
        if (isEdit && currentProject?.projectImage && currentProject.projectImage !== finalImageUrl) {
          await deleteImage(currentProject.projectImage);
        }
      }

      const projectData = {
        ...data,
        projectImage: finalImageUrl
      };

      let result;
      if (isEdit) {
        result = await updateProject(id, projectData, currentUser.uid);
      } else {
        result = await addProject(projectData, currentUser.uid);
      }

      if (result.success) {
        navigate('/admin/projects');
      } else {
        setError(result.error || 'An error occurred while saving the project.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
      console.error('Error saving project:', err);
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  const projectTypes = [
    { value: 'Commercial', label: 'Commercial' },
    { value: 'Industrial', label: 'Industrial' },
    { value: 'Institutional', label: 'Institutional' }
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate('/admin/projects')}
            className="mr-4 p-2 text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-3xl font-heading font-bold text-text-dark">
            {isEdit ? 'Edit Project' : 'Add New Project'}
          </h1>
        </div>
        <p className="text-gray-600">
          {isEdit ? 'Update project information' : 'Create a new project showcase'}
        </p>
      </div>

      <Container className="max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-700 text-sm whitespace-pre-line">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Image *
            </label>
            <ImageUploader
              onImageSelect={handleImageSelect}
              currentImage={imageUrl}
              disabled={uploading}
            />
            <p className="mt-2 text-sm text-gray-500">
              Upload a high-quality image that showcases your project (max 5MB)
            </p>
          </div>

              {imageUrl && (
                <ImageCropper
                  imageUrl={imageUrl}
                  onCropComplete={handleCropComplete}
                  aspectRatio={16/9}
                />
              )}

          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
              Project Name *
            </label>
            <input
              {...register('projectName', { required: 'Project name is required' })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              placeholder="e.g., Kaw Valley State Bank Renovation"
            />
            {errors.projectName && (
              <p className="mt-1 text-sm text-red-600">{errors.projectName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Project Debrief *
            </label>
            <textarea
              {...register('description', { 
                required: 'Project debrief is required',
                maxLength: { value: 500, message: 'Project debrief must be less than 500 characters' }
              })}
              rows={4}
              maxLength={500}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              placeholder="Describe the project, key features, and outcomes..."
            />
            <div className="flex justify-between mt-1">
              {errors.description && (
                <p className="text-sm text-red-600">{errors.description.message || errors.description}</p>
              )}
              <p className="text-sm text-gray-500 ml-auto">
                {description?.length || 0}/500 characters
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="dollarAmount" className="block text-sm font-medium text-gray-700 mb-2">
                Dollar Amount
              </label>
              <input
                {...register('dollarAmount')}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="e.g., $2.5M, $500K"
              />
              {errors.dollarAmount && (
                <p className="mt-1 text-sm text-red-600">{errors.dollarAmount.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-2">
                Square Footage
              </label>
              <input
                {...register('squareFootage')}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="e.g., 50,000 sq ft"
              />
              {errors.squareFootage && (
                <p className="mt-1 text-sm text-red-600">{errors.squareFootage.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="scope" className="block text-sm font-medium text-gray-700 mb-2">
                Scope
              </label>
              <input
                {...register('scope')}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="e.g., Full electrical installation"
              />
              {errors.scope && (
                <p className="mt-1 text-sm text-red-600">{errors.scope.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                {...register('location', { required: 'Location is required' })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="e.g., Topeka, KS"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                Project Type *
              </label>
              <select
                {...register('projectType', { required: 'Project type is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
              >
                <option value="">Select project type</option>
                {projectTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="projectLength" className="block text-sm font-medium text-gray-700 mb-2">
                Project Duration
              </label>
              <input
                {...register('projectLength')}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="e.g., 6 months, 1 year"
              />
              {errors.projectLength && (
                <p className="mt-1 text-sm text-red-600">{errors.projectLength.message}</p>
              )}
            </div>
          </div>


          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/projects')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={loading || uploading}
            >
              {uploading ? (
                <>
                  <Upload className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? 'Saving...' : (isEdit ? 'Update Project' : 'Create Project')}
                </>
              )}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ProjectForm;
