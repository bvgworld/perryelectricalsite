import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Differentiators from '../components/sections/Differentiators';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import CoreValues from '../components/sections/CoreValues';
import { generateLocalBusinessSchema, injectSchema } from '../lib/seoHelpers';

const Home = () => {
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
      <ProcessTimeline />
      <FeaturedProjects />
      <CoreValues />
    </>
  );
};

export default Home;

