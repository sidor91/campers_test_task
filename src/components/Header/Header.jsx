import { NavLink } from "react-router-dom";
import { Icon, FeatureNameIconNamesMap } from "../Icon";
import styles from "./Header.module.css";

const Header = () => {
	const buildLinkClass = ({ isActive }) => {
		return isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink;
	};

	return (
		<div className={styles.headerContainer}>
			<div className={styles.logoContainer}>
				<Icon iconName="TravelTrucks" width={136} height={15} />
			</div>
			<nav className={styles.navigation}>
				<NavLink to="/" end className={buildLinkClass}>
					Home
				</NavLink>

				<NavLink to="/catalog" className={buildLinkClass}>
					Catalog
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
