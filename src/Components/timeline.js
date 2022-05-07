import { Typography, CardContent, Grid, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import icon from "../Images/iglesia.png";

const TimeLine = () => {
	return (
		<Grid conteiner justifyContent="center" alignItems="center" p={12}>
			<Card>
				<CardContent>
					<CardMedia component="img" image="icon"></CardMedia>
					<Typography>Entrada</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default TimeLine;
