import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/campersOps";
import { useParams } from "react-router-dom";
import { selectCampers, selectLoading } from "../../redux/campersSlice";
import styles from "./CamperPage.module.css";
import { DefaultIconsNamesMap, Icon } from "../../components/Icon";
import { CamperFeatures } from "../../components/CamperFeatures/CamperFeatures";
import { CamperReviews } from "../../components/CamperReviews/CamperReviews";
import { Form } from "../../components/Form/Form";
import { Loader } from "../../components/Loader/Loader";

const CamperPage = () => {
  const [isFeatures, setIsFeatures] = useState(true);
	const dispatch = useDispatch();
	const { id: camperId } = useParams();

	const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
	const camper = campers.find((item) => item.id === camperId);

	useEffect(() => {
		if (!camper) {
			dispatch(getCamperById(camperId));
		}
	}, [dispatch, camperId, camper]);

	return (
		<>
			{isLoading && <Loader/>}
			{camper && !isLoading && (
				<div className={styles.container}>
					<h1 className={styles.camperName}>{camper.name}</h1>
					<div className={styles.ratingLocation}>
						<div className={styles.rating}>
							<Icon
								iconName={DefaultIconsNamesMap.rating}
								width={16}
								height={16}
								fill="#FFC531"
								style={{
									"--star-fill": "#FFC531",
									"--star-stroke": "#FFC531",
								}}
							/>
							<span>
								{camper.reviews.reduce((acc, item) => acc + item.reviewer_rating, 0) / camper.reviews.length} (
								{camper.reviews.length} Reviews)
							</span>
						</div>
						<div className={styles.location}>
							<Icon iconName={DefaultIconsNamesMap.map} width={16} height={16} fill="#101828" />
							<span>{camper.location}</span>
						</div>
					</div>
					<div className={styles.priceWrapper}>
						<span className={styles.price}>€{camper.price}.00</span>
					</div>
					<div className={styles.gallery}>
						{camper.gallery.map((image, index) => (
							<div key={image.original} className={styles.imageWrapper}>
								<img
									key={image.original}
									src={image.original}
									alt={`${camper.name}-${index}`}
									className={styles.image}
								/>
							</div>
						))}
					</div>
					<p className={styles.description}>{camper.description}</p>

					<div className={styles.tabsHeader}>
						<button
							className={`${styles.tabBtn} ${isFeatures ? styles.active : ""}`}
							onClick={() => setIsFeatures(true)}
						>
							Features
						</button>
						<button
							className={`${styles.tabBtn} ${!isFeatures ? styles.active : ""}`}
							onClick={() => setIsFeatures(false)}
						>
							Reviews
						</button>
					</div>

					<div className={styles.featuresReviewsForm}>
						<div className={styles.featuresReviewsContainer}>
							{isFeatures ? <CamperFeatures data={camper} /> : <CamperReviews data={camper.reviews} />}
						</div>
						<Form />
					</div>
				</div>
			)}
		</>
	);
};

export default CamperPage;
