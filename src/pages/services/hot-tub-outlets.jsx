import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plug, CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import hotTubOutletsImage from '../../assets/Hot Tub Outlets.jpeg';

const HotTubOutlets = () => {

  const benefits = [
    'Safe 240V outlet installation',
    'GFCI protection for safety',
    'Code-compliant installations',
    'Weather-resistant outdoor wiring',
    'Proper grounding and bonding',
  ];

  const applications = [
    'Hot tub electrical installation',
    'Spa outlet installation',
    '240V outlet for hot tubs',
    'Hot tub electrical upgrades',
    'Outdoor GFCI outlet installation',
  ];

  return (
    <>
      <Helmet>
        <title>Hot Tub Outlets in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional hot tub outlets services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hotTubOutletsImage}
            alt="Hot Tub Outlets"
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
              Hot Tub Outlets
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Specialized 240V outlet installation for hot tubs and spa equipment.
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
                Hot tubs and spas require specialized 240V electrical installations with proper GFCI protection and weather-resistant wiring. Our licensed electricians provide safe, code-compliant hot tub outlet installation that meets all local electrical codes and safety standards.
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
                Hot tub electrical installation is critical for safety. Water and electricity are a dangerous combination, which is why proper GFCI protection, correct wire sizing, and proper grounding are essential. Our team ensures all installations meet or exceed local electrical codes.
              </p>
              <p className="text-gray-700">
                We handle everything from running the dedicated circuit from your electrical panel to installing the weather-resistant outlet near your hot tub. With over 20 years of experience, we've safely installed hundreds of hot tub electrical systems throughout Kansas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Hot Tub Outlets" />
      <ServiceDetailCTA serviceName="Hot Tub Outlets" />
    </>
  );
};

export default HotTubOutlets;
