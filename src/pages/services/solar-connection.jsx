import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sun, CheckCircle, ArrowLeft, Phone, Calendar } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScheduleServiceModal from '../../components/modals/ScheduleServiceModal';
import { useState } from 'react';
import solarConnectionImage from '../../assets/solar connection.jpeg';

const SolarConnection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    'Proper grid-tie connection',
    'Safe inverter installation',
    'Code-compliant installations',
    'Utility interconnection',
    'System monitoring integration',
  ];

  const applications = [
    'Solar panel electrical connection',
    'Solar inverter installation',
    'Grid-tie system connection',
    'Solar electrical upgrades',
    'Battery backup system wiring',
  ];

  return (
    <>
      <Helmet>
        <title>Solar Panel Connection | Perry Electrical - Kansas</title>
        <meta 
          name="description" 
          content="Professional solar panel electrical connection and inverter installation in Kansas. Safe, code-compliant solar system wiring and grid-tie connections." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={solarConnectionImage}
            alt="Solar Connection"
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
              Solar Connection
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Electrical connection and installation services for solar panel systems.
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
                Solar panel systems require specialized electrical connections, proper inverter installation, and safe grid-tie integration. Our licensed electricians provide professional solar electrical installation services, ensuring your system is safely connected and code-compliant.
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
                Solar electrical installation requires expertise in DC wiring, inverter connections, and utility interconnection. Our team works with solar installers to handle the electrical aspects, ensuring proper grounding, disconnect installation, and code compliance.
              </p>
              <p className="text-gray-700">
                We coordinate with utility companies for grid-tie connections and ensure all electrical work meets local codes and safety standards. Whether you're installing a new solar system or upgrading an existing one, we provide reliable electrical connections that maximize your system's performance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-medium">
        <Container>
          <Card className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4 text-text-dark">
              Ready to Connect Your Solar System?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ensure safe, professional electrical connection for your solar panel installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Service
              </Button>
              <Button variant="outline" size="lg" as="a" href="tel:7855394723">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      <ScheduleServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType="Solar Connection"
      />
    </>
  );
};

export default SolarConnection;
