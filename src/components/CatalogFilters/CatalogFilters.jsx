import styles from "./CatalogFilters.module.css";
import { Button, ButtonTypesToClassNameMap, ButtonActionsToTypeMap } from "../Button";
import { Input, InputTypes } from "../Input";
import {
	CamperFeature,
	CamperFeatureTypesToClassNamesMap,
	VehicleFormFeatureNamesMap,
	VehicleFeatureDisplayNamesMap,
} from "../CamperFeature";
import { FeatureNameIconNamesMap, VehicleFormIconNamesMap } from "../Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByFilters } from "../../redux/filtersSlice";

export const CatalogFilters = () => {
	const dispatch = useDispatch();
	const [locationFilter, setLocationFilter] = useState("");
	const [featureFilters, setFeatureFilters] = useState([]);
	const [vehicleTypeFilters, setVehicleTypeFilters] = useState([]);

	const handleFeatureClick = (feature) => {
		setFeatureFilters((prevFilters) =>
			prevFilters.includes(feature) ? prevFilters.filter((i) => i !== feature) : [...prevFilters, feature],
		);
	};

	const handleVehicleTypeClick = (type) => {
		setVehicleTypeFilters((prevFilters) =>
			prevFilters.includes(type) ? prevFilters.filter((i) => i !== type) : [...prevFilters, type],
		);
	};

	const handleSearch = () => {
		dispatch(searchByFilters({ locationFilter, featureFilters, vehicleTypeFilters }));
	};

	return (
		<div className={styles.container}>
			{/* Location Section */}
			<div className={styles.section}>
				<label className={styles.label} htmlFor="Location">
					Location
				</label>
				<Input
					id="Location"
					type={InputTypes.TEXT}
					placeholder=""
					name="Location"
					isMap={true}
					value={locationFilter}
					setValue={(e) => setLocationFilter(e.target.value)}
				/>
			</div>

			<p className={styles.filtersTitle}>Filters</p>

			{/* Vehicle Equipment Section */}
			<div className={styles.section}>
				<h3 className={styles.sectionTitle}>Vehicle equipment</h3>
				<hr className={styles.divider} />
				<div className={styles.grid}>
					{Object.keys(VehicleFeatureDisplayNamesMap).map((item) => (
						<div key={item} onClick={() => handleFeatureClick(item)}>
							<CamperFeature
								type={CamperFeatureTypesToClassNamesMap.SQUARE}
								featureName={VehicleFeatureDisplayNamesMap[item]}
								iconName={FeatureNameIconNamesMap[item]}
								iconWidth={32}
								iconHeight={32}
							/>
						</div>
					))}
				</div>
			</div>

			{/* Vehicle Type Section */}
			<div className={styles.section}>
				<h3 className={styles.sectionTitle}>Vehicle type</h3>
				<hr className={styles.divider} />
				<div className={styles.grid}>
					{Object.keys(VehicleFormFeatureNamesMap).map((item) => (
						<div key={item} onClick={() => handleVehicleTypeClick(item)}>
							<CamperFeature
								type={CamperFeatureTypesToClassNamesMap.SQUARE}
								featureName={VehicleFormFeatureNamesMap[item]}
								iconName={VehicleFormIconNamesMap[item]}
								iconWidth={32}
								iconHeight={32}
							/>
						</div>
					))}
				</div>
			</div>

			<div className={styles.searchButtonContainer}>
				<Button
					text="Search"
					type={ButtonTypesToClassNameMap.FILLED}
					action={ButtonActionsToTypeMap.BUTTON}
					clickHandler={handleSearch}
				/>
			</div>
		</div>
	);
};
