import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import { useAuth } from '../../contexts/AuthContext';
import DataTable from '../../components/admin/DataTable';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import Button from '../../components/ui/Button';
import { formatDate, truncateText } from '../../utils/formatters';

const Projects = () => {
  const { projects, loading, error, deleteProject } = useProjects();
  const { currentUser } = useAuth();
  const [deleteDialog, setDeleteDialog] = useState({ isOpen: false, project: null });

  const handleDelete = async (project) => {
    setDeleteDialog({ isOpen: true, project });
  };

  const confirmDelete = async () => {
    if (deleteDialog.project) {
      const result = await deleteProject(deleteDialog.project.id);
      if (result.success) {
        // Success handled by real-time listener
      } else {
        console.error('Error deleting project:', result.error);
      }
    }
  };

  const columns = [
    {
      key: 'projectImage',
      label: 'Image',
      sortable: false,
      render: (value) => (
        <div className="flex-shrink-0 h-12 w-12">
          {value ? (
            <img
              className="h-12 w-12 rounded-lg object-cover"
              src={value}
              alt="Project"
            />
          ) : (
            <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-gray-400" />
            </div>
          )}
        </div>
      )
    },
    {
      key: 'description',
      label: 'Description',
      sortable: true,
      render: (value) => (
        <div className="max-w-xs">
          <p className="text-sm text-gray-900">{truncateText(value, 80)}</p>
        </div>
      )
    },
    {
      key: 'projectType',
      label: 'Type',
      sortable: true,
      render: (value) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {value}
        </span>
      )
    },
    {
      key: 'projectSize',
      label: 'Size',
      sortable: true
    },
    {
      key: 'projectLength',
      label: 'Duration',
      sortable: true
    },
    {
      key: 'createdAt',
      label: 'Created',
      sortable: true,
      render: (value) => formatDate(value)
    }
  ];

  const filters = [
    { value: 'Commercial', label: 'Commercial' },
    { value: 'Industrial', label: 'Industrial' },
    { value: 'Institutional', label: 'Institutional' }
  ];

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-text-dark">Projects</h1>
          <p className="mt-2 text-gray-600">Manage project portfolio and showcase</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link to="/admin/projects/new">
            <Button variant="primary" size="md">
              <Plus className="h-4 w-4 mr-2" />
              Add New Project
            </Button>
          </Link>
        </div>
      </div>

      <DataTable
        data={projects}
        columns={columns}
        onEdit={(project) => window.location.href = `/admin/projects/${project.id}/edit`}
        onDelete={handleDelete}
        searchable={true}
        filterable={true}
        filters={filters}
        loading={loading}
        emptyMessage="No projects found. Create your first project showcase."
      />

      <ConfirmDialog
        isOpen={deleteDialog.isOpen}
        onClose={() => setDeleteDialog({ isOpen: false, project: null })}
        onConfirm={confirmDelete}
        title="Delete Project"
        message={`Are you sure you want to delete this project? This action cannot be undone and will also remove the project image.`}
        confirmText="Delete"
        type="danger"
      />
    </div>
  );
};

export default Projects;
