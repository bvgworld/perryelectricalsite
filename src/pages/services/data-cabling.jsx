import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wifi, CheckCircle, ArrowLeft, Phone, Calendar } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScheduleServiceModal from '../../components/modals/ScheduleServiceModal';
import { useState } from 'react';
import dataCablingImage from '../../assets/Data Cabling.jpeg';

const DataCabling = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    'Reliable wired network connections',
    'Faster data transfer speeds',
    'Improved network security',
    'Professional cable management',
    'Future-proof installations',
  ];

  const applications = [
    'Ethernet cable installation',
    'Network cabling for offices',
    'Cat6 and Cat6a cable runs',
    'Data center cabling',
    'Structured cabling systems',
  ];

  return (
    <>
      <Helmet>
        <title>Data Cabling Installation | Perry Electrical - Kansas</title>
        <meta 
          name="description" 
          content="Professional Ethernet and network cabling installation in Kansas. Reliable data cabling services for homes and businesses with Cat6 and structured cabling." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dataCablingImage}
            alt="Data Cabling"
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
              Data Cabling
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ethernet and network cabling installation for homes and businesses.
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
                Professional data cabling provides reliable, high-speed network connections for homes and businesses. Our network cabling installation services include Ethernet cable runs, structured cabling systems, and proper cable management for optimal performance.
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
                Data cabling installation requires knowledge of network standards, proper cable routing, and termination techniques. Our team installs Cat6 and Cat6a Ethernet cables with proper cable management, ensuring reliable connections and professional appearance.
              </p>
              <p className="text-gray-700">
                We work with both residential and commercial clients, installing structured cabling systems that support current and future network needs. From single-room installations to whole-building network infrastructure, we provide professional data cabling services throughout Kansas.
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
              Ready to Install Data Cabling?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get reliable, high-speed network connections with professional data cabling installation.
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
        serviceType="Data Cabling"
      />
    </>
  );
};

export default DataCabling;
