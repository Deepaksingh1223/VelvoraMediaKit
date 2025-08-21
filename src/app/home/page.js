"use client";
import React from "react";
import WelcomeSection from "./welcome-section/page";
import MediaResources from "./media-resources/page";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <MediaResources />
      <Footer />
    </>
  );
};

export default Home;
