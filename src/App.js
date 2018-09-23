import React, { Component } from "react";
import "./assets/stylesheets/scss/index.scss";
import Introduction from "./components/Sections/Introduction";
import Profile from "./components/Sections/Profile";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Background /> */}
        <div className="container1">
          <Introduction />
        </div>

        <div className="container2">
          <Profile />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
