import { DefaultIconsNamesMap } from "../Icon/constants";
import { Icon } from "../Icon/Icon";
import styles from "./CamperReviews.module.css";

export const CamperReviews = ({ data }) => {
	return (
		<div className={styles.container}>
			{!!data.length &&
				data.map((review) => (
					<div className={styles.reviewContainer}>
						<div className={styles.avatarNameRatingContainer}>
							<div className={styles.avatar}>
								<span>{review.reviewer_name.toUpperCase().split("")[0]}</span>
							</div>
							<div className={styles.nameRatingContainer}>
								<span>{review.reviewer_name}</span>
								<div className={styles.ratingContainer}>
									{Array.from({ length: 5 }).map((_, index) => (
										<Icon
											key={index}
											iconName={DefaultIconsNamesMap.rating}
											width={16}
											height={16}
											fill="#FFC531"
											style={
												index < review.reviewer_rating
													? {
															"--star-fill": "#FFC531",
															"--star-stroke": "#FFC531",
														}
													: {}
											}
										/>
									))}
								</div>
							</div>
						</div>
            <div className={styles.comment}>
              <p>{review.comment}</p>
            </div>
					</div>
				))}
		</div>
	);
};
