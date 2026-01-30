import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { CatalogFilters } from "../../components/CatalogFilters/CatalogFilters";

const CatalogPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	return <><CatalogFilters/></>;
}

export default CatalogPage;