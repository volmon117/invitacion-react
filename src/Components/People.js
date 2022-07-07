import { Typography } from "@material-ui/core";
//import { Avatar } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

const People = () => {
	return (
		<p>
			<ThemeProvider theme={theme}>
				<Typography variant="h3">
					Con la bendicion de dios y de nuestros padres
				</Typography>
			</ThemeProvider>
			<br />
			{/* <Avatar src="../Images/novia.webp" /> */}
			<br />
			<Typography variant="h4">
				Juana Yañez Olea
				<br />
				&
				<br />
				Alfredo Ponce Olivo
			</Typography>
			<br />
			{/* <Icon>

      </Icon> */}
			<br />
			<Typography variant="h4">
				Maria de Jesus Hernandez Mendez
				<br />
				&
				<br />
				Santiago Del Blanco Chavez
			</Typography>
			<Typography variant="h3">
				<br />
				En Compania de nuestros padrinos
				<br />
				<br />
			</Typography>
			<Typography variant="h4">
				Patricia Adela Hernandez Mendez
				<br />
				&
				<br />
				J. Jesus Pompa Reyna
			</Typography>
			<br />
		</p>
	);
};

export default People;
