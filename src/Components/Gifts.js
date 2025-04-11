import React from "react";
//import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
//import bbva from "../Images/bbva.jpeg";
//import dinero from "../Images/dinero.png";
import cake from "../Images/Diseño sin título.png"

const Gifts = () => {

	

	return (
		<Box disableGutters justifyContent={"center"} id="Regalos">
			{/*<Typography variant="h3">
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
			<img src={dinero} height={100} width={100} alt="" />*/}
			<Grid container justifyContent="center" paddingTop={"50px"} paddingBottom={"20px"}>
				<Card>
					<CardActionArea
						onClick={() => {
							window.open("https://mesaderegalos.liverpool.com.mx/milistaderegalos/51656880");
						}}
					>
						<CardMedia component="img" image={cake}></CardMedia>
						<CardContent>
							<h2>
								Mesa de Regalos Liverpool 
								51656880
								<br />
							</h2>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</Box>
	);
};

export default Gifts;
