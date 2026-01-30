import styles from "./HomePage.module.css";
import { Button, ButtonActionsToTypeMap, ButtonTypesToClassNameMap } from "../../components/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.overlay} />

			<div className={styles.content}>
				<h1 className={styles.mainHeader}>Campers of your dreams</h1>
				<p className={styles.description}>You can find everything you want in our catalog</p>
				<Link to="/catalog">
					<Button text="View Now" type={ButtonTypesToClassNameMap.FILLED} action={ButtonActionsToTypeMap.BUTTON} />
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
