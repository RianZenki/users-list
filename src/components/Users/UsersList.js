import { Card } from "../UI/Card";

import styles from "./UsersList.module.css";

export const UsersList = (props) => {
	return (
		<>
			{props.users.length > 0 && (
				<Card className={styles.users}>
					<ul>
						{props.users.map((user) => (
							<li key={user.id}>
								{user.name} ({user.age} years old)
							</li>
						))}
					</ul>
				</Card>
			)}
		</>
	);
};
