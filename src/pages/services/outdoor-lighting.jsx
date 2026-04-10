import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sun, CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import outdoorLightingImage from '../../assets/outdoor lighting.jpeg';

const OutdoorLighting = () => {

  const benefits = [
    'Enhanced security and safety',
    'Improved property aesthetics',
    'Extended outdoor living space',
    'Energy-efficient LED options',
    'Weather-resistant installations',
  ];

  const applications = [
    'Landscape lighting installation',
    'Security lighting systems',
    'Pathway and deck lighting',
    'Accent lighting for architecture',
    'Motion sensor lighting',
  ];

  return (
    <>
      <Helmet>
        <title>Outdoor Lighting in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional outdoor lighting services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={outdoorLightingImage}
            alt="Outdoor Lighting"
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
              Outdoor Lighting
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Landscape, security, and outdoor lighting solutions to enhance your property.
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
                Transform your outdoor spaces with professional landscape and security lighting. Our outdoor lighting installation services enhance both the beauty and safety of your property, creating inviting spaces while deterring intruders and improving visibility.
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
                Outdoor lighting requires expertise in weather-resistant installations and proper electrical codes. Our team specializes in landscape lighting, security lighting, and accent lighting that withstands Kansas weather conditions while enhancing your property's value and appeal.
              </p>
              <p className="text-gray-700">
                We use energy-efficient LED technology and professional-grade fixtures designed for durability. From design consultation to installation and maintenance, we ensure your outdoor lighting system is both beautiful and functional for years to come.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Outdoor Lighting" />
      <ServiceDetailCTA serviceName="Outdoor Lighting" />
    </>
  );
};

export default OutdoorLighting;
