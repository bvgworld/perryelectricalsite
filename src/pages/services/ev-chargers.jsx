import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Car, CheckCircle, Zap, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import evChargersImage from '../../assets/EV chargers.jpeg';

const EVChargers = () => {
  const benefits = [
    'Faster charging than standard outlets',
    'Convenient home or workplace charging',
    'Increased property value',
    'Cost savings over public charging',
    'Environmentally friendly solution',
  ];

  const features = [
    'Level 2 charging stations (240V)',
    'Smart charger installation with app control',
    'Wall-mounted or pedestal options',
    'Indoor and outdoor installations',
    'Commercial multi-port charging systems',
  ];

  return (
    <>
      <Helmet>
        <title>EV Charger Installation | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional EV charger installation for home and commercial properties in Kansas. Fast, reliable electric vehicle charging solutions." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={evChargersImage}
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
              EV Chargers
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Professional installation of electric vehicle charging stations for home and commercial use.
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
                Benefits of Home EV Charging
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

            {/* Features */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <Zap className="text-primary-blue" size={32} />
                Installation Options
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Zap className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{feature}</span>
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
              Ready to Install Your EV Charger?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We'll help you choose the right charging solution and ensure a safe, code-compliant installation.
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

export default EVChargers;

