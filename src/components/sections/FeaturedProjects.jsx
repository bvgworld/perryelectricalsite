import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Downtown Medical Center',
      type: 'Commercial',
      description: 'Complete electrical installation for 50,000 sq ft medical facility including backup power systems.',
      image: '/project-1.jpg',
    },
    {
      title: 'Industrial Manufacturing Plant',
      type: 'Industrial',
      description: 'High-voltage distribution and control systems for automated manufacturing operations.',
      image: '/project-2.jpg',
    },
    {
      title: 'University Research Building',
      type: 'Institutional',
      description: 'Advanced electrical infrastructure supporting cutting-edge research laboratories.',
      image: '/project-3.jpg',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          subtitle="Our Work"
          title="Featured Projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {projects.map((project, index) => (
            <Card key={index} padding={false}>
              <div className="h-48 bg-gray-300 rounded-t-md overflow-hidden">
                {/* Placeholder for project image */}
                <div className="w-full h-full bg-gradient-to-br from-primary-blue to-accent-dark opacity-30" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary-green/10 text-secondary-green rounded-full mb-3">
                  {project.type}
                </span>
                <h3 className="text-xl font-heading font-bold mb-2 text-text-dark">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
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

