import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portafolio from "./components/Portafolio";
import About from "./components/About";
import Skill from "./components/skills";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <React.Fragment>
      <Loader />
      <Header />
      <Hero />
      <Portafolio />
      <About />
      <Skill />
      <Services />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
