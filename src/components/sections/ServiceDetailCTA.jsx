import { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ScheduleServiceModal from '../modals/ScheduleServiceModal';
import StickyMobileCTA from '../layout/StickyMobileCTA';

const ServiceDetailCTA = ({ serviceName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCallNow = () => {
    window.location.href = 'tel:+17855394723';
  };

  return (
    <>
      <section className="section-padding bg-tertiary-light">
        <Container>
          <Card className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4 text-text-dark">
              Ready to Schedule {serviceName}?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our licensed electricians are ready to help. Schedule service online or call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Service
              </Button>
              <Button
                variant="outline-blue"
                size="lg"
                onClick={handleCallNow}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (785) 539-4723
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      <StickyMobileCTA
        onScheduleClick={() => setIsModalOpen(true)}
        onCallClick={handleCallNow}
      />

      <ScheduleServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={serviceName}
      />
    </>
  );
};

export default ServiceDetailCTA;
