import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import indianHillsImage from '../../assets/Indian Hills Topeka.avif';
import meadowlarkImage from '../../assets/Meadowlark Monarch 1.avif';
import ptmwImage from '../../assets/PTMW Topeka.avif';

const FeaturedProjects = () => {
  const featuredProjects = [
    { id: 1, name: 'Indian Hills Elementary', location: 'Topeka, KS', buildingType: 'Education', description: 'Electrical and fire alarm renovation and addition.', image: indianHillsImage, scope: 'Electrical & Fire Alarm' },
    { id: 2, name: 'Meadowlark', location: 'Manhattan, KS', buildingType: 'Senior Multi-Family', description: 'Complete electrical and fire alarm for 60+ unit facility.', image: meadowlarkImage, scope: 'Full Electrical & Fire Alarm' },
    { id: 3, name: 'PTMW Manhattan', location: 'Manhattan, KS', buildingType: 'Office / Manufacturing', description: 'Electrical and fire alarm for office and manufacturing facility.', image: ptmwImage, scope: 'Electrical & Fire Alarm' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <p className="section-label">Our Work</p>
            <h2 className="text-2xl md:text-3xl font-heading text-text-dark tracking-[0.02em]">Featured Projects</h2>
          </div>
          <Button variant="ghost" size="sm" as={Link} to="/projects">
            View all projects <ArrowRight size={14} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group border border-gray-100 rounded-lg overflow-hidden bg-accent-light hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white bg-black/30 px-2.5 py-1 rounded backdrop-blur-sm tracking-wide">
                  {project.buildingType}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-heading text-text-dark tracking-[0.02em] mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{project.location}</p>
                
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-[10px] text-gray-400 uppercase tracking-[0.08em]">Scope</div>
                  <div className="text-sm text-text-dark">{project.scope}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
