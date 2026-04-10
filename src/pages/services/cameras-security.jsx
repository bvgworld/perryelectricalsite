import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Camera, CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import camerasSecurityImage from '../../assets/Cameras & Security.jpeg';

const CamerasSecurity = () => {

  const benefits = [
    'Enhanced property security',
    '24/7 surveillance capability',
    'Remote monitoring access',
    'Deterrent to criminal activity',
    'Professional installation',
  ];

  const applications = [
    'Security camera installation',
    'Surveillance system wiring',
    'IP camera electrical work',
    'Security system integration',
    'Outdoor camera installation',
  ];

  return (
    <>
      <Helmet>
        <title>Cameras & Security in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional cameras & security services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={camerasSecurityImage}
            alt="Cameras & Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <Container className="relative z-10">
          <Link to="/services" className="inline-flex items-center text-white hover:text-accent-red transition-colors mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Cameras & Security
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Security camera and surveillance system electrical installation and wiring.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Security camera systems require proper electrical wiring, power supply installation, and network connections. Our licensed electricians provide professional security camera installation services, ensuring your surveillance system is properly powered and connected.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                  <CheckCircle className="text-accent-red" size={28} />
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent-red flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                  <CheckCircle className="text-accent-red" size={28} />
                  Common Applications
                </h2>
                <ul className="space-y-3">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent-red flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-accent-light p-6 rounded-lg">
              <h2 className="text-2xl font-heading font-bold mb-4 text-text-dark">
                Why Choose Perry Electrical?
              </h2>
              <p className="text-gray-700 mb-4">
                Security camera installation involves running power and data cables, installing weather-resistant outlets, and ensuring proper mounting. Our team works with security system installers to handle all electrical aspects, from power supply to network connections.
              </p>
              <p className="text-gray-700">
                We install both wired and wireless security camera systems, ensuring proper electrical connections and code compliance. Whether you need power for IP cameras, PoE installations, or traditional power supplies, we provide reliable electrical work that keeps your security system operational.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Cameras & Security" />
      <ServiceDetailCTA serviceName="Cameras & Security" />
    </>
  );
};

export default CamerasSecurity;
