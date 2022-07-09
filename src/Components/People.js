import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Box } from "@mui/material";
import novia from "../Images/novia.webp";
import novio from "../Images/novio.png";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

const People = () => {
	return (
		<Box paddingBottom="200px">
			<ThemeProvider theme={theme}>
				<Typography variant="h3">
					Con la bendición de Díos y de nuestros padres
				</Typography>
			</ThemeProvider>
			<br />
			<img src={novia} height={100} width={100} alt="" />
			<br />
			<Typography variant="h4">
				Juana Yañez Olea
				<br />
				&
				<br />
				Alfredo Ponce Olivo
			</Typography>
			<br />
			<img src={novio} height={100} width={100} alt="" />
			<br />
			<Typography variant="h4">
				Maria de Jesús Hernández Méndez
				<br />
				&
				<br />
				Santiago Del Blanco Chávez
			</Typography>
			<Typography variant="h3">
				<br />
				En Compañía de nuestros padrinos
				<br />
				<br />
			</Typography>
			<Typography variant="h4">
				Patricia Adela Hernández Méndez
				<br />
				&
				<br />
				J. Jesus Pompa Reyna
			</Typography>
			<br />
		</Box>
	);
};

export default People;
