import React, { Component } from "react";
import "./assets/stylesheets/scss/index.scss";
import Introduction from "./components/Sections/Introduction";
import FastFacts from "./components/Sections/FastFacts";
import Profile from "./components/Sections/Profile";
import Footer from "./components/Sections/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Background /> */}
        <div className="container1">
          <Introduction />
        </div>

        <div className="container2">
          <FastFacts />
        </div>

        <div className="container3">
          <Profile />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
