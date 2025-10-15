import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Car, Lightbulb, Power, AlertCircle, Plug } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Panel Upgrades',
      description: 'Upgrade your electrical panel to meet modern power demands safely and efficiently.',
      link: '/services/panel-upgrades',
    },
    {
      icon: Car,
      title: 'EV Chargers',
      description: 'Professional installation of electric vehicle charging stations for home and commercial use.',
      link: '/services/ev-chargers',
    },
    {
      icon: Lightbulb,
      title: 'Lighting',
      description: 'Energy-efficient lighting solutions for indoor and outdoor applications.',
      link: '/services/lighting',
    },
    {
      icon: Power,
      title: 'Generators',
      description: 'Backup power systems to keep your home or business running during outages.',
      link: '/services/generators',
    },
    {
      icon: AlertCircle,
      title: 'Tripping Breaker',
      description: 'Expert diagnosis and repair of circuit breaker issues to ensure electrical safety.',
      link: '/services/tripping-breaker',
    },
    {
      icon: Plug,
      title: 'Outlets',
      description: 'Installation and repair of electrical outlets, including GFCI and USB outlets.',
      link: '/services/outlets',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Services | Perry Electrical</title>
        <meta 
          name="description" 
          content="Perry Electrical offers comprehensive electrical services including panel upgrades, EV chargers, lighting, generators, and more. Serving Kansas with excellence." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-accent-dark text-white py-20">
        <Container variant="wide">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From residential repairs to commercial installations, we provide comprehensive electrical services backed by expertise and integrity.
            </p>
            <Button variant="secondary" size="lg">
              Call Now for Free Estimate
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            subtitle="What We Do"
            title="Comprehensive Electrical Solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group cursor-pointer">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary-blue/10 rounded-full group-hover:bg-primary-blue transition-colors duration-300">
                    <Icon className="text-primary-blue group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-text-dark">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-primary-blue font-semibold hover:text-accent-dark transition-colors"
                  >
                    Learn More →
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-tertiary-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              subtitle="Where We Serve"
              title="Proudly Serving Kansas"
            />
            <p className="text-lg text-gray-600 mb-8">
              We provide electrical services throughout Kansas, bringing our commitment to quality and customer satisfaction to every community we serve.
            </p>
            <Button variant="primary" size="lg">
              Contact Us Today
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;

