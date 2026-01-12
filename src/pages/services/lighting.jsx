import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lightbulb, CheckCircle, Sun, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const Lighting = () => {
  const services = [
    'LED lighting installation and upgrades',
    'Interior and exterior lighting design',
    'Landscape and security lighting',
    'Commercial lighting systems',
    'Smart lighting controls and automation',
    'Emergency and exit lighting',
  ];

  const benefits = [
    'Energy savings up to 80% with LED',
    'Enhanced safety and security',
    'Improved aesthetics and ambiance',
    'Longer lifespan reduces maintenance',
    'Smart controls for convenience',
  ];

  return (
    <>
      <Helmet>
        <title>Lighting Installation | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional lighting installation and design services in Kansas. LED upgrades, security lighting, and commercial systems." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-accent-dark text-white py-20">
        <Container>
          <Link to="/services" className="inline-flex items-center text-accent-red hover:text-white transition-colors mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-blue rounded-full flex-shrink-0">
              <Lightbulb className="text-white" size={40} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Lighting Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Energy-efficient lighting solutions for residential, commercial, and industrial applications.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <Sun className="text-amber-500" size={32} />
                Our Lighting Services
              </h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Sun className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <CheckCircle className="text-accent-red" size={32} />
                Benefits of Modern Lighting
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
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-tertiary-light">
        <Container>
          <Card className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4 text-text-dark">
              Transform Your Space with Better Lighting
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Let us design and install a lighting solution that enhances your space while reducing energy costs.
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

export default Lighting;

