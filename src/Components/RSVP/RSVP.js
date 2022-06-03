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
				setData({ ...data, assistence: "", email: "" });
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div class="form">
			{/* <form onSubmit={handleSubmit}>
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
						Podran asistir?
					</label>
				</div>
				<div className={styles.form}>
					<input
						type="text"
						name="email"
						value={email}
						class={styles.formImput}
						autoComplete="off"
						onChange={handleChange}
					/>
					<label for="assistence" className={styles.formLabel}>
						Cuantos vendran?
					</label>
				</div>
				<div>
					<button className={styles.button}>Submit</button>
				</div>
			</form> */}
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					id="name"
					name="assistence"
					label="Podran asistir?"
					onChange={(e) => {
						setData({ ...data, assistence: e.target.value });
					}}
					size="small"
				/>
				<TextField
					id="email"
					name="email"
					label="Preguntas o Comentarios"
					onChange={(e) => {
						setData({ ...data, email: e.target.value });
					}}
					size="small"
				/>
				<Button variant="text" color="primary" onClick={handleSubmit}>
					Enviar
				</Button>
			</form>
			<br />
			<br />
			<br />
		</div>
	);
};

export default Rsvp;
