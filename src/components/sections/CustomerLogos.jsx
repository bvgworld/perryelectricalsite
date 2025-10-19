import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const CustomerLogos = () => {
  const customers = [
    {
      name: 'BHS Construction',
      logo: 'https://via.placeholder.com/200x100/1e40af/ffffff?text=BHS+Construction',
      website: 'https://bhsconstruction.com'
    },
    {
      name: 'Loyd Builders',
      logo: 'https://via.placeholder.com/200x100/059669/ffffff?text=Loyd+Builders',
      website: 'https://loydbuilders.com'
    },
    {
      name: 'McCowan Gordon',
      logo: 'https://via.placeholder.com/200x100/dc2626/ffffff?text=McCowan+Gordon',
      website: 'https://mccowangordon.com'
    },
    {
      name: 'Riley Construction',
      logo: 'https://via.placeholder.com/200x100/7c3aed/ffffff?text=Riley+Construction',
      website: 'https://rileyconstruction.com'
    },
    {
      name: 'Axiota',
      logo: 'https://via.placeholder.com/200x100/ea580c/ffffff?text=Axiota',
      website: 'https://axiota.com'
    },
    {
      name: 'USD 321',
      logo: 'https://via.placeholder.com/200x100/0891b2/ffffff?text=USD+321',
      website: 'https://usd321.org'
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
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

