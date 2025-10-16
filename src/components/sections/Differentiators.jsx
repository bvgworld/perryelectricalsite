import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';

const Differentiators = () => {
  const values = [
    {
      title: 'Likeable',
      description: 'We build lasting relationships through genuine care, clear communication, and a commitment to making every project a positive experience.',
    },
    {
      title: 'Ethical',
      description: 'Integrity drives everything we do. From fair pricing to transparent practices, we do what\'s right — every time, no exceptions.',
    },
    {
      title: 'Helpful',
      description: 'We\'re problem-solvers at heart. Whether it\'s a complex build or a simple question, we\'re here to help you succeed.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          subtitle="Who We Are"
          title="The Perry Electrical Difference"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            return (
              <Card key={index} className="text-center">
                <div className="inline-flex items-center justify-center px-6 py-3 mb-4 bg-primary-blue/10 rounded-full">
                  <span className="text-primary-blue font-heading font-bold text-lg">
                    {value.title}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Differentiators;

