import { Typography, Box } from "@mui/material";
import React, { Component } from "react";
import styles from "./countdown.module.css";
import background from "../../Images/foto2.jpg";
import { Card, CardMedia } from "@material-ui/core";

class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	}
	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}
	leading0(num) {
		return num < 10 ? "0" + num : num;
	}
	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		if (time < 0) {
			this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
		} else {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));
			this.setState({ days, hours, minutes, seconds });
		}
	}
	render() {
		return (
			<div id="countdown">
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Typography variant="h3" fontFamily="Tangerine">
					<p>
						Las mejores cosas de la vida merecen ser compartidas, gracias por
						ser parte de nuestra historia...
					</p>
				</Typography>
				<Typography
					className={styles.Component}
					fontFamily="Tangerine"
					variant="h3"
					component="div"
				>
					{this.leading0(this.state.days)} Dias‎ ‎ ‎
					{this.leading0(this.state.hours)} Horas‎ ‎ ‎
					{this.leading0(this.state.minutes)} Minutos‎ ‎ ‎
					{this.leading0(this.state.seconds)} Segundos
					<br />
					<br />
				</Typography>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				{/* <Box
					id="saveDate"
					sx={{
						backgroundImage: `url(${background})`,
						padding: "320px 0 340px 0",
						backgroundPosition: "center",
					}}
				></Box> */}
				<Card >
					<CardMedia component="img" image={background} />
				</Card>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		);
	}
}
export default Countdown;
