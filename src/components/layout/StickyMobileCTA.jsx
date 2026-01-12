import { Phone, Calendar } from 'lucide-react';
import Button from '../ui/Button';

const StickyMobileCTA = ({ onScheduleClick, onCallClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="flex">
        <Button
          variant="outline"
          size="sm"
          onClick={onCallClick}
          className="flex-1 rounded-none border-0 border-r border-gray-200 py-4 text-primary-blue hover:bg-primary-blue/5"
        >
          <Phone className="h-5 w-5 mr-2" />
          Call Now
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={onScheduleClick}
          className="flex-1 rounded-none py-4"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Schedule Service
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;


