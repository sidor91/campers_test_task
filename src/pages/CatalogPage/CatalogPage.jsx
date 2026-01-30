import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { CatalogFilters } from "../../components/CatalogFilters/CatalogFilters";
import { CamperCard } from "../../components/CamperCard/CamperCard";

const CatalogPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	return (
		<>
			{/* <CatalogFilters/> */}
			<CamperCard
				data={{
					id: "11",
					name: "Kuga Camper",
					price: 8500,
					rating: 4.4,
					location: "Ukraine, Kyiv",
					description:
						"Embark on a comfortable and convenient road trip with the Kuga Camper panel truck. Designed for small groups or couples, this compact camper offers a blend of functionality and style. Explore the open roads with ease, enjoy the convenience of on-the-go cooking, and experience the freedom of a camper designed for memorable adventures.",
					form: "panelTruck",
					length: "5.6m",
					width: "2m",
					height: "3.1m",
					tank: "117l",
					consumption: "15l/100km",
					transmission: "automatic",
					engine: "diesel",
					AC: true,
					bathroom: false,
					kitchen: true,
					TV: false,
					radio: true,
					refrigerator: false,
					microwave: true,
					gas: true,
					water: false,
					gallery: [
						{
							thumb: "https://ftp.goit.study/img/campers-test-task/11-1.webp",
							original: "https://ftp.goit.study/img/campers-test-task/11-1.webp",
						},
						{
							thumb: "https://ftp.goit.study/img/campers-test-task/11-2.webp",
							original: "https://ftp.goit.study/img/campers-test-task/11-2.webp",
						},
						{
							thumb: "https://ftp.goit.study/img/campers-test-task/11-3.webp",
							original: "https://ftp.goit.study/img/campers-test-task/11-3.webp",
						},
					],
					reviews: [
						{
							reviewer_name: "Alice",
							reviewer_rating: 5,
							comment:
								"The Kuga Camper exceeded our expectations! Compact yet spacious enough for a small group, it provided all the necessary amenities for a comfortable journey. The kitchen facilities were a definite plus, making our road trip enjoyable.",
						},
						{
							reviewer_name: "Bob",
							reviewer_rating: 3,
							comment:
								"A decent option for a small group or couple. The Kuga Camper offered convenience, but the lack of a TV was a downside for entertainment. Overall, a comfortable camper for short trips.",
						},
					],
				}}
			/>
		</>
	);
}

export default CatalogPage;