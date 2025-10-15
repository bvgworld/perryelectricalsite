import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, User } from 'lucide-react';
import { useUsers } from '../../hooks/useUsers';
import { useAuth } from '../../contexts/AuthContext';
import DataTable from '../../components/admin/DataTable';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import Button from '../../components/ui/Button';
import { formatDate } from '../../utils/formatters';

const Users = () => {
  const { users, loading, error, deleteUser } = useUsers();
  const { currentUser } = useAuth();
  const [deleteDialog, setDeleteDialog] = useState({ isOpen: false, user: null });

  const handleDelete = async (user) => {
    // Prevent deleting self
    if (user.id === currentUser?.uid) {
      alert('You cannot delete your own account.');
      return;
    }
    setDeleteDialog({ isOpen: true, user });
  };

  const confirmDelete = async () => {
    if (deleteDialog.user) {
      const result = await deleteUser(deleteDialog.user.id);
      if (result.success) {
        // Success handled by real-time listener
      } else {
        console.error('Error deleting user:', result.error);
      }
    }
  };

  const columns = [
    {
      key: 'displayName',
      label: 'Name',
      sortable: true,
      render: (value, user) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-8 w-8">
            <div className="h-8 w-8 rounded-full bg-primary-blue flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="ml-3">
            <div className="font-medium text-gray-900">{value}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      )
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      render: (value) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {value}
        </span>
      )
    },
    {
      key: 'createdAt',
      label: 'Created',
      sortable: true,
      render: (value) => formatDate(value)
    },
    {
      key: 'createdBy',
      label: 'Created By',
      sortable: false,
      render: (value, user) => {
        const createdByUser = users.find(u => u.id === value);
        return createdByUser?.displayName || 'System';
      }
    }
  ];

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading users: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-text-dark">Users</h1>
          <p className="mt-2 text-gray-600">Manage admin users and access</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link to="/admin/users/new">
            <Button variant="primary" size="md">
              <Plus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
          </Link>
        </div>
      </div>

      <DataTable
        data={users}
        columns={columns}
        onDelete={handleDelete}
        searchable={true}
        filterable={false}
        loading={loading}
        emptyMessage="No users found. Add your first admin user."
      />

      <ConfirmDialog
        isOpen={deleteDialog.isOpen}
        onClose={() => setDeleteDialog({ isOpen: false, user: null })}
        onConfirm={confirmDelete}
        title="Delete User"
        message={`Are you sure you want to delete "${deleteDialog.user?.displayName}"? This action cannot be undone.`}
        confirmText="Delete"
        type="danger"
      />
    </div>
  );
};

export default Users;
