import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import bbva from "../Images/bbva.jpeg";
import dinero from "../Images/dinero.png";

const Gifts = () => {
	return (
		<Box disableGutters justifyContent={"center"} id="Regalos">
			<Typography variant="h3">
				Emprenderemos una aventura juntos fuera del pais,
				<br />
				Por lo que les agradecemos sus regalos sean a través de la cuenta BBVA
				<br />
				de igual manera en la ceremonia contaremos con una lluvia de sobres
				<br />
				La cual es la tradicion de regalar dinero en efectivo a los novios en un
				sobre el dia del evento
			</Typography>
			<br />
			<img src={dinero} height={100} width={100} alt="" />
			<Grid container justifyContent="center" paddingTop={"20px"}>
				<Card>
					<CardActionArea
						onClick={() => {
							navigator.clipboard.writeText("012320015078156144");
						}}
					>
						<CardMedia component="img" image={bbva} height="100px"></CardMedia>
						<CardContent>
							<h5>
								012320015078156144
								<br />
								click para copiar
							</h5>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</Box>
	);
};

export default Gifts;
