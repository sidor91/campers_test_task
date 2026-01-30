import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getCamperById } from "../../redux/campersOps";
import { useLocation, useParams } from "react-router-dom";

const CamperPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
	const camperId = params?.id;
	const location = useLocation();
	const ref = useRef(location.state ?? "/catalog");
	useEffect(() => {
		dispatch(getCamperById(camperId));
	}, [dispatch, camperId]);

  return <h1>CamperPage</h1>
}

export default CamperPage;