import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import panelUpgradesImage from '../../assets/breaker box.jpeg';

const PanelUpgrades = () => {
  const benefits = [
    'Increased electrical capacity for modern appliances',
    'Enhanced safety with updated circuit breakers',
    'Reduced risk of electrical fires',
    'Preparation for future electrical needs',
    'Compliance with current electrical codes',
  ];

  const signs = [
    'Frequent circuit breaker trips',
    'Flickering lights or dimming',
    'Burning smell from electrical panel',
    'Outdated fuse box or panel',
    'Planning major renovations or additions',
  ];

  return (
    <>
      <Helmet>
        <title>Panel Upgrades in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional panel upgrades services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={panelUpgradesImage}
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
              Panel Upgrades
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Upgrade your electrical panel to meet modern power demands safely and efficiently.
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
                Why Upgrade Your Panel?
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

            {/* Warning Signs */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <AlertTriangle className="text-amber-500" size={32} />
                Signs You Need an Upgrade
              </h2>
              <ul className="space-y-4">
                {signs.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Panel Upgrades" />
      <ServiceDetailCTA serviceName="Panel Upgrades" />
    </>
  );
};

export default PanelUpgrades;

