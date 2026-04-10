import { Phone, Calendar } from 'lucide-react';

const StickyMobileCTA = ({ onScheduleClick, onCallClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-14">
        <button
          type="button"
          onClick={onCallClick}
          className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-primary-blue border-r border-gray-200 active:bg-gray-50 transition-colors"
        >
          <Phone size={16} />
          Call Now
        </button>
        <button
          type="button"
          onClick={onScheduleClick}
          className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-white bg-accent-red active:bg-red-800 transition-colors"
        >
          <Calendar size={16} />
          Book Service
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
