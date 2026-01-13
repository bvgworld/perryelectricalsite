import bigMuddyLogo from '../../assets/Big Muddy.png';
import borderStatesLogo from '../../assets/Border States.png';
import marmicLogo from '../../assets/Marmic.png';
import techElectronicsLogo from '../../assets/Tech Electronics.png';

const VendorsLogos = () => {
  const vendors = [
    {
      name: 'Big Muddy Protection Group',
      logo: bigMuddyLogo,
    },
    {
      name: 'Border States',
      logo: borderStatesLogo,
    },
    {
      name: 'Marmic Fire & Safety',
      logo: marmicLogo,
    },
    {
      name: 'Tech Electronics',
      logo: techElectronicsLogo,
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-6 items-center">
      {vendors.map((vendor, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <img
            src={vendor.logo}
            alt={`${vendor.name} logo`}
            className="max-h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default VendorsLogos;


