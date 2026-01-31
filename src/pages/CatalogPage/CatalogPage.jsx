import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { CatalogFilters } from "../../components/CatalogFilters/CatalogFilters";
import { CamperList } from "../../components/CamperList/CamperList";
import styles from './CatalogPage.module.css';
import { selectFilteredCampers } from "../../redux/campersSlice";

const CatalogPage = () => {
	const dispatch = useDispatch();
  const items = useSelector(selectFilteredCampers);

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<CatalogFilters />
			<CamperList data={items} />
		</div>
	);
}

export default CatalogPage;