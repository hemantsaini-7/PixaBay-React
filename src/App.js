import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

import MuiThemeP from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeP>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeP>
    );
  }
}

export default App;
