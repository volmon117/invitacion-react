import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";

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
				setData({ ...data, assistence: "", name: "", people: "", phone: ""  });
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div class="form">
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
					id="nombre"
					name="name"
					label="Nombre"
					onChange={(e) => {
						setData({ ...data, name: e.target.value });
					}}
					size="small"
					style={{ marginRight: "10px" }}
				/>
				<TextField
					id="people"
					name="people"
					label="# de personas"
					onChange={(e) => {
						setData({ ...data, people: e.target.value });
					}}
					size="small"
				/>
				<br />
				<TextField
					id="phone"
					name="phone"
					label="Telefono"
					onChange={(e) => {
						setData({ ...data, phone: e.target.value });
					}}
					size="small"
					style={{ marginRight: "10px" }}
				/>
				<TextField
					id="asistencia"
					name="assistence"
					label="Asistiran"
					onChange={(e) => {
						setData({ ...data, assistence: e.target.value });
					}}
					size="small"
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
		</div>
	);
};

export default Rsvp;
