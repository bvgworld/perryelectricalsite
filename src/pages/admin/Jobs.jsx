import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Briefcase } from 'lucide-react';
import { useJobs } from '../../hooks/useJobs';
import { useAuth } from '../../contexts/AuthContext';
import DataTable from '../../components/admin/DataTable';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import Button from '../../components/ui/Button';
import { formatDate } from '../../utils/formatters';

const Jobs = () => {
  const { jobs, loading, error, deleteJob } = useJobs();
  const { currentUser } = useAuth();
  const [deleteDialog, setDeleteDialog] = useState({ isOpen: false, job: null });

  const handleDelete = async (job) => {
    setDeleteDialog({ isOpen: true, job });
  };

  const confirmDelete = async () => {
    if (deleteDialog.job) {
      const result = await deleteJob(deleteDialog.job.id);
      if (result.success) {
        // Success handled by real-time listener
      } else {
        console.error('Error deleting job:', result.error);
      }
    }
  };

  const columns = [
    {
      key: 'jobName',
      label: 'Job Name',
      sortable: true,
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      )
    },
    {
      key: 'positionType',
      label: 'Position Type',
      sortable: true,
      render: (value) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {value}
        </span>
      )
    },
    {
      key: 'location',
      label: 'Location',
      sortable: true
    },
    {
      key: 'payRange',
      label: 'Pay Range',
      sortable: true
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'open' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {value === 'open' ? 'Open' : 'Closed'}
        </span>
      )
    },
    {
      key: 'createdAt',
      label: 'Created',
      sortable: true,
      render: (value) => formatDate(value)
    }
  ];

  const filters = [
    { value: 'open', label: 'Open' },
    { value: 'closed', label: 'Closed' },
    { value: 'Full-Time', label: 'Full-Time' },
    { value: 'Part-Time', label: 'Part-Time' },
    { value: 'Contract', label: 'Contract' }
  ];

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading jobs: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-text-dark">Jobs</h1>
          <p className="mt-2 text-gray-600">Manage job postings and applications</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link to="/admin/jobs/new">
            <Button variant="primary" size="md">
              <Plus className="h-4 w-4 mr-2" />
              Add New Job
            </Button>
          </Link>
        </div>
      </div>

      <DataTable
        data={jobs}
        columns={columns}
        onEdit={(job) => window.location.href = `/admin/jobs/${job.id}/edit`}
        onDelete={handleDelete}
        searchable={true}
        filterable={true}
        filters={filters}
        loading={loading}
        emptyMessage="No jobs found. Create your first job posting."
      />

      <ConfirmDialog
        isOpen={deleteDialog.isOpen}
        onClose={() => setDeleteDialog({ isOpen: false, job: null })}
        onConfirm={confirmDelete}
        title="Delete Job"
        message={`Are you sure you want to delete "${deleteDialog.job?.jobName}"? This action cannot be undone.`}
        confirmText="Delete"
        type="danger"
      />
    </div>
  );
};

export default Jobs;
