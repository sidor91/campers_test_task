import { formatAmount } from "../../utils/helpers";
import { CamperFeatureTag, CamperFeatureTypesToClassNamesMap } from "../CamperFeatureTag";
import { FeatureNameIconNamesMap } from "../Icon";
import styles from "./CamperFeatures.module.css";
import { VehicleFormDisplayNameMap } from "./constants";

export const CamperFeatures = ({ data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.featureTagsContainer}>
				{Object.keys(FeatureNameIconNamesMap).map(
					(key) =>
						!!data[key] && (
							<CamperFeatureTag
								key={key}
								type={CamperFeatureTypesToClassNamesMap.OVAL}
								featureName={typeof data[key] === "boolean" ? key : data[key]}
								iconName={FeatureNameIconNamesMap[key]}
								iconWidth={20}
								iconHeight={20}
							/>
						),
				)}
			</div>
			<h3 className={styles.vehicleDetailsHeader}>Vehicle details</h3>
			<hr className={styles.divider} />
			<div className={styles.vehicleDetailsContainer}>
				<div className={styles.vehicleDetailsItem}>
					<span>Form</span>
					<span>{VehicleFormDisplayNameMap[data.form]}</span>
				</div>
				<div className={styles.vehicleDetailsItem}>
					<span>Length</span>
					<span>{formatAmount(data.length)}</span>
				</div>
				<div className={styles.vehicleDetailsItem}>
					<span>Width</span>
					<span>{formatAmount(data.width)}</span>
				</div>
				<div className={styles.vehicleDetailsItem}>
					<span>Height</span>
					<span>{formatAmount(data.height)}</span>
				</div>
				<div className={styles.vehicleDetailsItem}>
					<span>Tank</span>
					<span>{formatAmount(data.tank)}</span>
				</div>
				<div className={styles.vehicleDetailsItem}>
					<span>Consumption</span>
					<span>{data.consumption}</span>
				</div>
			</div>
		</div>
	);
};
