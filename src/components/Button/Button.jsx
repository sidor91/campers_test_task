import styles from "./Button.module.css";

export const Button = ({ text, type, action, clickHandler }) => {
	return (
		<button type={action} className={`${styles.button} ${styles[type]}`} onClick={clickHandler}>
			{text}
		</button>
	);
};
