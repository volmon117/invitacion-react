import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, IconButton } from "@mui/material";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Hashtag = () => {
	return (
		<Box p={10} paddingBottom="250px" paddingTop="250px" id="hashtag">
			<Box>
				<IconButton></IconButton>

				<Typography variant="h2">
					Comparte con nosotros todas tus fotogracias del evento
					<br />
					usando el siguiente # en todas tus publicaciones de facebook e
					instagram
				</Typography>
				<Typography variant="h2">#BodaBrisia&Santiago2022</Typography>
				<FaInstagramSquare style={{ fontSize: "50px", color: "#F85043" }} />

				<SiFacebook
					style={{ fontSize: "50px", color: "#1195F5", marginRight: "20px" }}
				/>
			</Box>
		</Box>
	);
};

export default Hashtag;
