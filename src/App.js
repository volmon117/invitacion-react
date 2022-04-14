import React, { Component } from "react";


import Navegation from "./Components/Navegation";
import SaveTheDate from "./Components/SaveTheDate";

import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme ({
  typography: {
    fontFamily: 'Tangerine'
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "September, 30, 2022, 20:00" };
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Navegation />
        <SaveTheDate deadline={this.state.deadline} />
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
