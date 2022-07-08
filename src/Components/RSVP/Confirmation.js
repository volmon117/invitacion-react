import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import background from "../../Images/foto2.jpg";
import { MenuItem } from "@mui/material";
import style from "../RSVP/Confirmation.module.css";
import { useEffect } from "react";

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
			setData({ assistence: "", name: "", people: "", phone: "" });

			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	// useEffect = () => {
	// 	setData({ assistence: "", name: "", people: "", phone: "" });
	// };

	return (
		<div class="form">
			<Box
				id="Confirmacion"
				sx={{
					backgroundImage: `linear-gradient(to right, rgba(140, 140, 140, 0.4), rgba(140, 140, 140, 0.4)),url(${background})`,
					padding: "250px 0 250px 0",
					backgroundPosition: "center",
					//filter: "grayscale(1)",
				}}
			>
				<Typography variant="h2">RSVP</Typography>
				<Typography variant="h4">
					¡Queremos compartir este momento tan esperado contigo!
				</Typography>
				<Typography variant="h4">
					Por favor ayúdanos confirmando tu asistencia.
				</Typography>
				<Typography variant="h3">- No niños -</Typography>
				<br />
				<form noValidate autoComplete="on" onSubmit={handleSubmit}>
					<TextField
						id="name"
						name="name"
						label="Nombre"
						variant="standard"
						size="small"
						InputLabelProps={{ className: style.label }}
						style={{
							marginRight: "10px",
							marginBottom: "10px",
							width: "20%",
							filter: "#f5e8e0",
						}}
						onChange={(e) => {
							setData({ name: e.target.value });
						}}
					/>
					<TextField
						id="people"
						name="people"
						label="Numero de personas"
						variant="standard"
						size="small"
						select
						style={{ width: "20%" }}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ people: e.target.value });
						}}
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
					</TextField>
					<br />
					<TextField
						id="phone"
						name="phone"
						label="Telefono"
						variant="standard"
						size="small"
						style={{ marginRight: "10px", width: "20%" }}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ phone: e.target.value });
						}}
					/>
					<TextField
						id="asistencia"
						name="assistence"
						label="Asistiran"
						variant="standard"
						size="small"
						select
						style={{ width: "20%" }}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ assistence: e.target.value });
						}}
					>
						<MenuItem value={1}>Si</MenuItem>
						<MenuItem value={0}>No</MenuItem>
					</TextField>
					<br />
					<br />
					<Button
						variant="text"
						style={{ backgroundColor: "#fbf6f3", color: "black" }}
						onClick={handleSubmit}
					>
						Confirmar asistencia
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
