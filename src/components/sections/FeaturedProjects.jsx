import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useFeaturedProjectsData } from '../../hooks/useFeaturedProjectsData';

const FeaturedProjects = () => {
  const { featuredProjects, loading, error } = useFeaturedProjectsData();
  
  // Debug logging
  console.log('FeaturedProjects - Loading:', loading);
  console.log('FeaturedProjects - Error:', error);
  console.log('FeaturedProjects - Projects:', featuredProjects);

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          subtitle="Our Work"
          title="Featured Projects"
        />
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} padding={false}>
                <div className="h-48 bg-gray-200 rounded-t-md animate-pulse" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-3" />
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                </div>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Unable to load featured projects</p>
            <p className="text-gray-500 text-sm">Please try again later</p>
          </div>
        ) : featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} padding={false}>
                <div className="h-48 bg-gray-300 rounded-t-md overflow-hidden">
                  {project.projectImage ? (
                    <img
                      src={project.projectImage}
                      alt={project.description?.substring(0, 50) || 'Project'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-blue to-accent-dark opacity-30 flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-white opacity-50" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary-green/10 text-secondary-green rounded-full mb-3">
                    {project.projectType}
                  </span>
                  <h3 className="text-xl font-heading font-bold mb-2 text-text-dark">
                    {project.description?.substring(0, 50)}...
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  {project.projectSize && (
                    <p className="text-sm text-gray-500 mt-2">
                      Size: {project.projectSize}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No featured projects available</p>
          </div>
        )}
        
        <div className="text-center">
          <Link to="/projects">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;

