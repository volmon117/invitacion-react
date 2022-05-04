import { Typography, CardMedia, CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { CardActionArea, createTheme, ThemeProvider } from "@material-ui/core";
import "../../App.css";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

const Cards = () => {
	const handleClickIglesia = () => {
		window.open(
			"https://www.google.com/maps/place/Parroquia+San+Pablo,+Las+Fuentes/@20.6238022,-103.4299002,17z/data=!3m1!4b1!4m5!3m4!1s0x8428ac5d510cac13:0xf1ea942b511ac58d!8m2!3d20.6238144!4d-103.4276744"
		);
	};

	const handleClickCipres = () => {
		window.open("https://goo.gl/maps/yWNKJ4yhFgZkZrWe7");
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				p={6}
				justifyContent="center"
				alignItems="center"
				className={Grid}
			>
				<Grid item xs={12} sm={6} p={2}>
					<Card>
						<CardActionArea onClick={handleClickIglesia}>
							<CardMedia
								component="img"
								height="250"
								width="150"
								image="../Components/Cards/iglesiafoto.jpeg"
								alt="Parroquia San Pablo, Las Fuentes"
							/>
							<CardContent>
								<Typography>
									Calle San Antonio 105, Las Fuentes, 45070 Zapopan, Jal.
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
								height="250"
								image="/src/iglesiafoto.jpg"
								alt="Hacienda del Cipres"
							/>
							<CardContent>
								<Typography>
									Valle de Sta Cruz 9, Valle de Santa Cruz, 45640 Santa Cruz de
									las Flores, Jal.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Cards;
