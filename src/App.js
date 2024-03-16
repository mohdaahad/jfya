// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Fotter";
import WelcomeArea from "./Components/WelcomeArea";
import HomeFeatureSection from "./Components/HomeFeatureSection";
import FeaturesSection from "./Components/FeaturesSection";
import MissionStatementSection from "./Components/MissionStatementSection";
import WorkProcessSection from "./Components/WorkProcessSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import DonateNowSection from "./Components/DonateNowSection";
import CounterSection from "./Components/CounterSection";
import MudarriseenProfileSection from "./Components/MudarriseenProfileSection";
import FivePillarsSection from "./Components/FivePillarsSection";
import GallerySection from "./Components/GallerySection";
import ContactSection from "./Components/ContactSection";
import VerifidSection from "./Components/Verifid";


function App() {
 
  return (
    <>
      <Navbar/>
      <WelcomeArea/>
      <HomeFeatureSection/>
      <FeaturesSection/>
      <MissionStatementSection/>
      <WorkProcessSection/>
      <TestimonialsSection/>
      <DonateNowSection />
      <CounterSection />
      <MudarriseenProfileSection/>
      <FivePillarsSection/>
      <VerifidSection/>
      <GallerySection/>
      <ContactSection/>
      
      <Footer/>
    </>
     
  );
}

export default App;
