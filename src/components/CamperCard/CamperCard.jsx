import { Link } from "react-router-dom";
import { Button, ButtonActionsToTypeMap, ButtonTypesToClassNameMap } from "../Button";
import styles from "./CamperCard.module.css";
import { DefaultIconsNamesMap, Icon, IconNamesMap } from "../Icon";
import { CamperFeature, CamperFeatureTypesToClassNamesMap } from "../CamperFeature";

export const CamperCard = ({ data }) => {
	return (
		<div className={styles.card}>
			{/* Левая часть: Изображение */}
			<div className={styles.imageWrapper}>
				<img src={data.gallery[0].thumb} alt={data.name} className={styles.image} />
			</div>

			{/* Правая часть: Контент */}
			<div className={styles.content}>
				<div className={styles.header}>
					<h2 className={styles.title}>{data.name}</h2>
					<div className={styles.priceWrapper}>
						<span className={styles.price}>€{data.price}.00</span>
						<button className={styles.favoriteBtn}>
							<Icon iconName={DefaultIconsNamesMap.heart} width={24} height={20.5} fill="#101828" />
						</button>
					</div>
				</div>

				<div className={styles.ratingLocation}>
					<div className={styles.rating}>
						<Icon iconName={DefaultIconsNamesMap.rating} width={16} height={16} fill="#FFC531" />
						<span>
							{data.reviews.reduce((acc, item) => acc + item.reviewer_rating, 0) / data.reviews.length} (
							{data.reviews.length} Reviews)
						</span>
					</div>
					<div className={styles.location}>
						<Icon iconName={DefaultIconsNamesMap.map} width={16} height={16} fill="#101828" />
						<span>{data.location}</span>
					</div>
				</div>

				<span className={styles.description}>{data.description}</span>

				{/* Теги характеристик */}
				<div className={styles.features}>
					{Object.keys(IconNamesMap).map(
						(key) =>
							!!data[key] && (
								<CamperFeature
									key={key}
									type={CamperFeatureTypesToClassNamesMap.OVAL}
									featureName={typeof data[key] === "boolean" ? key : data[key]}
									iconName={IconNamesMap[key]}
									iconWidth={20}
									iconHeight={20}
								/>
							),
					)}
				</div>
				<Link to={`/catalog/${data.id}`}>
					<Button text="Show more" type={ButtonTypesToClassNameMap.FILLED} action={ButtonActionsToTypeMap.BUTTON} />
				</Link>
			</div>
		</div>
	);
};
