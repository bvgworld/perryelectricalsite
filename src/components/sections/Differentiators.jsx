import { Heart, Shield, Users } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

const Differentiators = () => {
  const values = [
    {
      icon: Heart,
      title: 'Likeable',
      description: 'We build lasting relationships through genuine care, clear communication, and a commitment to making every project a positive experience.',
    },
    {
      icon: Shield,
      title: 'Ethical',
      description: 'Integrity drives everything we do. From fair pricing to transparent practices, we do what\'s right — every time, no exceptions.',
    },
    {
      icon: Users,
      title: 'Helpful',
      description: 'We\'re problem-solvers at heart. Whether it\'s a complex build or a simple question, we\'re here to help you succeed.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-secondary-green/10 rounded-full">
                  <Icon className="text-secondary-green" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-text-dark">
                  {value.title}
                </h3>
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

