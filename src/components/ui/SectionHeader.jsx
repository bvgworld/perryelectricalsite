const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  const alignClass = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {subtitle && (
        <p className="text-primary-blue font-semibold tracking-wider text-sm mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-text-dark font-heading font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;

