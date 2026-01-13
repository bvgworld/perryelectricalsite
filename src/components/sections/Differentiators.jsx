import { ThumbsUp, ShieldCheck, Handshake } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';

const Differentiators = () => {
  const values = [
    {
      title: 'Likeable',
      icon: ThumbsUp,
      description: 'We build lasting relationships through genuine care, clear communication, and a commitment to making every project a positive experience.',
    },
    {
      title: 'Ethical',
      icon: ShieldCheck,
      description: 'Integrity drives everything we do. From fair pricing to transparent practices, we do what\'s right — every time, no exceptions.',
    },
    {
      title: 'Helpful',
      icon: Handshake,
      description: 'We\'re problem-solvers at heart. Whether it\'s a complex build or a simple question, we\'re here to help you succeed.',
    },
  ];

  return (
    <section className="section-padding bg-accent-medium">
      <Container>
        <SectionHeader
          subtitle="Who We Are"
          title="The Perry Electrical Difference"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center bg-accent-light">
                <div className="flex flex-col items-center mb-4">
                  <Icon className="text-primary-blue mb-3" size={48} />
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

