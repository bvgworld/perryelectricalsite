import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plug, CheckCircle, Zap, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const Outlets = () => {
  const services = [
    'New outlet installation',
    'GFCI outlet installation (bathrooms, kitchens)',
    'USB outlet installation',
    'Outlet repair and replacement',
    'Dedicated circuits for appliances',
    'Outdoor weatherproof outlets',
  ];

  const upgrades = [
    'GFCI protection for safety',
    'USB-integrated outlets for convenience',
    'Smart outlets with app control',
    'Tamper-resistant outlets for child safety',
    '20-amp outlets for high-power devices',
    'Floor and pop-up outlets',
  ];

  return (
    <>
      <Helmet>
        <title>Outlet Installation & Repair | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional electrical outlet installation and repair in Kansas. GFCI outlets, USB outlets, and more." 
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
              <Plug className="text-white" size={40} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Outlet Installation & Repair
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Professional installation and repair of electrical outlets for safer, more convenient power access.
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
                <Zap className="text-primary-blue" size={32} />
                Our Outlet Services
              </h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Zap className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upgrade Options */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <CheckCircle className="text-accent-red" size={32} />
                Popular Upgrades
              </h2>
              <ul className="space-y-4">
                {upgrades.map((upgrade, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent-red flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{upgrade}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 border-l-4 border-primary-blue rounded">
            <h3 className="text-xl font-heading font-bold mb-2 text-text-dark">
              Why GFCI Outlets Are Important
            </h3>
            <p className="text-gray-700">
              GFCI (Ground Fault Circuit Interrupter) outlets are required by code in areas where water is present, 
              such as bathrooms, kitchens, and outdoor locations. They provide critical protection against electrical 
              shock by instantly cutting power when a ground fault is detected. We ensure all installations meet current safety codes.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-tertiary-light">
        <Container>
          <Card className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4 text-text-dark">
              Need More Outlets or Repairs?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you need new outlets installed or existing ones repaired, we're here to help.
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

export default Outlets;

