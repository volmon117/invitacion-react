import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./RSVP.module.css";

const Rsvp = () => {
	const [data, setData] = useState({
		assistence: "",
		email: "",
		message: "",
	});
	const { assistence, email, message } = data;

	const handleChange = (e) =>
		setData({ ...data, [e.target.name]: e.target.value });

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
					body: JSON.stringify([[assistence, email, message]]),
				}
			);
			await response.json();
			{
				console.log(assistence);
				setData({ ...data, assistence: "", email: "" });
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div class="form">
			<form onSubmit={handleSubmit}>
				<div className={styles.form}>
					<input
						type="text"
						name="assistence"
						value={assistence}
						className={styles.formImput}
						autoComplete="off"
						onChange={handleChange}
					/>
					<label for="assistence" className={styles.formLabel}>
						Asistencia
					</label>
				</div>
				<div class="form">
					<input
						type="text"
						name="email"
						value={email}
						class={styles.formImput}
						autoComplete="off"
						onChange={handleChange}
					/>
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
			{/* <form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					id="name"
					name="assistence"
					label="Podran asistir?"
					onChange={handleChange}
					size="small"
				/>
				<TextField
					id="email"
					name="email"
					label="Preguntas o Comentarios"
					onChange={handleChange}
					size="small"
				/>
				<Button variant="text" color="primary">
					Enviar
				</Button>
			</form> */}
			<br />
			<br />
			<br />
		</div>
	);
};

export default Rsvp;
