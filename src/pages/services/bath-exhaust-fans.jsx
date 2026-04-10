import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Fan, CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import bathExhaustFansImage from '../../assets/Bath Exhaust Fans.jpeg';

const BathExhaustFans = () => {

  const benefits = [
    'Prevents mold and mildew growth',
    'Removes excess moisture and humidity',
    'Improves indoor air quality',
    'Reduces bathroom odors',
    'Energy-efficient ventilation',
  ];

  const applications = [
    'New bathroom exhaust fan installation',
    'Bathroom fan replacement',
    'Ventilation system upgrades',
    'Quiet operation fan installation',
    'Smart fan with humidity sensors',
  ];

  return (
    <>
      <Helmet>
        <title>Bath Exhaust Fans in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional bath exhaust fans services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bathExhaustFansImage}
            alt="Bath Exhaust Fans"
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
              Bath Exhaust Fans
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Bathroom exhaust fan installation and replacement for proper ventilation.
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
                Proper bathroom ventilation is essential for maintaining a healthy home environment. Bath exhaust fans remove excess moisture, prevent mold growth, and eliminate odors. Our licensed electricians provide professional bathroom exhaust fan installation and replacement services.
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
                Bathroom exhaust fan installation requires proper electrical wiring, venting, and code compliance. Our team ensures your exhaust fan is correctly sized for your bathroom, properly vented to the exterior, and meets all local building codes.
              </p>
              <p className="text-gray-700">
                We offer a range of options from basic ventilation fans to quiet, energy-efficient models with humidity sensors. Whether you're building new or replacing an old fan, we provide expert installation that protects your home from moisture damage.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Bath Exhaust Fans" />
      <ServiceDetailCTA serviceName="Bath Exhaust Fans" />
    </>
  );
};

export default BathExhaustFans;
