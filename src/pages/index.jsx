import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Differentiators from '../components/sections/Differentiators';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import CoreValues from '../components/sections/CoreValues';
import CustomerLogos from '../components/sections/CustomerLogos';
import CTABanner from '../components/sections/CTABanner';
import ProjectBidModal from '../components/modals/ProjectBidModal';
import { generateLocalBusinessSchema, injectSchema } from '../lib/seoHelpers';

const Home = () => {
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);

  useEffect(() => {
    const schema = generateLocalBusinessSchema();
    const cleanup = injectSchema(schema);
    return cleanup;
  }, []);

  return (
    <>
      <Helmet>
        <title>Perry Electrical | Electrical Contracting in Kansas</title>
        <meta 
          name="description" 
          content="Perry Electrical provides expert electrical contracting for commercial, industrial, and institutional builds across Kansas. Licensed, insured, and backed by a lifetime guarantee." 
        />
        <meta name="keywords" content="electrical contractor, Kansas, commercial electrical, industrial electrical, electrical construction" />
        <meta property="og:title" content="Perry Electrical | Electrical Contracting in Kansas" />
        <meta property="og:description" content="Expert electrical contracting for commercial, industrial, and institutional builds across Kansas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://perryelec.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Perry Electrical | Electrical Contracting in Kansas" />
        <meta name="twitter:description" content="Expert electrical contracting for commercial, industrial, and institutional builds across Kansas." />
      </Helmet>

      <Hero />
      <Differentiators />
      
      {/* CTA Banner 1: Between Who We Are and How We Work */}
      <CTABanner 
        title="Ready to Start Your Project?"
        subtitle="Request a competitive estimate for your commercial, industrial, or institutional build"
        buttonText="Talk to an Estimator"
        variant="blue"
        onButtonClick={() => setIsBidModalOpen(true)}
      />
      
      <ProcessTimeline />
      
      {/* Customer Logos Section */}
      <CustomerLogos />
      
      <FeaturedProjects />
      <CoreValues />
      
      {/* Project Bid Modal */}
      <ProjectBidModal 
        isOpen={isBidModalOpen} 
        onClose={() => setIsBidModalOpen(false)} 
      />
    </>
  );
};

export default Home;

