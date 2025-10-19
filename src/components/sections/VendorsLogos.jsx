const VendorsLogos = () => {
  const vendors = [
    {
      name: 'Border States',
      logo: 'https://via.placeholder.com/200x100/1e40af/ffffff?text=Border+States',
    },
    {
      name: 'Tech Electronics',
      logo: 'https://via.placeholder.com/200x100/059669/ffffff?text=Tech+Electronics',
    },
    {
      name: 'Big Muddy Fire Alarms',
      logo: 'https://via.placeholder.com/200x100/dc2626/ffffff?text=Big+Muddy',
    },
    {
      name: 'Marmic Fire Alarms',
      logo: 'https://via.placeholder.com/200x100/7c3aed/ffffff?text=Marmic',
    },
    {
      name: 'Data-Tel',
      logo: 'https://via.placeholder.com/200x100/ea580c/ffffff?text=Data-Tel',
    },
    {
      name: 'American Electric',
      logo: 'https://via.placeholder.com/200x100/0891b2/ffffff?text=American+Electric',
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
      {vendors.map((vendor, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <img
            src={vendor.logo}
            alt={`${vendor.name} logo`}
            className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default VendorsLogos;

