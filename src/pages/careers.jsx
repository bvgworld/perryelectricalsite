import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { UserPlus, FileText, Users as UsersIcon, Briefcase, GraduationCap, Heart, DollarSign } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useJobs } from '../hooks/useJobs';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });

  const { jobs, loading: jobsLoading, error: jobsError } = useJobs('open');

  // Debug logging
  console.log('Careers page - Jobs data:', { jobs, jobsLoading, jobsError });

  const hiringProcess = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our online application or send your resume directly to our hiring team.',
    },
    {
      icon: UsersIcon,
      title: 'Initial Interview',
      description: 'We\'ll schedule a conversation to learn about your experience, skills, and career goals.',
    },
    {
      icon: Briefcase,
      title: 'Skills Assessment',
      description: 'Demonstrate your technical abilities through hands-on evaluation and problem-solving.',
    },
    {
      icon: UserPlus,
      title: 'Welcome Aboard',
      description: 'Join our team and begin comprehensive training with experienced mentors.',
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Industry-leading wages with performance bonuses and overtime opportunities.',
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family.',
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description: 'Ongoing education, certifications, and opportunities to advance your career.',
    },
  ];

  // Format jobs for display
  const formatJobForDisplay = (job) => ({
    title: job.jobName,
    type: job.positionType,
    location: job.location,
    description: job.jobDescription,
    payRange: job.payRange,
    id: job.id
  });

  const openPositions = jobs.map(formatJobForDisplay);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission will be connected to Firebase later
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We\'ll be in touch soon.');
  };

  return (
    <>
      <Helmet>
        <title>Careers | Perry Electrical</title>
        <meta 
          name="description" 
          content="Join the Perry Electrical team. We offer competitive pay, comprehensive benefits, and opportunities for career growth in the electrical industry." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-accent-dark text-white py-24 md:py-40 lg:py-48 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/98 to-accent-dark/90 z-10" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{
            backgroundImage: `url('/careers-hero.jpg')`,
          }}
        />
        
        <Container variant="wide" className="relative z-20">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Join A Team That Builds For Life
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Perry Electrical, we invest in our people. Build your career with a company that values your growth, supports your development, and rewards your dedication.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-accent-dark text-white">
        <Container>
          <div className="text-center">
            <a href="#open-positions">
              <Button variant="secondary" size="lg">
                View Open Positions
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Hiring Process */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            subtitle="How It Works"
            title="Our Hiring Process"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary-blue rounded-full">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-text-dark">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-tertiary-light">
        <Container>
          <SectionHeader
            subtitle="Why Work With Us"
            title="Benefits & Training"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-accent-red/10 rounded-full">
                    <Icon className="text-accent-red" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-text-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section-padding bg-white">
        <Container>
          <SectionHeader
            subtitle="Join Our Team"
            title="Open Positions"
          />
          
          {jobsLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading positions...</p>
            </div>
          ) : jobsError ? (
            <div className="text-center py-12">
              <p className="text-red-600">Error loading positions. Please try again later.</p>
            </div>
          ) : openPositions.length > 0 ? (
            <div className="space-y-6 mb-12">
              {openPositions.map((position, index) => (
                <Card key={position.id || index} hover={false}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-2 text-text-dark">
                        {position.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{position.description}</p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>📍 {position.location}</span>
                        <span>💼 {position.type}</span>
                        {position.payRange && <span>💰 {position.payRange}</span>}
                      </div>
                    </div>
                    <Button variant="primary" size="md" className="whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-text-dark mb-2">
                No Open Positions
              </h3>
              <p className="text-gray-600 mb-6">
                We're not currently hiring, but we'd love to hear from you. 
                Send us your resume for future opportunities.
              </p>
              <Button variant="primary">
                Submit Resume
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-accent-dark text-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              subtitle="Get Started"
              title="Apply Today"
              className="text-white"
            />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Position *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-red"
                  >
                    <option value="">Select a position</option>
                    <option value="journeyman">Licensed Journeyman Electrician</option>
                    <option value="apprentice">Electrical Apprentice</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-red"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tell Us About Yourself *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-accent-red"
                />
              </div>

              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Careers;

