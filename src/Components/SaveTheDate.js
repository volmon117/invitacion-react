import { Typography } from "@material-ui/core";
import background from "../Images/foto1.jpg";
import { Box } from "@mui/material";

const SaveTheDate = () => {
	return (
		<Box>
			<Box
				id="saveDate"
				sx={{
					backgroundImage: `linear-gradient(to right, rgba(140, 140, 140, 0.4), rgba(140, 140, 140, 0.4)),url(${background})`,
					padding: "320px 0 340px 0",
					backgroundPosition: "center",
				}}
			>
				<Typography variant="h2" fontFamily="Tangerine">
					Save The Date
				</Typography>
				<Typography
					variant="h1"
					fontFamily="Tangerine"
					sx={{ fontWeight: "bold", fontSize: "110px" }}
				>
					Brisia & Santiago
				</Typography>
				<Typography variant="h2" fontFamily="Tangerine">
					30-09-2022
				</Typography>
			</Box>
		</Box>
	);
};

export default SaveTheDate;
