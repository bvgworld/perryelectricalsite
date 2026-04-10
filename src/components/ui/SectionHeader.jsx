const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '',
  titleClassName = 'text-text-dark',
}) => {
  const alignClass = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {subtitle && (
        <p className="section-label">
          {subtitle}
        </p>
      )}
      <h2 className={`text-2xl md:text-3xl font-heading ${titleClassName}`} style={{ letterSpacing: '0.02em' }}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
