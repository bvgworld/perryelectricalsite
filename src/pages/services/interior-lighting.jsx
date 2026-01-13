import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lightbulb, CheckCircle, ArrowLeft, Phone, Calendar } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScheduleServiceModal from '../../components/modals/ScheduleServiceModal';
import { useState } from 'react';
import interiorLightingImage from '../../assets/interior lighting.jpeg';

const InteriorLighting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    'Energy-efficient LED lighting solutions',
    'Improved ambiance and functionality',
    'Enhanced safety and visibility',
    'Reduced energy costs',
    'Modern, customizable designs',
  ];

  const applications = [
    'Residential lighting installation',
    'Commercial office lighting',
    'Recessed lighting upgrades',
    'Track lighting systems',
    'Smart lighting integration',
  ];

  return (
    <>
      <Helmet>
        <title>Interior Lighting Installation | Perry Electrical - Kansas</title>
        <meta 
          name="description" 
          content="Professional interior lighting installation and LED lighting solutions in Kansas. Enhance your home or business with energy-efficient lighting." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorLightingImage}
            alt="Interior Lighting"
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
              Interior Lighting
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Professional interior lighting installation and upgrades for homes and businesses.
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
                Proper interior lighting transforms your space, improving functionality, safety, and ambiance. Our licensed electricians provide comprehensive interior lighting installation and upgrade services, from energy-efficient LED solutions to smart lighting systems.
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
                With over 20 years of experience, we understand that interior lighting is more than just functionality—it's about creating the perfect atmosphere. Our team provides expert installation, code compliance, and personalized solutions tailored to your space and needs.
              </p>
              <p className="text-gray-700">
                We work with the latest LED technology and smart lighting systems, ensuring your lighting is both energy-efficient and future-proof. From initial consultation to final installation, we handle every detail with precision and care.
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
              Ready to Upgrade Your Interior Lighting?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Let our experts help you create the perfect lighting solution for your home or business.
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
        serviceType="Interior Lighting"
      />
    </>
  );
};

export default InteriorLighting;
