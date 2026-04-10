import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Fan, CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import ceilingFansImage from '../../assets/Celing Fans.jpeg';

const CeilingFans = () => {

  const benefits = [
    'Improved air circulation and comfort',
    'Energy-efficient cooling alternative',
    'Year-round comfort with reversible blades',
    'Enhanced lighting options',
    'Modern, stylish designs',
  ];

  const applications = [
    'New ceiling fan installation',
    'Ceiling fan replacement',
    'Ceiling fan wiring and electrical work',
    'Smart ceiling fan installation',
    'Ceiling fan with light kit installation',
  ];

  return (
    <>
      <Helmet>
        <title>Ceiling Fans in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional ceiling fans services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ceilingFansImage}
            alt="Ceiling Fans"
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
              Ceiling Fans
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ceiling fan installation, wiring, and replacement services.
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
                Ceiling fans provide year-round comfort by improving air circulation and reducing energy costs. Our professional ceiling fan installation services include proper electrical wiring, secure mounting, and integration with existing lighting systems.
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
                Ceiling fan installation requires proper electrical wiring, secure mounting to ceiling joists, and correct blade height for optimal performance. Our licensed electricians ensure your ceiling fan is safely installed and operates efficiently.
              </p>
              <p className="text-gray-700">
                We work with all types of ceiling fans, from standard models to smart fans with remote controls and integrated lighting. Whether you're installing a new fan or replacing an existing one, we handle the electrical work with precision and care.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Ceiling Fans" />
      <ServiceDetailCTA serviceName="Ceiling Fans" />
    </>
  );
};

export default CeilingFans;
