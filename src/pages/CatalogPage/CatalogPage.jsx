import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { CatalogFilters } from "../../components/CatalogFilters/CatalogFilters";
import { CamperList } from "../../components/CamperList/CamperList";
import styles from "./CatalogPage.module.css";
import { getTotal, selectCampers } from "../../redux/campersSlice";
import { nextPage, selectedFilters } from "../../redux/filtersSlice";

const CatalogPage = () => {
	const dispatch = useDispatch();
	const filters = useSelector(selectedFilters);
	const items = useSelector(selectCampers);
	const totalItems = useSelector(getTotal);

	const { locationFilter, featureFilters, vehicleTypeFilters } = filters;

	useEffect(() => {
		dispatch(
			fetchCampers({
				locationFilter,
				featureFilters,
				vehicleTypeFilters,
				page: 1,
				append: false,
			}),
		);
	}, [dispatch, locationFilter, featureFilters, vehicleTypeFilters]);

	const handleLoadMore = () => {
		dispatch(nextPage());
		dispatch(
			fetchCampers({
				...filters,
        append: true,
				page: filters.page + 1,
			}),
		);
	};

	return (
		<div className={styles.container}>
			<CatalogFilters />
			<CamperList data={items} loadMore={handleLoadMore} isLoadMoreShown={items.length < totalItems} />
		</div>
	);
};

export default CatalogPage;
