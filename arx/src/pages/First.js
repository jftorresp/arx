import React from "react";

import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Features from "../Components/Features";
import Progress from "../Components/Progress";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

class First extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Progress />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default First;
