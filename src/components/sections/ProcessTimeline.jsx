import { Search, FileText, Wrench, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, requirements, and timeline to create a comprehensive project roadmap.',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Pre-Construction Coordination',
      description: 'Detailed planning, material procurement, and team coordination ensure a smooth start and minimize delays.',
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Execution & Quality Assurance',
      description: 'Our skilled team executes with precision, following best practices and conducting regular quality checks.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Close-out & Turnover',
      description: 'Final inspections, documentation, and thorough walkthroughs ensure your complete satisfaction.',
    },
  ];

  return (
    <section className="section-padding bg-tertiary-light">
      <Container>
        <SectionHeader
          subtitle="How We Work"
          title="Our Proven Process"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-blue/30" />
                )}
                
                <div className="relative bg-white p-6 rounded-md">
                  {/* Step Number */}
                  <div className="text-6xl font-heading font-bold text-primary-blue/10 absolute top-4 right-4">
                    {step.number}
                  </div>
                  
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-primary-blue rounded-full">
                      <Icon className="text-white" size={28} />
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold mb-3 text-text-dark">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProcessTimeline;

