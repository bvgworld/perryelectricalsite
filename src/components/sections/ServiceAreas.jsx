import Container from '../ui/Container';
import { MapPin } from 'lucide-react';

const serviceAreas = [
  'Manhattan', 'Topeka', 'St. Marys', 'Junction City', 'Wamego',
  'Ogden', 'Riley', 'Leonardville', 'Westmoreland', 'Emmett'
];

const ServiceAreas = ({ serviceName }) => {
  return (
    <section className="py-8 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-text-dark mb-4 flex items-center justify-center gap-2">
            <MapPin className="text-accent-red" size={24} />
            {serviceName} Service Areas
          </h2>
          <p className="text-gray-600 mb-4">
            We proudly serve homeowners and businesses across northeast Kansas, including:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-accent-light text-text-dark text-sm rounded-full font-medium"
              >
                {area}, KS
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceAreas;
