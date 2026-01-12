import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, Wrench, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

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
        <title>Tripping Breaker Repair | Perry Electrical</title>
        <meta 
          name="description" 
          content="Expert diagnosis and repair of tripping circuit breakers in Kansas. Fast, reliable electrical troubleshooting and solutions." 
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
              <AlertCircle className="text-white" size={40} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Tripping Breaker Repair
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Expert diagnosis and repair of circuit breaker issues to restore safe, reliable power to your home or business.
              </p>
            </div>
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

      {/* CTA Section */}
      <section className="section-padding bg-tertiary-light">
        <Container>
          <Card className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4 text-text-dark">
              Fix Your Tripping Breaker Today
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Don't let electrical issues disrupt your life. Our licensed electricians will quickly diagnose and resolve the problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Schedule Service
              </Button>
              <Button variant="outline" size="lg">
                Emergency Call
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default TrippingBreaker;

