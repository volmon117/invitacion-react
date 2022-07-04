import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import bbva from "../Images/bbva.jpeg";

const Gifts = () => {
	return (
		<Box paddingBottom="100px">
			<Typography variant="h3">
				Emprenderemos una aventura juntos fuera del pais,
				<br />
				Por lo que les agradecemos sus regalos sean a travez de la cuenta BBVA
				<br />
				si no en la ceremonia contaremos con una lluvia de sobres
				<br />
				La lluvia de sobres es la tradicion de regalar dinero en efectivo a los
				novios en un sobre el dia del evento
				<Grid container justifyContent="center">
					<Card
						onClick={() => {
							navigator.clipboard.writeText("012320015078156144");
						}}
					>
						<CardMedia component="img" image={bbva}></CardMedia>
						<CardContent>
							<body>
								Cuenta clave 012320015078156144
								<br />
								click para copiar
							</body>
						</CardContent>
					</Card>
				</Grid>
			</Typography>
		</Box>
	);
};

export default Gifts;
