import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
		<Box id="fecha" sx={{ pt: "3.5rem" }} paddingBottom="40px">
			<Typography
				sx={{
					fontFamily: "'Parisienne', cursive",
					fontSize: "5rem",
					color: "#dfb9a6",
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
								backgroundImage:
									'url("https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/message/attachments/e290cfd03b8cf1e404cbe0a7c84991ac-1655565926705/iglesia.png?__cld_token__=exp=1656896060~hmac=461bf83106994dccb7bbbb055c6d00aa381eda88965699b1ade3c00073be589c")',
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
											fontSize: "2rem",
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
											fontSize: "12px",
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
								backgroundImage:
									'url("https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/message/attachments/e290cfd03b8cf1e404cbe0a7c84991ac-1655565926705/martini-seco.png?__cld_token__=exp=1656896060~hmac=da0d66836a5e484b320827c1096e3105bc0f28aadf348df6716cba89455b81d4")',
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
					<TimelineContent sx={{ display: "flex", justifyContent: "flex-end" }}>
						<Outline>
							<Square reverse />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem",
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
											fontSize: "12px",
											letterSpacing: "0.1rem",
										}}
									>
										9:00 PM
									</Typography>

									<Typography variant="body1" sx={{ color: "#7f7f7f" }}>
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
								backgroundImage:
									'url("https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/message/attachments/e290cfd03b8cf1e404cbe0a7c84991ac-1655565926699/baile.png?__cld_token__=exp=1656896060~hmac=fb091a76e06457a3ee00d5c6b92bcd657ce46bc1db2d44d1f69c7ab668f16a02")',
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
											fontSize: "2rem",
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
											fontSize: "12px",
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
								backgroundImage:
									'url("https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/message/attachments/e290cfd03b8cf1e404cbe0a7c84991ac-1655565926696/restaurante.png?__cld_token__=exp=1656896060~hmac=dd91d7e8c3f319d6d8d47fb0b3828fab40be279fa81e43a96e7e40d7a3e7ed55")',
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
					<TimelineContent sx={{ display: "flex", justifyContent: "flex-end" }}>
						<Outline>
							<Square reverse />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem",
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
											fontSize: "12px",
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
								backgroundImage:
									'url("https://cdn-icons-png.flaticon.com/512/7615/7615072.png")',
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
											fontSize: "2rem",
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
											fontSize: "12px",
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
								backgroundImage:
									'url("https://cdn-icons-png.flaticon.com/512/5110/5110778.png")',
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
					<TimelineContent sx={{ display: "flex", justifyContent: "flex-end" }}>
						<Outline>
							<Square reverse />
							<ContentBox bgColor="#fbf6f3">
								<Box>
									<Typography
										variant="h5"
										color="#85351c"
										sx={{
											fontFamily: "'Parisienne', cursive",
											fontSize: "2rem",
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
											fontSize: "12px",
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
