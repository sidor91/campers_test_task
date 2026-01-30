import styles from './CatalogFilters.module.css';
import { Button, ButtonTypesToClassNameMap, ButtonActionsToTypeMap } from "../Button";
import { Input, InputTypes } from "../Input";
import { CamperFeature, CamperFeatureTypesToClassNamesMap, VehicleFormFeatureNamesMap } from "../CamperFeature";
import { IconNamesMap, VehicleFormIconNamesMap } from '../Icon';


export const CatalogFilters = () => {
  return (
		<div className={styles.container}>
			{/* Location Section */}
			<div className={styles.section}>
				<label className={styles.label} for="Location">
					Location
				</label>
				<Input id="Location" type={InputTypes.TEXT} placeholder="" name="Location" isMap={true} />
			</div>

			<p className={styles.filtersTitle}>Filters</p>

			{/* Vehicle Equipment Section */}
			<div className={styles.section}>
				<h3 className={styles.sectionTitle}>Vehicle equipment</h3>
				<hr className={styles.divider} />
				<div className={styles.grid}>
					{["AC", "transmission", "kitchen", "TV", "bathroom"].map((item) => (
						<CamperFeature
							type={CamperFeatureTypesToClassNamesMap.SQUARE}
							featureName={item === "transmission" ? "automatic" : item}
							iconName={IconNamesMap[item]}
							iconWidth={32}
							iconHeight={32}
						/>
					))}
				</div>
			</div>

			{/* Vehicle Type Section */}
			<div className={styles.section}>
				<h3 className={styles.sectionTitle}>Vehicle type</h3>
				<hr className={styles.divider} />
				<div className={styles.grid}>
					{["panelTruck", "fullyIntegrated", "alcove"].map((item) => (
						<CamperFeature
							type={CamperFeatureTypesToClassNamesMap.SQUARE}
							featureName={VehicleFormFeatureNamesMap[item]}
							iconName={VehicleFormIconNamesMap[item]}
							iconWidth={32}
							iconHeight={32}
						/>
					))}
				</div>
			</div>

			<div className={styles.searchButtonContainer}>
				<Button text="Search" type={ButtonTypesToClassNameMap.FILLED} action={ButtonActionsToTypeMap.SUBMIT} />
			</div>
		</div>
	);
}