import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Clock, Shield, Star } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScheduleServiceModal from '../components/modals/ScheduleServiceModal';
import StickyMobileCTA from '../components/layout/StickyMobileCTA';
import GoogleReviewsCarousel from '../components/sections/GoogleReviewsCarousel';
import { useGoogleReviews } from '../hooks/useGoogleReviews';
import { generateReviewsSchema, injectSchema } from '../lib/seoHelpers';
import serviceVanHero from '../assets/Service Van Hero.png';
import breakerBoxImage from '../assets/breaker box.jpeg';
import interiorLightingImage from '../assets/interior lighting.jpeg';
import outdoorLightingImage from '../assets/outdoor lighting.jpeg';
import bathExhaustFansImage from '../assets/Bath Exhaust Fans.jpeg';
import generatorsImage from '../assets/generators.jpeg';
import outletsImage from '../assets/Outlets.jpeg';
import ceilingFansImage from '../assets/Celing Fans.jpeg';
import trippingBreakersImage from '../assets/tripping breakers.jpeg';
import evChargersImage from '../assets/EV chargers.jpeg';
import hotTubOutletsImage from '../assets/Hot Tub Outlets.jpeg';
import solarConnectionImage from '../assets/solar connection.jpeg';
import dataCablingImage from '../assets/Data Cabling.jpeg';
import underCabinetLightingImage from '../assets/under cabinet lighting.jpeg';
import camerasSecurityImage from '../assets/Cameras & Security.jpeg';
import smokeFireDetectionImage from '../assets/Smoke & Fire Detction.jpeg';
import miniSplitDisconnectsImage from '../assets/Mini Split Disconnects.jpeg';

