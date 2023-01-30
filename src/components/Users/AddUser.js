import { useState } from "react";

import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

export const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();

		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (> 0).",
			});
			return;
		}

		props.onAddNewUser({
			name: enteredUsername,
			age: +enteredAge,
			id: Math.random(),
		});

		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}

			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					></input>

					<label htmlFor="age">Age (Years)</label>
					<input
						type="number"
						id="age"
						value={enteredAge}
						onChange={ageChangeHandler}
					></input>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};
