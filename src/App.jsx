import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Contexts
import { AuthProvider } from './contexts/AuthContext';

// Pages
import Home from './pages/index';
import Services from './pages/services';
import Projects from './pages/projects';
import About from './pages/about';
import Careers from './pages/careers';

// Service Detail Pages
import PanelUpgrades from './pages/services/panel-upgrades';
import InteriorLighting from './pages/services/interior-lighting';
import OutdoorLighting from './pages/services/outdoor-lighting';
import BathExhaustFans from './pages/services/bath-exhaust-fans';
import Generators from './pages/services/generators';
import Outlets from './pages/services/outlets';
import CeilingFans from './pages/services/ceiling-fans';
import TrippingBreaker from './pages/services/tripping-breaker';
import EVChargers from './pages/services/ev-chargers';
import HotTubOutlets from './pages/services/hot-tub-outlets';
import SolarConnection from './pages/services/solar-connection';
import DataCabling from './pages/services/data-cabling';
import UnderCabinetLighting from './pages/services/under-cabinet-lighting';
import CamerasSecurity from './pages/services/cameras-security';
import SmokeFireDetection from './pages/services/smoke-fire-detection';
import MiniSplitDisconnects from './pages/services/mini-split-disconnects';

// Admin Pages
import Login from './pages/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Jobs from './pages/admin/Jobs';
import JobForm from './pages/admin/JobForm';
import ProjectsAdmin from './pages/admin/Projects';
import ProjectForm from './pages/admin/ProjectForm';
import Users from './pages/admin/Users';
import UserForm from './pages/admin/UserForm';

// Components
import ProtectedRoute from './components/admin/ProtectedRoute';

const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-12">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                
                {/* Service Detail Routes */}
                <Route path="/services/panel-upgrades" element={<PanelUpgrades />} />
                <Route path="/services/interior-lighting" element={<InteriorLighting />} />
                <Route path="/services/outdoor-lighting" element={<OutdoorLighting />} />
                <Route path="/services/bath-exhaust-fans" element={<BathExhaustFans />} />
                <Route path="/services/generators" element={<Generators />} />
                <Route path="/services/outlets" element={<Outlets />} />
                <Route path="/services/ceiling-fans" element={<CeilingFans />} />
                <Route path="/services/tripping-breaker" element={<TrippingBreaker />} />
                <Route path="/services/ev-chargers" element={<EVChargers />} />
                <Route path="/services/hot-tub-outlets" element={<HotTubOutlets />} />
                <Route path="/services/solar-connection" element={<SolarConnection />} />
                <Route path="/services/data-cabling" element={<DataCabling />} />
                <Route path="/services/under-cabinet-lighting" element={<UnderCabinetLighting />} />
                <Route path="/services/cameras-security" element={<CamerasSecurity />} />
                <Route path="/services/smoke-fire-detection" element={<SmokeFireDetection />} />
                <Route path="/services/mini-split-disconnects" element={<MiniSplitDisconnects />} />
                
                {/* Admin Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                  <Route index element={<Dashboard />} />
                  <Route path="jobs" element={<Jobs />} />
                  <Route path="jobs/new" element={<JobForm />} />
                  <Route path="jobs/:id/edit" element={<JobForm />} />
                  <Route path="projects" element={<ProjectsAdmin />} />
                  <Route path="projects/new" element={<ProjectForm />} />
                  <Route path="projects/:id/edit" element={<ProjectForm />} />
                  <Route path="users" element={<Users />} />
                  <Route path="users/new" element={<UserForm />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
