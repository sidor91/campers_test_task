import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";

const CatalogPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	return <h1>Catalog</h1>;
}

export default CatalogPage;