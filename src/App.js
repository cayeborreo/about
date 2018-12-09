import React, { Component } from "react";
import "./assets/stylesheets/scss/index.scss";
import Introduction from "./components/Sections/Introduction";
import FastFacts from "./components/Sections/FastFacts";
import Profile from "./components/Sections/Profile";
import Footer from "./components/Sections/Footer";
// import SampleCarousel from "./components/Sections/SampleCarousel";

class App extends Component {
  stackCards = ({ update }) => {
    let containers = document.querySelectorAll(".container");
    let containerHeight = window.innerHeight;

    document.body.style.height = containerHeight * containers.length;
    containers.forEach(container => {
      container.style.position = "fixed";
    });

    update = () => {
      containers.forEach((container, i) => {
        let containerInitialY = i * containerHeight;
        let containerTop = containerInitialY - window.scrollY;
        if (containerTop > 0) {
          container.style.top = containerTop;
        } else {
          container.style.top = 0;
        }
      });
    };

    this.update();
    window.addEventListener("scroll", this.update);
  };
  render() {
    return (
      <React.Fragment>
        {/* <Background /> */}
        <div ref={this.card} className="container has-background-primary">
          <Introduction />
        </div>

        <div ref={this.card} className="container has-background-secondary">
          <FastFacts />
        </div>

        <div ref={this.card} className="container has-background-grey">
          <Profile />
        </div>

        {/* <div ref={this.card} className="container has-background-secondary"> */}
          {/* <SampleCarousel /> */}
          {/* <b>*Carousel in-progress*</b>
        </div> */}

        <div ref={this.card} className="container has-background-primary">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
