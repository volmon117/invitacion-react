import { Box, styled, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import copas from "../Images/salud.png";
import baile from "../Images/baile.png";
import martini from "../Images/martini.png";
import plato from "../Images/restaurante.png";
import iglesia from "../Images/iglesia.png";
import pista from "../Images/pista.png";

const Outline = styled(Box)(({ theme }) => ({
	position: "relative",
	padding: "0.8rem",
	width: "100%",
	maxWidth: "400px",
	border: "1px solid rgba(0, 0, 0, 0.05)",
	background: "#fafafa",
}));

const Square = styled(Box)(({ reverse }) => ({
	position: "absolute",
	borderRight: reverse ? 0 : "1px solid rgba(0, 0, 0, 0.05)",
	borderBottom: reverse ? 0 : "1px solid rgba(0, 0, 0, 0.05)",
	borderTop: reverse ? "1px solid rgba(0, 0, 0, 0.05)" : 0,
	borderLeft: reverse ? "1px solid rgba(0, 0, 0, 0.05)" : 0,
	width: "20px",
	height: "20px",
	background: "#fafafa",
	top: "30%",
	zIndex: 200,
	left: reverse ? "100%" : 0,
	transform: "translateX(-50%) rotate(135deg)",
}));

const ContentBox = styled(Box)(({ theme, bgColor }) => ({
	backgroundColor: bgColor,
	padding: "2rem",
	width: "100%",
	height: "100%",
	position: "relative",
	zIndex: 300,
	textAlign: "left",
}));

const TimeLine = () => {
	console.log(true);
	return (
		<Box id="timeline" sx={{ pt: "3.5rem" }} paddingBottom="40px">
			<Typography
				sx={{
					fontFamily: "'Parisienne', cursive",
					fontSize: "10rem !important",
					color: "#85351c",
					mb: 6,
				}}
			>
				Timeline
			</Typography>
			<Timeline position="alternate">
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot
							sx={{
								backgroundColor: "#f5e8e0",
								backgroundImage: `url(${iglesia})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								height: {
									xs: "80px",
									md: "130px",
								},
								width: {
									xs: "80px",
									md: "130px",
								},
								boxShadow: "0",
							}}
						/>
						<TimelineConnector
							sx={{
								height: "130px",
								width: 0,
								border: "1px dashed #ffeded",
							}}
						/>
					</TimelineSeparator>
					<TimelineContent sx={{ marginTop: -5 }}>
						<Outline>
							<Square />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem !important",
										}}
									>
										Ceremonia Religiosa
									</Typography>
									<Typography
										variant="body1"
										sx={{
											my: 3.5,
											textTransform: "uppercase",
											color: "rgb(127, 127, 127)",
											fontSize: "1.5rem !important",
											letterSpacing: "0.1rem",
										}}
									>
										7:00 PM
									</Typography>
									<Typography
										variant="body1"
										sx={{
											mb: 1,
											color: "#7f7f7f",
											fontWeight: "bold",
											fontSize: "1.5rem !important",
										}}
									>
										Parroquia San Pablo las fuentes
									</Typography>
								</Box>
							</ContentBox>
						</Outline>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot
							sx={{
								backgroundColor: "#f5e8e0",
								backgroundImage: `url(${martini})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								height: {
									xs: "80px",
									md: "130px",
								},
								width: {
									xs: "80px",
									md: "130px",
								},
							}}
						/>
						<TimelineConnector
							sx={{
								height: "130px",
								width: 0,
								border: "1px dashed #ffeded",
							}}
						/>
					</TimelineSeparator>
					<TimelineContent sx={{ display: "flex", justifyContent: "flex-end", height: "50%"}}>
						<Outline>
							<Square reverse />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem !important",
										}}
									>
										Recepción
									</Typography>
									<Typography
										variant="body1"
										sx={{
											my: 3.5,
											textTransform: "uppercase",
											color: "rgb(127, 127, 127)",
											fontSize: "1.5rem !important",
											letterSpacing: "0.1rem",
										}}
									>
										9:00 PM
									</Typography>
									<Typography variant="body1" sx={{ color: "#7f7f7f", fontSize: "1.5rem !important" }}>
										Barra de cocteleria
									</Typography>
								</Box>
							</ContentBox>
						</Outline>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot
							sx={{
								backgroundColor: "#f5e8e0",
								backgroundImage: `url(${baile})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								height: "100px",
								width: "100px",
							}}
						/>
						<TimelineConnector
							sx={{
								height: "130px",
								width: 0,
								border: "1px dashed #ffeded",
							}}
						/>
					</TimelineSeparator>
					<TimelineContent>
						<Outline>
							<Square />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem !important",
										}}
									>
										Vals novios
									</Typography>
									<Typography
										variant="body1"
										sx={{
											my: 3.5,
											textTransform: "uppercase",
											color: "rgb(127, 127, 127)",
											fontSize: "1.5rem !important",
											letterSpacing: "0.1rem",
										}}
									>
										9:45 PM
									</Typography>
								</Box>
							</ContentBox>
						</Outline>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot
							sx={{
								backgroundColor: "#f5e8e0",
								backgroundImage: `url(${plato})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								height: "100px",
								width: "100px",
							}}
						/>
						<TimelineConnector
							sx={{
								height: "130px",
								width: 0,
								border: "1px dashed #ffeded",
							}}
						/>
					</TimelineSeparator>
					<TimelineContent sx={{ display: "flex", justifyContent: "flex-end", height: "50%" }}>
						<Outline>
							<Square reverse />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem !important",
										}}
									>
										Banquete
									</Typography>
									<Typography
										variant="body1"
										sx={{
											my: 3.5,
											textTransform: "uppercase",
											color: "rgb(127, 127, 127)",
											fontSize: "1.5rem !important",
											letterSpacing: "0.1rem",
										}}
									>
										10:00 PM
									</Typography>
								</Box>
							</ContentBox>
						</Outline>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot
							sx={{
								backgroundColor: "#f5e8e0",
								backgroundImage: `url(${pista})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								height: "100px",
								width: "100px",
							}}
						/>
						<TimelineConnector
							sx={{
								height: "130px",
								width: 0,
								border: "1px dashed #ffeded",
							}}
						/>
					</TimelineSeparator>
					<TimelineContent>
						<Outline>
							<Square />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem !important",
										}}
									>
										Apertura de pista
									</Typography>
									<Typography
										variant="body1"
										sx={{
											my: 3.5,
											textTransform: "uppercase",
											color: "rgb(127, 127, 127)",
											fontSize: "1.5rem !important",
											letterSpacing: "0.1rem",
										}}
									>
										11:00 PM
									</Typography>
								</Box>
							</ContentBox>
						</Outline>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot
							sx={{
								backgroundColor: "#f5e8e0",
								backgroundImage: `url(${copas})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								height: {
									xs: "80px",
									md: "130px",
								},
								width: {
									xs: "80px",
									md: "130px",
								},
							}}
						/>
						<TimelineConnector
							sx={{
								height: "130px",
								width: 0,
								border: "1px dashed #ffeded",
							}}
						/>
					</TimelineSeparator>
					<TimelineContent sx={{ display: "flex", justifyContent: "flex-end", height: "50%" }}>
						<Outline>
							<Square reverse />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem !important",
										}}
									>
										Fin del Evento
									</Typography>
									<Typography
										variant="body1"
										sx={{
											my: 3.5,
											textTransform: "uppercase",
											color: "rgb(127, 127, 127)",
											fontSize: "1.5rem !important",
											letterSpacing: "0.1rem",
										}}
									>
										2:30 AM
									</Typography>
								</Box>
							</ContentBox>
						</Outline>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</Box>
	);
};

export default TimeLine;
