import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  size = 'md'
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusable = Array.from(
        modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      );
      const firstField = focusable.find(
        (el) =>
          el.tagName === 'INPUT' ||
          el.tagName === 'TEXTAREA' ||
          el.tagName === 'SELECT'
      );
      const first = firstField || focusable[0];
      const last = focusable[focusable.length - 1];
      const handleTab = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === first) {
              last?.focus();
              e.preventDefault();
            }
          } else if (document.activeElement === last) {
            first?.focus();
            e.preventDefault();
          }
        }
      };
      first?.focus();
      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-xl',
    xl: 'max-w-2xl'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-accent-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-start md:items-center justify-center p-4 pt-16 md:pt-4">
        <div
          ref={modalRef}
          className={`relative w-full ${sizeClasses[size]} bg-white rounded-xl shadow-2xl ${className}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
        >
          {title && (
            <div className="flex items-center justify-between px-5 md:px-6 pt-5 md:pt-6 pb-4 border-b border-gray-100">
              <h3 id="modal-title" className="text-lg font-heading text-text-dark tracking-[0.02em]">
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border-0 bg-transparent outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-0"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          )}

          <div className="px-5 md:px-6 py-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
