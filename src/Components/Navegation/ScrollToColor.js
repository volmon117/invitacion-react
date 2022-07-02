import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = (props) => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: props.window ? window() : undefined,
	});

	return React.cloneElement(props.children, {
		style: {
			backgroundColor: trigger ? "#fbf6f3" : "transparent",
			color: trigger ? "white" : "black",
			transition: trigger ? "0.3s" : "0.5s",
			boxShadow: "none",
			padding: "0px 0px",
		},
	});
};

const ScrollToColor = (props) => {
	return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;
