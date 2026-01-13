import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Power, CheckCircle, Battery, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import generatorsImage from '../../assets/generators.jpeg';

const Generators = () => {
  const benefits = [
    'Automatic power during outages',
    'Protect food, medications, and equipment',
    'Maintain comfort and security',
    'Increase property value',
    'Peace of mind during storms',
  ];

  const services = [
    'Whole-house generator installation',
    'Portable generator hookups',
    'Transfer switch installation',
    'Generator maintenance and repair',
    'Load calculation and sizing',
    'Fuel system integration (natural gas or propane)',
  ];

  return (
    <>
      <Helmet>
        <title>Generator Installation | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional backup generator installation and maintenance in Kansas. Keep your power on during outages." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={generatorsImage}
            alt="Electrical Panel"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <Container className="relative z-10">
          <Link to="/services" className="inline-flex items-center text-white hover:text-accent-red transition-colors mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Generators
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Backup power systems to keep your home or business running during outages.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <CheckCircle className="text-accent-red" size={32} />
                Why Install a Generator?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent-red flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <Battery className="text-primary-blue" size={32} />
                Our Generator Services
              </h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Battery className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-tertiary-light">
        <Container>
          <Card className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4 text-text-dark">
              Never Lose Power Again
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team will help you choose the right generator and ensure a professional installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg">
                Call Now
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Generators;

