import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import background from "../../Images/foto2.jpg";

const Rsvp = () => {
	const [data, setData] = useState({
		name: "",
		people: "",
		phone: "",
		assistence: "",
	});
	const { name, people, phone, assistence } = data;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"https://v1.nocodeapi.com/volmon117/google_sheets/eJCyvRmfsUnFJqCr?tabId=hoja1",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify([[name, people, phone, assistence]]),
				}
			);
			await response.json();
			{
				setData({ ...data, assistence: "", name: "", people: "", phone: "" });
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div class="form">
			<Box
				id="Confirmacion"
				sx={{
					backgroundImage: `linear-gradient(to right, rgba(140, 140, 140, 0.4), rgba(140, 140, 140, 0.4)),url(${background})`,
					padding: "250px 0 250px 0",
					//filter: "grayscale(1)",
					backgroundPosition: "center",
				}}
			>
				<Typography variant="h4">
					¡Queremos compartir este momento tan esperado contigo!
				</Typography>
				<Typography variant="h4">
					Por favor ayúdanos confirmando tu asistencia.
				</Typography>
				<Typography variant="h5">- No niños -</Typography>
				<br />
				<form noValidate autoComplete="off" onSubmit={handleSubmit}>
					<TextField
						id="name"
						name="name"
						label="Nombre"
						variant="standard"
						focused="true"
						onChange={(e) => {
							setData({ ...data, name: e.target.value });
						}}
						size="small"
						style={{ marginRight: "10px", marginBottom: "10px", width: "20%" }}
					/>
					<TextField
						InputProps={{ inputProps: { style: { color: "#dfb9a6" } } }}
						id="people"
						name="people"
						label="Numero de personas"
						variant="standard"
						focused="true"
						onChange={(e) => {
							setData({ ...data, people: e.target.value });
						}}
						size="small"
						style={{ width: "20%" }}
					/>
					<br />
					<TextField
						id="phone"
						name="phone"
						label="Telefono"
						variant="standard"
						focused="true"
						onChange={(e) => {
							setData({ ...data, phone: e.target.value });
						}}
						size="small"
						style={{ marginRight: "10px", width: "20%" }}
					/>
					<TextField
						id="asistencia"
						name="assistence"
						label="Asistiran"
						variant="standard"
						focused="true"
						onChange={(e) => {
							setData({ ...data, assistence: e.target.value });
						}}
						size="small"
						style={{ width: "20%" }}
					/>
					<br />
					<br />
					<Button
						variant="text"
						style={{ backgroundColor: "lightgrey", color: "black" }}
						onClick={handleSubmit}
					>
						Confirmar assitencia
					</Button>
					<br />
				</form>
				<br />
				<br />
				<br />
			</Box>
		</div>
	);
};

export default Rsvp;
