const Container = ({ 
  children, 
  className = '', 
  variant = 'default', // 'default', 'narrow', 'wide', 'full'
  fullWidth = false 
}) => {
  const getContainerClass = () => {
    if (fullWidth) return 'w-full';
    
    switch (variant) {
      case 'narrow':
        return 'container-narrow';
      case 'wide':
        return 'container-wide';
      case 'full':
        return 'w-full';
      default:
        return 'container-custom';
    }
  };

  return (
    <div className={`${getContainerClass()} ${className}`}>
      {children}
    </div>
  );
};

export default Container;

