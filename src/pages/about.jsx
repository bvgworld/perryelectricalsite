import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Shield, Users, Target, Award, Clock, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProjectBidModal from '../components/modals/ProjectBidModal';

const About = () => {
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);

  const coreValues = [
    {
      icon: Heart,
      title: 'Integrity First',
      description: 'We do what\'s right, even when no one is watching. Our reputation is built on honesty and ethical practices.',
    },
    {
      icon: Shield,
      title: 'Quality Craftsmanship',
      description: 'Every project receives the same attention to detail and commitment to excellence, backed by our lifetime guarantee.',
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work alongside our clients, architects, and builders to create solutions that exceed expectations.',
    },
    {
      icon: Target,
      title: 'Precision & Safety',
      description: 'From planning to execution, we prioritize accuracy and safety in every aspect of our work.',
    },
    {
      icon: Award,
      title: 'Continuous Improvement',
      description: 'We invest in training, technology, and techniques to stay at the forefront of the electrical industry.',
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'We respect your time and deadlines, delivering projects on schedule without compromising quality.',
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
            <div className="h-80 bg-gray-600 rounded-md overflow-hidden">
              {/* Placeholder for team image */}
              <div className="w-full h-full bg-gradient-to-br from-primary-blue to-secondary-green opacity-30" />
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
                Perry Electrical was founded on a simple belief: electrical contracting should be about more than just wires and circuits. It's about building relationships, creating solutions, and shaping the future of our communities.
              </p>
              <p>
                From our first small residential project to today's large-scale commercial and industrial installations, we've stayed true to our core values of integrity, quality, and service. Our team combines decades of experience with cutting-edge techniques to deliver exceptional results on every project.
              </p>
              <p>
                What sets us apart isn't just our technical expertise—it's our genuine care for the people we serve. We take pride in being likeable, ethical, and helpful partners who are invested in your success. That's why our clients keep coming back, project after project.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-primary-blue/10 rounded-full">
                    <Icon className="text-primary-blue" size={28} />
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
      <section className="section-padding bg-accent-dark text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-secondary-green rounded-full">
              <Shield size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Lifetime Guarantee
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We stand behind every project with a lifetime guarantee on workmanship. If something isn't right, we'll make it right—no questions asked. That's our commitment to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setIsBidModalOpen(true)}
                className="group"
              >
                Work With Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/careers"
                className="border-white text-white hover:bg-white hover:text-accent-dark group"
              >
                Join Our Team
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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

