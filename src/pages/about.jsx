import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Target, Award, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProjectBidModal from '../components/modals/ProjectBidModal';
import teamImage from '../assets/team1.jpeg';

const About = () => {
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);

  const coreValues = [
    {
      icon: Award,
      title: 'We Expect Excellence',
      description: 'Excellence is our standard — in every wire pulled, every connection made, and every interaction with our team and clients.',
    },
    {
      icon: Target,
      title: 'We Work Hard, We Work Smart',
      description: 'We combine relentless work ethic with strategic thinking. Efficiency and effort go hand-in-hand on every project.',
    },
    {
      icon: Users,
      title: 'We Are Always Learning',
      description: 'The electrical industry evolves constantly. We invest in training, new techniques, and continuous improvement to stay ahead.',
    },
    {
      icon: Shield,
      title: 'We Have Grit',
      description: 'When projects get tough, we dig in. Persistence and determination define how we approach challenges and deliver results.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Perry Electrical</title>
        <meta 
          name="description" 
          content="Learn about Perry Electrical's history, mission, and commitment to excellence in electrical contracting across Kansas." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-accent-dark text-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                About Perry Electrical
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                For over two decades, Perry Electrical has been Kansas's trusted partner for commercial, industrial, and institutional electrical projects.
              </p>
            </div>
            <div className="h-80 rounded-md overflow-hidden">
              <img
                src={teamImage}
                alt="The Perry Electrical team on a job site"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              subtitle="Our Journey"
              title="Why We Love to Build"
            />
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Perry Electrical was founded on a passion for building — not just electrical systems, but teams, relationships, careers, and solutions. That passion drives everything we do, from the way we estimate projects to the way we develop our people.
              </p>
              <p>
                What started as a commitment to quality electrical contracting has grown into a full-service operation with three divisions: Commercial Construction, Special Projects, and Service. We serve general contractors, developers, and property owners across Kansas with the same values we started with.
              </p>
              <p>
                Our team combines decades of field experience with modern project management, technology, and a relentless focus on getting better every day. We&apos;re not the biggest electrical contractor in Kansas — but we aim to be the best partner you&apos;ll work with.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-tertiary-light">
        <Container>
          <SectionHeader
            subtitle="What Drives Us"
            title="Our Core Values"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 bg-primary-blue/10 rounded-lg">
                    <Icon className="text-primary-blue" size={20} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-text-dark">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-accent-dark text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label text-accent-red mb-3">Our Promise</p>
            <h2 className="text-2xl md:text-3xl font-heading mb-6 tracking-[0.02em]">
              Lifetime Guarantee
            </h2>
            <p className="text-base text-white/50 mb-8 leading-relaxed">
              We stand behind every project with a lifetime guarantee on workmanship. If something isn't right, we'll make it right — no questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => setIsBidModalOpen(true)}
              >
                Work With Us
                <ArrowRight size={14} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/careers"
              >
                Join Our Team
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Bid Modal */}
      <ProjectBidModal 
        isOpen={isBidModalOpen} 
        onClose={() => setIsBidModalOpen(false)} 
      />
    </>
  );
};

export default About;

