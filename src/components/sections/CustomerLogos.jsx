import Container from '../ui/Container';
import bhsLogo from '../../assets/BHS.png';
import iconStructuresLogo from '../../assets/Icon Structures.png';
import loydBuildersLogo from '../../assets/Loyd Builders.png';
import mccowanGordonLogo from '../../assets/McCowan Gordon.png';
import rileyConstructionsLogo from '../../assets/Riley Constructions.png';

const CustomerLogos = () => {
  const logos = [
    { src: bhsLogo, alt: 'BHS Construction' },
    { src: iconStructuresLogo, alt: 'Icon Structures' },
    { src: loydBuildersLogo, alt: 'Loyd Builders' },
    { src: mccowanGordonLogo, alt: 'McCowan Gordon' },
    { src: rileyConstructionsLogo, alt: 'Riley Constructions' },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <Container>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.1em] text-center mb-8">
          Trusted by leading contractors across Kansas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomerLogos;
