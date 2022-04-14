import React, { Component } from "react";

import Navegation from "./Components/Navegation";
import SaveTheDate from "./Components/SaveTheDate";
import Image from "material-ui-image";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "September, 30, 2022, 20:00" };
  }
  render() {
    return (
      <div className="App">
        <Image src="public/MonogramaByS.png"/>
        <Navegation />
        <SaveTheDate deadline={this.state.deadline} />
      </div>
    );
  }
}

export default App;
