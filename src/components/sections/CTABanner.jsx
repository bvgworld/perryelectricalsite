import { ArrowRight } from 'lucide-react';

const CTABanner = ({ 
  title, 
  subtitle, 
  buttonText = "Get Started", 
  variant = "blue", 
  onButtonClick,
  className = "" 
}) => {
  const variants = {
    blue: {
      container: "bg-primary-blue",
      text: "text-white",
      button: "bg-accent-red text-white hover:bg-red-800"
    },
    dark: {
      container: "bg-accent-dark",
      text: "text-white", 
      button: "bg-accent-red text-white hover:bg-red-800"
    }
  };

  const currentVariant = variants[variant] || variants.blue;

  return (
    <section className={`py-4 ${currentVariant.container} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${currentVariant.text}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg md:text-xl mb-6 max-w-3xl mx-auto ${currentVariant.text} opacity-90`}>
              {subtitle}
            </p>
          )}
          <button
            onClick={onButtonClick}
            className={`inline-flex items-center justify-center font-semibold rounded transition-all duration-300 cursor-pointer px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 ${currentVariant.button}`}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
