import styles from "./CamperFeatureTag.module.css";
import { Icon } from "../Icon";
import { useState } from "react";
import { CamperFeatureTypesToClassNamesMap } from "./constants";

export const CamperFeatureTag = ({ type, featureName, iconName, iconWidth, iconHeight }) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleClick = () => {
		if (type === CamperFeatureTypesToClassNamesMap.OVAL) {
			return;
		}

		setIsSelected((prevState) => !prevState);
	};

	return (
		<div
			className={`${styles[type]} ${isSelected && type !== CamperFeatureTypesToClassNamesMap.OVAL && styles.selected}`}
			onClick={handleClick}
		>
			<Icon width={iconWidth} height={iconHeight} iconName={iconName} fill="#101828" />
			<span className={styles.iconText}>{featureName}</span>
		</div>
	);
};
