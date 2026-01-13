import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import FeaturedProjectsCarousel from '../components/sections/FeaturedProjectsCarousel';
import ProjectListItem from '../components/projects/ProjectListItem';
import Differentiators from '../components/sections/Differentiators';
import VendorsLogos from '../components/sections/VendorsLogos';
import ProjectBidModal from '../components/modals/ProjectBidModal';
import ProjectManagerModal from '../components/modals/ProjectManagerModal';
import { useProjects } from '../hooks/useProjects';
import bhsLogo from '../assets/BHS.png';
import iconStructuresLogo from '../assets/Icon Structures.png';
import loydBuildersLogo from '../assets/Loyd Builders.png';
import mccowanGordonLogo from '../assets/McCowan Gordon.png';
import rileyConstructionsLogo from '../assets/Riley Constructions.png';

const Projects = () => {
  const { projects, loading: projectsLoading, error: projectsError } = useProjects();
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [isPMModalOpen, setIsPMModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

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

  const displayedProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <>
      <Helmet>
        <title>Past Projects | Perry Electrical</title>
        <meta 
          name="description" 
          content="Explore Perry Electrical's portfolio of completed commercial, industrial, and institutional projects across Kansas." 
        />
      </Helmet>

      {/* Featured Projects Carousel */}
      <FeaturedProjectsCarousel />

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

      {/* Projects List Section */}
      <section className="py-16 bg-white">
        <Container>
          {projectsLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          ) : projectsError ? (
            <div className="text-center py-12">
              <p className="text-red-600">Error loading projects. Please try again later.</p>
            </div>
          ) : displayedProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedProjects.map((project) => (
                  <ProjectListItem key={project.id} project={project} />
                ))}
              </div>
              
              {hasMore && (
                <div className="text-center mt-12">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleLoadMore}
                  >
                    Load More Projects
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-heading font-bold text-text-dark mb-2">
                No Projects Yet
              </h3>
              <p className="text-gray-600">
                We're working on adding our project portfolio. Check back soon!
              </p>
            </div>
          )}
        </Container>
      </section>

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
