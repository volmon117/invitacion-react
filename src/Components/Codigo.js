import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import codigo from "../Images/codigo.png";

const Codigo = () => {
	return (
		<Box disableGutters justifyContent={"center"}>
			<Box
				justifyContent="center"
				p={10}
				paddingBottom="250px"
				paddingTop="300px"
				id="Codigo"
			>
				<Typography variant="h3">El codigo de vestimenta es: Formal</Typography>
				<img src={codigo} height={200} width={200} alt="" />
			</Box>
		</Box>
	);
};
export default Codigo;
