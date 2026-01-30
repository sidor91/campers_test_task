import styles from "./CamperList.module.css";
import { CamperCard } from "../CamperCard/CamperCard";

export const CamperList = ({ data }) => {
	return (
		<div className={styles.container}>
			{data.map((item) => (
				<CamperCard key={item.id} data={item} />
			))}
		</div>
	);
};
