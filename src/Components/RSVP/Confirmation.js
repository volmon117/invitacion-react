import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import background from "../../Images/foto3.jpg";
import { MenuItem } from "@mui/material";
import style from "../RSVP/Confirmation.module.css";

const Rsvp = () => {
	const [data, setData] = useState({
		Nombre: "",
		Personas: "",
		Telefono: "",
		Asistencia: "",
	});
	const { Nombre, Personas, Telefono, Asistencia } = data;
const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"https://sheetdb.io/api/v1/9s3fsfitqwa7x",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({Nombre,Personas,Asistencia,Telefono}),
				}		);
			await response.json();
			setData({ Asistencia: "", Nombre: "", Personas: "", Telefono: "" });
		} catch (err) {		console.log(err);
		}
	};

	return (
		<div class="form">
			<Box
				id="Confirmacion"
				sx={{
					backgroundImage: `linear-gradient(to right, rgba(140, 140, 140, 0.4), rgba(140, 140, 140, 0.4)),url(${background})`,
					padding: "250px 0 250px 0",
					backgroundPosition: "center",
				}}
			>
				<Typography variant="h2" style={{ color: "#242221" }}>RSVP</Typography>
				<Typography variant="h3" style={{ color: "#242221" }}>
					¡Queremos compartir este momento tan esperado contigo!
				</Typography>
				<Typography variant="h4" style={{ color: "#242221" }}>
					Por favor ayúdanos confirmando tú asistencia.
				</Typography>
				{/*<Typography variant="h3" style={{ color: "#f5e8e0" }}>- No niños -</Typography>*/}
				<br />
				<form noValidate autoComplete="on" onSubmit={handleSubmit}>
					<TextField
						id="name"
						name="name"
						label="Nombre"
						variant="standard"
						size="small"
						value={data.Nombre}
						InputLabelProps={{ className: style.label }}
						style={{
							marginRight: "10px",
							marginBottom: "10px",
							width: "20%",
							filter: "#f5e8e0",
						}}
						onChange={(e) => {
							setData({ ...data, Nombre: e.target.value });
						}}
					/>
					<TextField
						id="Personas"
						name="Personas"
						label="Numero de personas"
						variant="standard"
						size="small"
						select
						style={{ width: "20%" }}
						value={data.Personas}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ ...data, Personas: e.target.value });
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
						id="Telefono"
						name="Telefono"
						label="Telefono"
						variant="standard"
						size="small"
						value={data.Telefono}
						style={{ marginRight: "10px", width: "20%" }}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ ...data, Telefono: e.target.value });
						}}
					/>
					<TextField
						id="asistencia"
						name="assistence"
						label="Asistirán"
						variant="standard"
						size="small"
						select
						value={data.Asistencia}
						style={{ width: "20%" }}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ ...data, Asistencia: e.target.value });
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
