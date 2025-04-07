import { Typography, CardMedia, CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { CardActionArea, createTheme, ThemeProvider } from "@material-ui/core";
import "../../App.css";
import { Box } from "@mui/material";
import imageniglesia from "../../Images/iglesiafoto.jpg";
import imagencipres from "../../Images/salon.jpg";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

const Cards = () => {
	const handleClickIglesia = () => {
		window.open("https://maps.app.goo.gl/GmxfqyroY19PeLzg6");
	};

	const handleClickCipres = () => {
		window.open("https://maps.app.goo.gl/MwqaebAoYD6diPn18");
	};

	return (
		<ThemeProvider theme={theme}>
			<Box id="ubicacion">
				<Grid
					container
					p={6}
					justifyContent="center"
					alignItems="center"
					className={Grid}
					sx={{ pt: 6 }}
				>
					<Grid item xs={12} sm={6} p={2}>
						<Card>
							<CardActionArea onClick={handleClickIglesia}>
								<CardMedia
									component="img"
									image={imageniglesia}
									alt="Parroquia San Pablo, Las Fuentes"
								/>
								<CardContent>
									<Typography variant="h5">Iglesia</Typography>
									<Typography variant="body">
										Parroquia Santo Tomas Moro
										<br />
									</Typography>
									<Typography variant="body3">
									Salvador Ocampo S/N, Fovissste Miravalle, 44990 Guadalajara, Jal.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} p={2}>
						<Card>
							<CardActionArea onClick={handleClickCipres}>
								<CardMedia
									component="img"
									image={imagencipres}
									alt="Hacienda del Cipres"
								/>
								<CardContent>
									<Typography variant="h5">Salon</Typography>
									<Typography variant="body">
									Terraza Jardin Veranda Salon de Eventos
										<br />
									</Typography>
									<Typography variant="body3">
									Centauro del Nte. 12, Francisco Villa, 45402 Tonalá, Jal.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
};

export default Cards;
