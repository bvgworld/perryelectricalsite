import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Briefcase, FolderOpen, Users, Clock } from 'lucide-react';
import Card from '../../components/ui/Card';
import Container from '../../components/ui/Container';
import FeaturedProjectsSelector from '../../components/admin/FeaturedProjectsSelector';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalProjects: 0,
    totalUsers: 0,
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch jobs count
        const jobsSnapshot = await getDocs(collection(db, 'jobs'));
        const totalJobs = jobsSnapshot.size;

        // Fetch projects count
        const projectsSnapshot = await getDocs(collection(db, 'projects'));
        const totalProjects = projectsSnapshot.size;

        // Fetch users count
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const totalUsers = usersSnapshot.size;

        // Fetch recent jobs
        const recentJobsQuery = query(
          collection(db, 'jobs'),
          orderBy('createdAt', 'desc'),
          limit(3)
        );
        const recentJobsSnapshot = await getDocs(recentJobsQuery);
        const recentJobs = recentJobsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          type: 'job'
        }));

        // Fetch recent projects
        const recentProjectsQuery = query(
          collection(db, 'projects'),
          orderBy('createdAt', 'desc'),
          limit(3)
        );
        const recentProjectsSnapshot = await getDocs(recentProjectsQuery);
        const recentProjects = recentProjectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          type: 'project'
        }));

        // Combine and sort recent activity
        const recentActivity = [...recentJobs, ...recentProjects]
          .sort((a, b) => new Date(b.createdAt?.toDate()) - new Date(a.createdAt?.toDate()))
          .slice(0, 5);

        setStats({
          totalJobs,
          totalProjects,
          totalUsers,
          recentActivity
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Unknown';
    return new Date(timestamp.toDate()).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-blue"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-text-dark">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to the Perry Electrical admin portal</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Briefcase className="h-8 w-8 text-primary-blue" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Jobs</p>
              <p className="text-2xl font-semibold text-text-dark">{stats.totalJobs}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FolderOpen className="h-8 w-8 text-secondary-green" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Projects</p>
              <p className="text-2xl font-semibold text-text-dark">{stats.totalProjects}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-accent-dark" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Admin Users</p>
              <p className="text-2xl font-semibold text-text-dark">{stats.totalUsers}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Clock className="h-8 w-8 text-amber-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Open Jobs</p>
              <p className="text-2xl font-semibold text-text-dark">
                {stats.totalJobs > 0 ? stats.totalJobs : 0}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Featured Projects Selector */}
      <div className="mb-8">
        <FeaturedProjectsSelector />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-heading font-bold text-text-dark mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {stats.recentActivity.length > 0 ? (
              stats.recentActivity.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {item.type === 'job' ? (
                      <Briefcase className="h-5 w-5 text-primary-blue" />
                    ) : (
                      <FolderOpen className="h-5 w-5 text-secondary-green" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-dark truncate">
                      {item.jobName || item.description?.substring(0, 50) + '...'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.type === 'job' ? 'Job' : 'Project'} • {formatDate(item.createdAt)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No recent activity</p>
            )}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-heading font-bold text-text-dark mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a
              href="/admin/jobs/new"
              className="block w-full px-4 py-2 text-left text-sm font-medium text-primary-blue bg-primary-blue/10 rounded-md hover:bg-primary-blue/20 transition-colors"
            >
              Add New Job
            </a>
            <a
              href="/admin/projects/new"
              className="block w-full px-4 py-2 text-left text-sm font-medium text-secondary-green bg-secondary-green/10 rounded-md hover:bg-secondary-green/20 transition-colors"
            >
              Add New Project
            </a>
            <a
              href="/admin/users/new"
              className="block w-full px-4 py-2 text-left text-sm font-medium text-accent-dark bg-accent-dark/10 rounded-md hover:bg-accent-dark/20 transition-colors"
            >
              Add New User
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
