import styles from "./Button.module.css";

export const Button = ({ text, type, action }) => {
	return (
		<button type={action} className={`${styles.button} ${styles[type]}`}>
			{text}
		</button>
	);
};
