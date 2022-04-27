import { Typography, CardMedia, CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";

import { CardActionArea, createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

const Cards = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				containerSpacing={2}
				alignItems="center"
				justifyContent="center"
				xs="6"
			>
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						component="img"
						height="140"
						width="345"
						image="/src/iglesiafoto.jpg"
					/>
					<CardActionArea>
						<CardContent>
							<Typography>Hola</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						component="img"
						height="140"
						width="345"
						image="/src/iglesiafoto.jpg"
					/>
					<CardActionArea>
						<CardContent>
							<Typography>Hola</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</ThemeProvider>
	);
};

export default Cards;