const Services = () => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const { reviews, aggregateRating } = useGoogleReviews();

  // Inject review schema for SEO
  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const reviewSchema = generateReviewsSchema(reviews, aggregateRating);
      if (reviewSchema) {
        const cleanup = injectSchema(reviewSchema);
        return cleanup;
      }
    }
  }, [reviews, aggregateRating]);

  const services = [
    {
      title: 'Panel Upgrades',
      description: 'Upgrade your electrical panel to meet modern power demands safely and efficiently.',
      link: '/services/panel-upgrades',
      serviceType: 'Panel Upgrades',
      image: breakerBoxImage
    },
    {
      title: 'Interior Lighting',
      description: 'Professional interior lighting installation and upgrades for homes and businesses.',
      link: '/services/interior-lighting',
      serviceType: 'Interior Lighting',
      image: interiorLightingImage
    },
    {
      title: 'Outdoor Lighting',
      description: 'Landscape, security, and outdoor lighting solutions to enhance your property.',
      link: '/services/outdoor-lighting',
      serviceType: 'Outdoor Lighting',
      image: outdoorLightingImage
    },
    {
      title: 'Bath Exhaust Fans',
      description: 'Bathroom exhaust fan installation and replacement for proper ventilation.',
      link: '/services/bath-exhaust-fans',
      serviceType: 'Bath Exhaust Fans',
      image: bathExhaustFansImage
    },
    {
      title: 'Generators',
      description: 'Backup power systems to keep your home or business running during outages.',
      link: '/services/generators',
      serviceType: 'Generators',
      image: generatorsImage
    },
    {
      title: 'Outlets',
      description: 'Installation and repair of electrical outlets, including GFCI and USB outlets.',
      link: '/services/outlets',
      serviceType: 'Outlets',
      image: outletsImage
    },
    {
      title: 'Ceiling Fans',
      description: 'Ceiling fan installation, wiring, and replacement services.',
      link: '/services/ceiling-fans',
      serviceType: 'Ceiling Fans',
      image: ceilingFansImage
    },
    {
      title: 'Tripping Breaker',
      description: 'Expert diagnosis and repair of circuit breaker issues to ensure electrical safety.',
      link: '/services/tripping-breaker',
      serviceType: 'Tripping Breaker',
      image: trippingBreakersImage
    },
    {
      title: 'EV Chargers',
      description: 'Professional installation of electric vehicle charging stations for home and commercial use.',
      link: '/services/ev-chargers',
      serviceType: 'EV Chargers',
      image: evChargersImage
    },
    {
      title: 'Hot Tub Outlets',
      description: 'Specialized 240V outlet installation for hot tubs and spa equipment.',
      link: '/services/hot-tub-outlets',
      serviceType: 'Hot Tub Outlets',
      image: hotTubOutletsImage
    },
    {
      title: 'Solar Connection',
      description: 'Electrical connection and installation services for solar panel systems.',
      link: '/services/solar-connection',
      serviceType: 'Solar Connection',
      image: solarConnectionImage
    },
    {
      title: 'Data Cabling',
      description: 'Ethernet and network cabling installation for homes and businesses.',
      link: '/services/data-cabling',
      serviceType: 'Data Cabling',
      image: dataCablingImage
    },
    {
      title: 'Under Cabinet Lighting',
      description: 'Under cabinet LED lighting installation for kitchens and workspaces.',
      link: '/services/under-cabinet-lighting',
      serviceType: 'Under Cabinet Lighting',
      image: underCabinetLightingImage
    },
    {
      title: 'Cameras & Security',
      description: 'Security camera and surveillance system electrical installation and wiring.',
      link: '/services/cameras-security',
      serviceType: 'Cameras & Security',
      image: camerasSecurityImage
    },
    {
      title: 'Smoke & Fire Detection',
      description: 'Smoke detector and fire alarm installation, replacement, and wiring services.',
      link: '/services/smoke-fire-detection',
      serviceType: 'Smoke & Fire Detection',
      image: smokeFireDetectionImage
    },
    {
      title: 'Mini Split Disconnects',
      description: 'HVAC disconnect installation and electrical connections for mini-split systems.',
      link: '/services/mini-split-disconnects',
      serviceType: 'Mini Split Disconnects',
      image: miniSplitDisconnectsImage
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
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={serviceVanHero}
            alt="Perry Electrical Service Van"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <Container variant="wide" className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 bg-primary-blue rounded-full px-3 py-1.5 mb-6 text-xs font-semibold text-white">
              <Shield className="h-4 w-4 shrink-0" />
              Lifetime Guarantee
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Fast, Reliable Electrical Service
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
              Licensed & Insured • Same-day repairs • Emergency service available
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" size="lg" onClick={handleCallNow}>
                <Phone size={16} />
                (785) 539-4723
              </Button>

              <Button variant="outline" size="lg" onClick={() => handleScheduleService()} className="border-white/40 text-white hover:bg-white/10">
                <Calendar size={16} />
                Schedule Service
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <Shield size={12} />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} />
                Same-Day Available
              </div>
              <div className="flex items-center gap-1.5">
                <Star size={12} />
                5-Star Rated
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-8 border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="md:border-r md:border-gray-200 md:pr-6">
              <div className="text-4xl font-heading font-bold text-primary-blue">20+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="md:border-r md:border-gray-200 md:pr-6 md:pl-6">
              <div className="text-4xl font-heading font-bold text-primary-blue">1000+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Happy Customers</div>
            </div>
            <div className="col-span-2 md:col-span-1 md:pl-6">
              <div className="text-4xl font-heading font-bold text-primary-blue">5.0</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Google Rating</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Google Reviews Carousel */}
      <GoogleReviewsCarousel />

      {/* Services Grid with High-Urgency CTAs */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading text-text-dark mb-4 tracking-[0.02em]">
              Our Electrical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional electrical services with same-day availability. Get your electrical issues fixed fast!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <Card key={index} hover={false} padding={false} className="group border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden rounded-lg">
                  {/* Landscape Image */}
                  <div className="w-full h-44 overflow-hidden">
                    <img
                      src={service.image || breakerBoxImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-heading font-bold mb-2 text-text-dark">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mt-auto">
                      <Button 
                        variant="dark" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleScheduleService(service.serviceType)}
                      >
                        Book Now
                      </Button>
                      
                      <Link 
                        to={service.link}
                        className="block text-center text-sm text-gray-400 hover:text-primary-blue transition-colors font-medium"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Emergency Banner */}
      <section className="py-5 bg-accent-dark">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
            <p className="text-base font-medium text-center sm:text-left">
              Electrical emergency? We&apos;re here to help.
            </p>
            <a
              href="tel:+17855394723"
              className="inline-flex items-center gap-2 px-5 py-2 bg-accent-red text-white rounded-md font-medium text-sm hover:bg-red-800 transition-colors"
            >
              <Phone size={14} />
              (785) 539-4723
            </a>
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
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue/10 rounded-lg mb-4">
                <Clock className="text-primary-blue" size={22} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Fast Response</h3>
              <p className="text-gray-600">Same-day service available for most electrical issues. We understand you can't wait.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue/10 rounded-lg mb-4">
                <Shield className="text-primary-blue" size={22} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind. We stand behind our work.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue/10 rounded-lg mb-4">
                <Star className="text-primary-blue" size={22} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">5-Star Rated</h3>
              <p className="text-gray-600">Consistently rated 5 stars by our customers. Quality service you can trust.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-accent-dark text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading tracking-[0.02em] mb-2">Ready to Get Started?</h2>
              <p className="text-white/60 text-base">Schedule service now or call for immediate help.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" onClick={() => handleScheduleService()}>
                <Calendar size={14} />
                Schedule Service
              </Button>
              <Button variant="outline" size="lg" onClick={handleCallNow}>
                <Phone size={14} />
                Call Now
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

