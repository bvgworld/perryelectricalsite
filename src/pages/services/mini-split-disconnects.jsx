import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wind, CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import miniSplitDisconnectsImage from '../../assets/Mini Split Disconnects.jpeg';

const MiniSplitDisconnects = () => {

  const benefits = [
    'Safe electrical disconnect installation',
    'Code-compliant HVAC connections',
    'Proper circuit protection',
    'Weather-resistant outdoor installations',
    'Professional wiring and grounding',
  ];

  const applications = [
    'Mini-split AC disconnect installation',
    'HVAC electrical disconnect',
    'AC disconnect replacement',
    'Heat pump electrical connection',
    'Outdoor unit electrical work',
  ];

  return (
    <>
      <Helmet>
        <title>Mini Split Disconnects in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional mini split disconnects services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={miniSplitDisconnectsImage}
            alt="Mini Split Disconnects"
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
              Mini Split Disconnects
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              HVAC disconnect installation and electrical connections for mini-split systems.
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
                Mini-split air conditioning systems require proper electrical disconnects and dedicated circuits for safe operation. Our licensed electricians provide professional mini-split disconnect installation, ensuring your HVAC system has safe, code-compliant electrical connections.
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
                Mini-split disconnect installation requires proper circuit sizing, weather-resistant enclosures, and correct grounding. Our team works with HVAC contractors to handle all electrical aspects, from running dedicated circuits to installing the disconnect switch.
              </p>
              <p className="text-gray-700">
                We install both indoor and outdoor disconnects, ensuring proper wire sizing and circuit protection for your mini-split system. All installations meet local electrical codes and manufacturer specifications. With over 20 years of experience, we've safely installed electrical connections for hundreds of mini-split systems throughout Kansas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Mini Split Disconnects" />
      <ServiceDetailCTA serviceName="Mini Split Disconnects" />
    </>
  );
};

export default MiniSplitDisconnects;
