import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lightbulb, CheckCircle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import underCabinetLightingImage from '../../assets/under cabinet lighting.jpeg';

const UnderCabinetLighting = () => {

  const benefits = [
    'Improved task lighting in kitchens',
    'Energy-efficient LED options',
    'Enhanced workspace visibility',
    'Modern, sleek appearance',
    'Easy-to-use controls',
  ];

  const applications = [
    'Kitchen under cabinet lighting',
    'LED strip lighting installation',
    'Workspace task lighting',
    'Accent lighting installation',
    'Smart under cabinet lighting',
  ];

  return (
    <>
      <Helmet>
        <title>Under Cabinet Lighting in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional under cabinet lighting services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={underCabinetLightingImage}
            alt="Under Cabinet Lighting"
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
              Under Cabinet Lighting
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Under cabinet LED lighting installation for kitchens and workspaces.
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
                Under cabinet lighting transforms your kitchen workspace, providing essential task lighting while creating a modern, inviting atmosphere. Our professional under cabinet lighting installation services use energy-efficient LED technology for bright, long-lasting illumination.
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
                Under cabinet lighting installation requires careful planning, proper electrical connections, and seamless integration with your kitchen design. Our team installs LED strip lighting and puck lights with professional wiring and controls.
              </p>
              <p className="text-gray-700">
                We offer a range of options from basic on/off switches to dimmable systems and smart lighting controls. Our installations are clean, professional, and designed to enhance both functionality and aesthetics. With over 20 years of experience, we've installed under cabinet lighting in hundreds of Kansas homes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Under Cabinet Lighting" />
      <ServiceDetailCTA serviceName="Under Cabinet Lighting" />
    </>
  );
};

export default UnderCabinetLighting;
