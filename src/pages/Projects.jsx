import { Helmet } from 'react-helmet-async';
import { Building2, Factory, School, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Projects = () => {
  const projects = [
    {
      title: 'Downtown Medical Center',
      type: 'Commercial',
      size: '50,000 sq ft',
      timeline: '6 months',
      description: 'Complete electrical installation for state-of-the-art medical facility including emergency backup power systems, surgical suite wiring, and specialized medical equipment connections.',
      icon: Building2,
    },
    {
      title: 'Industrial Manufacturing Plant',
      type: 'Industrial',
      size: '100,000 sq ft',
      timeline: '9 months',
      description: 'High-voltage distribution and control systems for automated manufacturing operations, including 480V three-phase power distribution and PLC control integration.',
      icon: Factory,
    },
    {
      title: 'University Research Building',
      type: 'Institutional',
      size: '75,000 sq ft',
      timeline: '8 months',
      description: 'Advanced electrical infrastructure supporting cutting-edge research laboratories with specialized power requirements and redundant backup systems.',
      icon: School,
    },
    {
      title: 'Corporate Office Complex',
      type: 'Commercial',
      size: '40,000 sq ft',
      timeline: '5 months',
      description: 'Modern office electrical systems with energy-efficient LED lighting, smart building controls, and structured cabling infrastructure.',
      icon: Building2,
    },
    {
      title: 'Food Processing Facility',
      type: 'Industrial',
      size: '80,000 sq ft',
      timeline: '7 months',
      description: 'Specialized electrical installation meeting food safety standards, including stainless steel conduit, wash-down rated fixtures, and process control systems.',
      icon: Factory,
    },
    {
      title: 'Community College Expansion',
      type: 'Institutional',
      size: '60,000 sq ft',
      timeline: '7 months',
      description: 'Comprehensive electrical systems for new classroom buildings, including audiovisual infrastructure, emergency lighting, and energy management systems.',
      icon: School,
    },
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index}>
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

