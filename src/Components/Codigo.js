import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import anillos from "../Images/anillos.png";
import codigo from "../Images/codigo.png";

const Codigo = () => {
	return (
		<Box disableGutters justifyContent={"center"} paddingBottom="100px">
			<Box
				justifyContent="center"
				p={10}
				paddingBottom="50px"
				paddingTop="300px"
				id="Codigo"
			>
				<Typography variant="h3">El codigo de vestimenta: Formal</Typography>
				<img src={codigo} height={200} width={200} alt="" />
			</Box>
			<Typography variant="h2">¡No faltes!</Typography>
			<img src={anillos} height={100} width={100} alt=""  />
		</Box>
	);
};
export default Codigo;
