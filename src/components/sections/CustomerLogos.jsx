import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import axiotaLogo from '../../assets/Axiota.png';
import bhsLogo from '../../assets/BHS.png';
import iconStructuresLogo from '../../assets/Icon Structures.png';
import kawValleyLogo from '../../assets/Kaw Valley USD.png';
import loydBuildersLogo from '../../assets/Loyd Builders.png';
import mccowanGordonLogo from '../../assets/McCowan Gordon.png';
import rileyConstructionsLogo from '../../assets/Riley Constructions.png';

const CustomerLogos = () => {
  const customers = [
    {
      name: 'Axiota',
      logo: axiotaLogo,
      website: 'https://axiota.com'
    },
    {
      name: 'BHS Construction',
      logo: bhsLogo,
      website: 'https://bhsconstruction.com'
    },
    {
      name: 'Icon Structures',
      logo: iconStructuresLogo,
      website: '#'
    },
    {
      name: 'Kaw Valley USD',
      logo: kawValleyLogo,
      website: 'https://kawvalleyusd.org'
    },
    {
      name: 'Loyd Builders',
      logo: loydBuildersLogo,
      website: 'https://loydbuilders.com'
    },
    {
      name: 'McCowan Gordon',
      logo: mccowanGordonLogo,
      website: 'https://mccowangordon.com'
    },
    {
      name: 'Riley Constructions',
      logo: rileyConstructionsLogo,
      website: 'https://rileyconstruction.com'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeader
          subtitle="Trusted Partners"
          title="Customers We've Worked With"
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 items-center">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={customer.logo}
                alt={`${customer.name} logo`}
                className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Proud to partner with leading construction companies and organizations across Kansas
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CustomerLogos;


