import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const ProcessTimeline = () => {
  const steps = [
    { number: '01', title: 'Discovery & Estimate', description: 'We understand the project and submit a competitive estimate.' },
    { number: '02', title: 'Pre-Construction', description: 'Planning, procurement, and coordination for a smooth start.' },
    { number: '03', title: 'Execution', description: 'Precision installation following best practices and quality checks.' },
    { number: '04', title: 'Close-out', description: 'Inspections, documentation, and thorough walkthroughs.' },
  ];

  return (
    <section className="py-16 md:py-20 bg-accent-dark">
      <Container>
        <SectionHeader 
          subtitle="How We Work" 
          title="Our Proven Process" 
          titleClassName="text-white"
          className="text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white/[0.05] rounded-lg p-6 border border-white/[0.06]">
              <div className="text-[11px] font-semibold text-primary-blue uppercase tracking-[0.1em] mb-3">
                Step {step.number}
              </div>
              <h3 className="text-lg font-heading text-white tracking-[0.02em] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessTimeline;
