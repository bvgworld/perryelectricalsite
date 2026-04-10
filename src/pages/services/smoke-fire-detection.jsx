import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Flame, CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import smokeFireDetectionImage from '../../assets/Smoke & Fire Detction.jpeg';

const SmokeFireDetection = () => {

  const benefits = [
    'Early fire detection and warning',
    'Life safety protection',
    'Code-compliant installations',
    'Interconnected system operation',
    'Battery and hardwired options',
  ];

  const applications = [
    'Smoke detector installation',
    'Fire alarm system installation',
    'Smoke detector replacement',
    'Interconnected smoke alarm wiring',
    'Carbon monoxide detector installation',
  ];

  return (
    <>
      <Helmet>
        <title>Smoke & Fire Detection in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional smoke & fire detection services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={smokeFireDetectionImage}
            alt="Smoke & Fire Detection"
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
              Smoke & Fire Detection
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Smoke detector and fire alarm installation, replacement, and wiring services.
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
                Smoke detectors and fire alarms are essential life safety devices that provide early warning in the event of a fire. Our professional smoke detector installation services ensure your home or business meets fire code requirements and provides maximum protection.
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
                Smoke detector installation must meet strict fire code requirements for placement, interconnection, and power supply. Our licensed electricians ensure your smoke detectors are properly located, correctly wired, and interconnected for maximum protection.
              </p>
              <p className="text-gray-700">
                We install both hardwired and battery-operated smoke detectors, with interconnected systems that alert all detectors when one is triggered. We also provide carbon monoxide detector installation and fire alarm system wiring. With over 20 years of experience, we've installed thousands of life safety devices throughout Kansas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Smoke & Fire Detection" />
      <ServiceDetailCTA serviceName="Smoke & Fire Detection" />
    </>
  );
};

export default SmokeFireDetection;
