import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ProjectsHeroCarousel from '../components/sections/ProjectsHeroCarousel';
import ProjectShowcase from '../components/projects/ProjectShowcase';
import Differentiators from '../components/sections/Differentiators';
import VendorsLogos from '../components/sections/VendorsLogos';
import ProjectBidModal from '../components/modals/ProjectBidModal';
import ProjectManagerModal from '../components/modals/ProjectManagerModal';
// TODO: Replace with actual project images once uploaded
import projectsImage from '../assets/projectsimage.jpeg';
import bhsLogo from '../assets/BHS.png';
import iconStructuresLogo from '../assets/Icon Structures.png';
import loydBuildersLogo from '../assets/Loyd Builders.png';
import mccowanGordonLogo from '../assets/McCowan Gordon.png';
import rileyConstructionsLogo from '../assets/Riley Constructions.png';

const Projects = () => {
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [isPMModalOpen, setIsPMModalOpen] = useState(false);

  // Capabilities list
  const capabilities = [
    'Design & Build',
    'Estimation',
    'Fire Alarm Installation',
    'Data / Telecom Cabling',
    'Project Management',
    'Dedicated Office Staff',
    'In-House Training'
  ];

  // Hardcoded project showcases
  // TODO: Replace image imports with actual uploaded project images
  const showcaseProjects = [
    {
      id: 1,
      name: 'Indian Hills Elementary',
      location: 'Manhattan, KS',
      description: 'Complete electrical installation for new elementary school facility, including lighting, power distribution, and fire alarm systems.',
      image: projectsImage, // Replace with actual Indian Hills Elementary image
      dollarAmount: '$2.5M',
      squareFootage: '85,000 sq ft',
      scope: 'Full electrical build-out'
    },
    {
      id: 2,
      name: 'Modern Apartment Complex',
      location: 'Topeka, KS',
      description: 'Comprehensive electrical systems for multi-story residential complex, including unit wiring, common area lighting, and security systems.',
      image: projectsImage, // Replace with actual Apartment Complex image
      dollarAmount: '$3.2M',
      squareFootage: '120,000 sq ft',
      scope: 'Complete electrical installation'
    },
    {
      id: 3,
      name: 'Urban Plaza Development',
      location: 'Kansas City, KS',
      description: 'Landscape and architectural lighting installation for public plaza, including fountain lighting, pathway illumination, and decorative fixtures.',
      image: projectsImage, // Replace with actual Urban Plaza image
      dollarAmount: '$850K',
      squareFootage: '45,000 sq ft',
      scope: 'Outdoor lighting and electrical'
    },
    {
      id: 4,
      name: 'Riley County Grade School',
      location: 'Riley County, KS',
      description: 'Electrical renovation and upgrade project for existing grade school, including panel upgrades, new lighting systems, and fire alarm modernization.',
      image: projectsImage, // Replace with actual Riley County Grade School image
      dollarAmount: '$1.8M',
      squareFootage: '95,000 sq ft',
      scope: 'Electrical renovation and upgrades'
    },
    {
      id: 5,
      name: 'Harbor Freight Tools',
      location: 'Wichita, KS',
      description: 'Commercial electrical installation for retail store, including service entrance, distribution panels, and store lighting systems.',
      image: projectsImage, // Replace with actual Harbor Freight Tools image
      dollarAmount: '$650K',
      squareFootage: '25,000 sq ft',
      scope: 'Commercial electrical installation'
    }
  ];

  // General Contractors data (same as CustomerLogos on home page)
  const contractors = [
    {
      name: 'BHS Construction',
      logo: bhsLogo,
    },
    {
      name: 'Icon Structures',
      logo: iconStructuresLogo,
    },
    {
      name: 'Loyd Builders',
      logo: loydBuildersLogo,
    },
    {
      name: 'McCowan Gordon',
      logo: mccowanGordonLogo,
    },
    {
      name: 'Riley Constructions',
      logo: rileyConstructionsLogo,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Past Projects | Perry Electrical</title>
        <meta 
          name="description" 
          content="Explore Perry Electrical's portfolio of completed commercial, industrial, and institutional projects across Kansas." 
        />
      </Helmet>

      {/* Hero Carousel */}
      <ProjectsHeroCarousel />

      {/* CTA Banner: Talk to an Estimator */}
      <section className="py-4 bg-accent-medium">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-accent-dark">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-accent-dark opacity-90">
              Get a competitive estimate for your commercial, industrial, or institutional build
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsBidModalOpen(true)}
              className="shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Talk to an Estimator
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-text-dark mb-12">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-accent-light rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle className="h-6 w-6 text-primary-blue flex-shrink-0" />
                <span className="text-lg text-text-dark font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Showcases */}
      <div className="bg-white">
        {showcaseProjects.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            imageOnLeft={index % 2 === 0}
          />
        ))}
      </div>

      {/* CTA Banner: Talk to a Project Manager */}
      <section className="py-4 bg-accent-medium">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-accent-dark">
              Have Questions About a Project?
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-accent-dark opacity-90">
              Connect with our project management team to discuss your specific needs
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsPMModalOpen(true)}
              className="shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Talk to a Project Manager
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Partners Section: Contractors & Vendors */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* General Contractors */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-dark mb-8">
                General Contractors We Work With
              </h2>
              <div className="grid grid-cols-2 gap-6 items-center">
                {contractors.map((contractor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <img
                      src={contractor.logo}
                      alt={`${contractor.name} logo`}
                      className="max-h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Vendors */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-dark mb-8">
                Vendors We Work With
              </h2>
              <VendorsLogos />
            </div>
          </div>
        </Container>
      </section>

      {/* Differentiators Section */}
      <Differentiators />

      {/* Bottom CTA Banner: Talk to an Estimator */}
      <section className="py-4 bg-accent-dark text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-gray-300">
              Partner with Perry Electrical for your next commercial, industrial, or institutional project
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsBidModalOpen(true)}
              className="shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Talk to an Estimator
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Modals */}
      <ProjectBidModal 
        isOpen={isBidModalOpen} 
        onClose={() => setIsBidModalOpen(false)} 
      />
      <ProjectManagerModal 
        isOpen={isPMModalOpen} 
        onClose={() => setIsPMModalOpen(false)} 
      />
    </>
  );
};

export default Projects;
