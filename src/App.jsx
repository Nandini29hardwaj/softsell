// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Contact />   
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;
