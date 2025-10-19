import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Car, Lightbulb, Power, AlertCircle, Plug, Phone, Calendar, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScheduleServiceModal from '../components/modals/ScheduleServiceModal';
import StickyMobileCTA from '../components/layout/StickyMobileCTA';

const Services = () => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      icon: Zap,
      title: 'Panel Upgrades',
      description: 'Upgrade your electrical panel to meet modern power demands safely and efficiently.',
      link: '/services/panel-upgrades',
      serviceType: 'Panel Upgrades',
      urgency: 'High',
      price: 'Starting at $1,200'
    },
    {
      icon: Car,
      title: 'EV Chargers',
      description: 'Professional installation of electric vehicle charging stations for home and commercial use.',
      link: '/services/ev-chargers',
      serviceType: 'EV Chargers',
      urgency: 'Medium',
      price: 'Starting at $800'
    },
    {
      icon: Lightbulb,
      title: 'Lighting',
      description: 'Energy-efficient lighting solutions for indoor and outdoor applications.',
      link: '/services/lighting',
      serviceType: 'Lighting',
      urgency: 'Low',
      price: 'Starting at $150'
    },
    {
      icon: Power,
      title: 'Generators',
      description: 'Backup power systems to keep your home or business running during outages.',
      link: '/services/generators',
      serviceType: 'Generators',
      urgency: 'High',
      price: 'Starting at $3,500'
    },
    {
      icon: AlertCircle,
      title: 'Tripping Breaker',
      description: 'Expert diagnosis and repair of circuit breaker issues to ensure electrical safety.',
      link: '/services/tripping-breaker',
      serviceType: 'Tripping Breaker',
      urgency: 'High',
      price: 'Starting at $200'
    },
    {
      icon: Plug,
      title: 'Outlets',
      description: 'Installation and repair of electrical outlets, including GFCI and USB outlets.',
      link: '/services/outlets',
      serviceType: 'Outlets',
      urgency: 'Medium',
      price: 'Starting at $100'
    },
  ];

  const handleScheduleService = (serviceType = '') => {
    setSelectedService(serviceType);
    setIsServiceModalOpen(true);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:785-539-4723';
  };

  return (
    <>
      <Helmet>
        <title>Fast Electrical Service | Perry Electrical - Same Day Available</title>
        <meta 
          name="description" 
          content="Fast, reliable electrical service in Kansas. Same-day repairs, panel upgrades, EV chargers, and more. Licensed & insured. Call (785) 539-4723 now!" 
        />
        <meta name="keywords" content="electrical service, same day electrical, electrical repair, panel upgrade, EV charger, Kansas electrician" />
      </Helmet>

      {/* High-Urgency Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-blue to-accent-dark text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <Container variant="wide" className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 text-sm font-semibold">
              <Clock className="h-4 w-4 mr-2" />
              Same-Day Service Available
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Fast, Reliable Electrical Service
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
              Licensed & Insured • Same-day repairs • Emergency service available
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg font-bold px-8 py-4"
                onClick={() => handleScheduleService()}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Service
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-blue text-lg font-bold px-8 py-4"
                onClick={handleCallNow}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (785) 539-4723
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Same-Day Service
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                5-Star Rated
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-8 border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-blue">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-blue">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-blue">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-blue">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid with High-Urgency CTAs */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
              Our Electrical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional electrical services with same-day availability. Get your electrical issues fixed fast!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const urgencyColor = service.urgency === 'High' ? 'text-red-600 bg-red-100' : 
                                 service.urgency === 'Medium' ? 'text-yellow-600 bg-yellow-100' : 
                                 'text-green-600 bg-green-100';
              
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary-blue/20">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue/10 rounded-lg">
                        <Icon className="text-primary-blue" size={24} />
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${urgencyColor}`}>
                        {service.urgency} Priority
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold mb-2 text-text-dark">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="text-lg font-bold text-primary-blue mb-4">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleScheduleService(service.serviceType)}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule This Service
                      </Button>
                      
                      <Link 
                        to={service.link}
                        className="block text-center text-sm text-primary-blue hover:text-accent-dark transition-colors font-medium"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Emergency Service CTA */}
      <section className="bg-red-600 text-white py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Electrical Emergency?
            </h2>
            <p className="text-xl mb-6 text-red-100">
              Don't wait - electrical issues can be dangerous. Call us now for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 text-lg font-bold px-8 py-4"
                onClick={handleCallNow}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600 text-lg font-bold px-8 py-4"
                onClick={() => handleScheduleService('Emergency Service')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Emergency Service
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">
              Why Choose Perry Electrical?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue/10 rounded-full mb-4">
                <Clock className="text-primary-blue" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Fast Response</h3>
              <p className="text-gray-600">Same-day service available for most electrical issues. We understand you can't wait.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue/10 rounded-full mb-4">
                <Shield className="text-primary-blue" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind. We stand behind our work.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue/10 rounded-full mb-4">
                <Star className="text-primary-blue" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">5-Star Rated</h3>
              <p className="text-gray-600">Consistently rated 5 stars by our customers. Quality service you can trust.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-blue text-white py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let electrical problems disrupt your day. Schedule service now or call for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="text-lg font-bold px-8 py-4"
                onClick={() => handleScheduleService()}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Service Now
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-blue text-lg font-bold px-8 py-4"
                onClick={handleCallNow}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (785) 539-4723
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA 
        onScheduleClick={() => handleScheduleService()}
        onCallClick={handleCallNow}
      />

      {/* Modals */}
      <ScheduleServiceModal 
        isOpen={isServiceModalOpen} 
        onClose={() => setIsServiceModalOpen(false)}
        preselectedService={selectedService}
      />
    </>
  );
};

export default Services;

