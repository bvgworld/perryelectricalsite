import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import indianHillsImage from '../../assets/Indian Hills Topeka.avif';
import meadowlarkImage from '../../assets/Meadowlark Monarch 1.avif';
import plazaImage from '../../assets/Plaza Of The Flint Hills 2.avif';

const FeaturedProjects = () => {
  // Hardcoded featured projects from projects page
  const featuredProjects = [
    {
      id: 1,
      name: 'Indian Hills Elementary',
      location: 'Topeka, KS',
      buildingType: 'Education',
      description: 'Electrical and fire alarm renovation and addition project for elementary school facility.',
      image: indianHillsImage,
      scope: 'Electrical & Fire Alarm Renovation and Addition'
    },
    {
      id: 2,
      name: 'Meadowlark',
      location: 'Manhattan, KS',
      buildingType: 'Senior Multi-Family',
      description: 'Complete electrical and fire alarm systems for new senior multi-family residential construction.',
      image: meadowlarkImage,
      scope: 'Electrical & Fire Alarm New Construction'
    },
    {
      id: 3,
      name: 'Plaza of the Flint Hills',
      location: 'Manhattan, KS',
      buildingType: 'Entertainment',
      description: 'Exterior lighting installation for public entertainment plaza, creating an inviting and safe environment.',
      image: plazaImage,
      scope: 'Exterior Lighting'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          subtitle="Our Work"
          title="Featured Projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} padding={false}>
              <div className="h-48 bg-gray-300 rounded-t-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent-red/10 text-accent-red rounded-full mb-3">
                  {project.buildingType}
                </span>
                <h3 className="text-xl font-heading font-bold mb-2 text-text-dark">
                  {project.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500">
                  {project.location}
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

