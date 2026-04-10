const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  as,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 cursor-pointer gap-2';
  
  const variants = {
    primary: 'bg-accent-red text-white hover:bg-red-800 shadow-sm',
    secondary: 'bg-white text-accent-dark border border-gray-200 hover:bg-gray-50 hover:border-gray-300',
    outline: 'bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white/60',
    dark: 'bg-accent-dark text-white hover:bg-gray-800',
    ghost: 'bg-transparent text-primary-blue hover:text-accent-dark p-0',
    'outline-blue': 'bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm',
  };
  
  const Component = as || 'button';
  
  return (
    <Component
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
