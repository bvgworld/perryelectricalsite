const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = true 
}) => {
  const hoverEffect = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const paddingClass = padding ? 'p-6' : '';
  
  return (
    <div 
      className={`bg-white rounded-md shadow-md transition-all duration-300 ${hoverEffect} ${paddingClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

