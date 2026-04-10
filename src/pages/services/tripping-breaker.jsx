import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, Wrench, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import ServiceDetailCTA from '../../components/sections/ServiceDetailCTA';
import ServiceAreas from '../../components/sections/ServiceAreas';
import trippingBreakersImage from '../../assets/tripping breakers.jpeg';

const TrippingBreaker = () => {
  const causes = [
    'Circuit overload from too many devices',
    'Short circuit in wiring or appliance',
    'Ground fault protection activation',
    'Faulty or worn circuit breaker',
    'Loose electrical connections',
    'Damaged wiring or insulation',
  ];

  const solutions = [
    'Professional electrical inspection',
    'Circuit breaker replacement',
    'Wiring repair and upgrades',
    'Load balancing across circuits',
    'GFCI and AFCI protection installation',
    'Panel upgrade if needed',
  ];

  return (
    <>
      <Helmet>
        <title>Tripping Breaker Repair in Manhattan & Topeka KS | Perry Electrical</title>
        <meta 
          name="description" 
          content="Professional tripping breaker repair services in Manhattan, Topeka, St. Marys & across Kansas. Same-day service available. Licensed & insured. Call (785) 539-4723." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white pt-[72px] py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={trippingBreakersImage}
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
              Tripping Breaker
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert diagnosis and repair of circuit breaker issues to ensure electrical safety.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Common Causes */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <AlertCircle className="text-amber-500" size={32} />
                Common Causes
              </h2>
              <ul className="space-y-4">
                {causes.map((cause, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark flex items-center gap-3">
                <Wrench className="text-accent-red" size={32} />
                Our Solutions
              </h2>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent-red flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-500 rounded">
            <h3 className="text-xl font-heading font-bold mb-2 text-text-dark flex items-center gap-2">
              <AlertCircle className="text-amber-500" size={24} />
              Important Safety Warning
            </h3>
            <p className="text-gray-700">
              A frequently tripping breaker is a sign of an electrical problem that should not be ignored. 
              Never attempt to bypass a circuit breaker or use a higher amp breaker without professional assessment. 
              Contact us immediately for safe, expert diagnosis and repair.
            </p>
          </div>
        </Container>
      </section>

      <ServiceAreas serviceName="Tripping Breaker Repair" />
      <ServiceDetailCTA serviceName="Tripping Breaker Repair" />
    </>
  );
};

export default TrippingBreaker;

