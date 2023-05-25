import React from "react";
import BeaPart from '../components/BeaPart'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Goal from '../components/Goal'
import Skills from '../components/Skills'
import Loader from '../components/Loader'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Goal />
      <BeaPart />
      <Skills />
      <Footer />
    </div>
  );
};

export default HomePage;
