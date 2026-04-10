import { lazy, Suspense } from 'react';
import Home from './pages/index';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Contexts
import { AuthProvider } from './contexts/AuthContext';

// Lazy-loaded pages (Home is eager so first paint on `/` never shows the route fallback)
const Services = lazy(() => import('./pages/services'));
const Projects = lazy(() => import('./pages/projects'));
const About = lazy(() => import('./pages/about'));
const Careers = lazy(() => import('./pages/careers'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy-loaded service detail pages
const PanelUpgrades = lazy(() => import('./pages/services/panel-upgrades'));
const InteriorLighting = lazy(() => import('./pages/services/interior-lighting'));
const OutdoorLighting = lazy(() => import('./pages/services/outdoor-lighting'));
const BathExhaustFans = lazy(() => import('./pages/services/bath-exhaust-fans'));
const Generators = lazy(() => import('./pages/services/generators'));
const Outlets = lazy(() => import('./pages/services/outlets'));
const CeilingFans = lazy(() => import('./pages/services/ceiling-fans'));
const TrippingBreaker = lazy(() => import('./pages/services/tripping-breaker'));
const EVChargers = lazy(() => import('./pages/services/ev-chargers'));
const HotTubOutlets = lazy(() => import('./pages/services/hot-tub-outlets'));
const SolarConnection = lazy(() => import('./pages/services/solar-connection'));
const DataCabling = lazy(() => import('./pages/services/data-cabling'));
const UnderCabinetLighting = lazy(() => import('./pages/services/under-cabinet-lighting'));
const CamerasSecurity = lazy(() => import('./pages/services/cameras-security'));
const SmokeFireDetection = lazy(() => import('./pages/services/smoke-fire-detection'));
const MiniSplitDisconnects = lazy(() => import('./pages/services/mini-split-disconnects'));

// Lazy-loaded admin pages
const Login = lazy(() => import('./pages/admin/Login'));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Jobs = lazy(() => import('./pages/admin/Jobs'));
const JobForm = lazy(() => import('./pages/admin/JobForm'));
const ProjectsAdmin = lazy(() => import('./pages/admin/Projects'));
const ProjectForm = lazy(() => import('./pages/admin/ProjectForm'));
const Users = lazy(() => import('./pages/admin/Users'));
const UserForm = lazy(() => import('./pages/admin/UserForm'));

// Components
import ProtectedRoute from './components/admin/ProtectedRoute';

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${isHomePage || isAdminRoute ? '' : 'pt-[72px]'}`}>
        <Suspense
          fallback={
            <div
              className="min-h-[100dvh] bg-accent-dark"
              aria-hidden="true"
            />
          }
        >
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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
