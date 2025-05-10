// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Contact />   
      <Footer />
    </div>
  );
};

export default App;
