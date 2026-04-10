import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ProjectsHeroCarousel from '../components/sections/ProjectsHeroCarousel';
import ProjectShowcase from '../components/projects/ProjectShowcase';
import ProjectBidModal from '../components/modals/ProjectBidModal';
import ProjectManagerModal from '../components/modals/ProjectManagerModal';
import indianHillsImage from '../assets/Indian Hills Topeka.avif';
import meadowlarkImage from '../assets/Meadowlark Monarch 1.avif';
import ptmwImage from '../assets/PTMW Topeka.avif';
import rileyCountyImage from '../assets/riley county grade school.png';
import ultaImage from '../assets/Ulta Manhattan.JPG';

const Projects = () => {
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [isPMModalOpen, setIsPMModalOpen] = useState(false);

  const capabilities = [
    'Design-Build Electrical',
    'Full-Service Contracting',
    'Detailed Estimating',
    'Bondable + Insured',
    'Schedule-Driven Execution',
    'Dedicated Project Management'
  ];

  const showcaseProjects = [
    {
      id: 1,
      name: 'Indian Hills Elementary',
      location: 'Topeka, KS',
      buildingType: 'Education',
      description: 'Electrical and fire alarm renovation and addition project for elementary school facility.',
      image: indianHillsImage,
      scope: 'Electrical & Fire Alarm Renovation and Addition',
      detailedScope: 'Complete electrical renovation including new 800A service, 120+ circuits, fire alarm system with 60+ devices, emergency egress lighting, and data/communication infrastructure for classrooms.'
    },
    {
      id: 2,
      name: 'Meadowlark',
      location: 'Manhattan, KS',
      buildingType: 'Senior Multi-Family',
      description: 'Complete electrical and fire alarm systems for new senior multi-family residential construction.',
      image: meadowlarkImage,
      scope: 'Electrical & Fire Alarm New Construction',
      detailedScope: 'New construction electrical for 60+ unit senior living facility including individual unit panels, common area power and lighting, fire alarm throughout, generator backup, and site lighting.'
    },
    {
      id: 3,
      name: 'PTMW Manhattan',
      location: 'Manhattan, KS',
      buildingType: 'Office / Manufacturing',
      description: 'Comprehensive electrical and fire alarm systems for office and manufacturing facility.',
      image: ptmwImage,
      scope: 'Electrical & Fire Alarm',
      detailedScope: 'Full electrical fit-out for mixed-use office and manufacturing space including 3-phase power distribution, production floor circuits, office lighting and power, and integrated fire alarm system.'
    },
    {
      id: 4,
      name: 'Riley County Grade School',
      location: 'Manhattan, KS',
      buildingType: 'Education',
      description: 'Electrical and fire alarm installation for grade school facility, ensuring safety and modern functionality.',
      image: rileyCountyImage,
      scope: 'Electrical & Fire Alarm',
      detailedScope: 'Ground-up electrical construction for new K-5 facility including full power distribution, classroom technology infrastructure, gymnasium and cafeteria systems, fire alarm, and emergency backup.'
    },
    {
      id: 5,
      name: 'Ulta Manhattan',
      location: 'Manhattan, KS',
      buildingType: 'Retail',
      description: 'Complete electrical and fire alarm systems for retail store.',
      image: ultaImage,
      scope: 'Electrical & Fire Alarm',
      detailedScope: 'Retail tenant improvement including storefront lighting, point-of-sale power, back-of-house electrical, display lighting circuits, and fire alarm tie-in to base building system.'
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

      <ProjectsHeroCarousel />

      {/* CTA Banner: Talk to an Estimator */}
      <section className="py-10 bg-accent-medium">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading text-accent-dark tracking-[0.02em] mb-1">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-sm text-accent-dark/70">
                Get a competitive estimate for your commercial, industrial, or institutional build
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsBidModalOpen(true)}
              className="whitespace-nowrap shrink-0"
            >
              Talk to an Estimator
              <ArrowRight size={14} />
            </Button>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-14 bg-white">
        <Container>
          <div className="text-center mb-10">
            <p className="section-label">What We Deliver</p>
            <h2 className="text-2xl md:text-3xl font-heading text-text-dark tracking-[0.02em]">
              Our Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center gap-3 py-3 px-4"
              >
                <CheckCircle className="h-5 w-5 text-primary-blue flex-shrink-0" />
                <span className="text-sm text-text-dark font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Showcases */}
      <section className="bg-white">
        <Container className="pt-14 pb-4">
          <p className="section-label">Portfolio</p>
          <h2 className="text-2xl md:text-3xl font-heading text-text-dark tracking-[0.02em]">
            Completed Projects
          </h2>
        </Container>
        {showcaseProjects.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            imageOnLeft={index % 2 === 0}
          />
        ))}
      </section>

      {/* CTA Banner: Talk to a Project Manager */}
      <section className="py-10 bg-primary-blue">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading text-white tracking-[0.02em] mb-1">
                Have Questions About a Project?
              </h2>
              <p className="text-sm text-white/70">
                Connect with our project management team to discuss your specific needs
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsPMModalOpen(true)}
              className="whitespace-nowrap shrink-0 bg-white text-accent-dark border-0 hover:bg-gray-100"
            >
              Talk to a Project Manager
              <ArrowRight size={14} />
            </Button>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 bg-accent-dark">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading tracking-[0.02em] mb-1">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-sm text-white/50">
                Partner with Perry Electrical for your next project
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsBidModalOpen(true)}
              className="whitespace-nowrap shrink-0"
            >
              Talk to an Estimator
              <ArrowRight size={14} />
            </Button>
          </div>
        </Container>
      </section>

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
