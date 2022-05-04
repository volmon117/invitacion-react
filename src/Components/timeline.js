import { Typography, CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";

const TimeLine = () => {
	return (
		<Grid conteiner justifyContent="center" alignItems="center" p={12}>
			<Card>
				<CardContent>
					<Typography>Entrada</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default TimeLine;
