import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const Differentiators = () => {
  const values = [
    {
      title: 'Likeable',
      description: 'We build lasting relationships through genuine care and clear communication.',
    },
    {
      title: 'Ethical',
      description: 'Integrity drives everything we do. Fair pricing, transparent practices, every time.',
    },
    {
      title: 'Helpful',
      description: "We're problem-solvers at heart. Complex build or simple question — we're here.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionHeader subtitle="Who We Are" title="The Perry Electrical Difference" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div 
              key={value.title} 
              className="px-8 py-9 rounded-xl bg-accent-light border-l-[3px] border-primary-blue"
            >
              <h3 className="text-xl font-heading mb-2 text-text-dark tracking-[0.02em]">
                {value.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Differentiators;
