import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Wrench, Building2, Users } from 'lucide-react';
import Container from '../components/ui/Container';
import peIcon from '../assets/pe-icon-color.png';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Perry Electrical</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="bg-accent-dark text-white min-h-[70vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <img src={peIcon} alt="Perry Electrical" className="w-16 h-16 mx-auto mb-6" />
            <h1 className="font-heading font-bold text-7xl md:text-9xl mb-4 text-primary-blue">
              404
            </h1>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Looks like this circuit&apos;s been disconnected. Let&apos;s get you back on track.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Home className="text-primary-blue" size={28} />
                <span className="text-sm font-semibold">Home</span>
              </Link>
              <Link
                to="/services"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Wrench className="text-primary-blue" size={28} />
                <span className="text-sm font-semibold">Services</span>
              </Link>
              <Link
                to="/projects"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Building2 className="text-primary-blue" size={28} />
                <span className="text-sm font-semibold">Projects</span>
              </Link>
              <Link
                to="/careers"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Users className="text-primary-blue" size={28} />
                <span className="text-sm font-semibold">Careers</span>
              </Link>
            </div>

            <div className="mt-10">
              <p className="text-gray-400 mb-3">Need help right now?</p>
              <a
                href="tel:+17855394723"
                className="text-primary-blue hover:text-white transition-colors text-xl font-semibold"
              >
                Call (785) 539-4723
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
