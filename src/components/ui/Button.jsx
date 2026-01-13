const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  as,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-accent-red text-white hover:bg-red-800',
    secondary: 'bg-cta-gray text-accent-dark hover:bg-cta-gray-hover',
    outline: 'bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
    dark: 'bg-accent-dark text-white hover:bg-primary-blue',
  };
  
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-2.5 text-lg',
  };
  
  const Component = as || 'button';
  
  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;

