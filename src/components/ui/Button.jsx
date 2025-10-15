const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-primary-blue text-white hover:bg-accent-dark',
    secondary: 'bg-secondary-green text-white hover:bg-green-600',
    outline: 'bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
    dark: 'bg-accent-dark text-white hover:bg-primary-blue',
  };
  
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-2.5 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

