import { Typography } from "@mui/material";
import React, { Component } from "react";
import styles from "./countdown.module.css";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
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
      <Typography
        className={styles.Component}
        fontFamily='Tangerine'
        variant="h4"
        noWrap
        component="div">
          {this.leading0(this.state.days)}  Dias‎ ‎  
          {this.leading0(this.state.hours)}  Horas‎ ‎ 
          {this.leading0(this.state.minutes)}  Minutos‎ ‎ 
          {this.leading0(this.state.seconds)}  Segundos
      </Typography>
    );
  }
}
export default Countdown;
