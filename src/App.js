import React, { Component } from "react";

import Navegation from "./Components/Navegation/Navegation";
import Countdown from "./Components/Countdown/Countdown";
import SaveTheDate from "./Components/SaveTheDate";
import People from "./Components/People";
import Cards from "./Components/Cards/Cards";
import Rsvp from "./Components/RSVP/Confirmation";
import Hashtag from "./Components/Hashtag";
import Gifts from "./Components/Gifts";
import Codigo from "./Components/Codigo";

import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core";
import TimeLine from "./Components/timeline";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { deadline: "September, 30, 2022, 19:00" };
	}
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className="App">
					<Navegation />
					<SaveTheDate />
					<Countdown deadline={this.state.deadline} />
					<People />
					<TimeLine />
					<Cards />
					<Rsvp />
					<Hashtag />
					<Gifts />
					<Codigo />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
