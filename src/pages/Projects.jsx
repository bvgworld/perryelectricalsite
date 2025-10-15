import { Helmet } from 'react-helmet-async';
import { Building2, Factory, School, ArrowRight, Image as ImageIcon } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { projects, loading: projectsLoading, error: projectsError } = useProjects();

  // Format projects for display
  const formatProjectForDisplay = (project) => {
    const getIcon = (type) => {
      switch (type) {
        case 'Commercial':
          return Building2;
        case 'Industrial':
          return Factory;
        case 'Institutional':
          return School;
        default:
          return Building2;
      }
    };

    return {
      title: project.description?.substring(0, 50) + '...' || 'Project',
      type: project.projectType,
      size: project.projectSize,
      timeline: project.projectLength,
      description: project.description,
      image: project.projectImage,
      icon: getIcon(project.projectType),
      id: project.id
    };
  };

  const displayProjects = projects.map(formatProjectForDisplay);

  return (
    <>
      <Helmet>
        <title>Past Projects | Perry Electrical</title>
        <meta 
          name="description" 
          content="Explore Perry Electrical's portfolio of completed commercial, industrial, and institutional projects across Kansas." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-accent-dark text-white py-20">
        <Container variant="wide">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl mb-6">
              Past Projects
            </h1>
            <p className="text-xl text-gray-300">
              A showcase of our expertise in commercial, industrial, and institutional electrical construction. Each project reflects our commitment to quality, safety, and client satisfaction.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            subtitle="Our Work"
            title="Project Showcase"
          />
          
          {projectsLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          ) : projectsError ? (
            <div className="text-center py-12">
              <p className="text-red-600">Error loading projects. Please try again later.</p>
            </div>
          ) : displayProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {displayProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={project.id || index}>
                    {project.image && (
                      <div className="mb-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-full flex-shrink-0">
                        <Icon className="text-primary-blue" size={28} />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary-green/10 text-secondary-green rounded-full mb-2">
                          {project.type}
                        </span>
                        <h3 className="text-2xl font-heading font-bold text-text-dark">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mb-4 text-sm text-gray-600">
                      <span>📐 {project.size}</span>
                      <span>⏱️ {project.timeline}</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
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

      {/* CTA Section */}
      <section className="section-padding bg-accent-dark text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-6">
              Partner With Us on Your Next Project
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our proven process and expertise can bring your vision to life.
            </p>
            <Button variant="secondary" size="lg" className="group">
              Request a Project Bid
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;

