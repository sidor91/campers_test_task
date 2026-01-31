import styles from "./CamperList.module.css";
import { CamperCard } from "../CamperCard/CamperCard";
import { Button, ButtonActionsToTypeMap, ButtonTypesToClassNameMap } from "../Button";

export const CamperList = ({ data, loadMore, isLoadMoreShown }) => {
	return (
		<div className={styles.container}>
			{data.map((item) => (
				<CamperCard key={item.id} data={item} />
			))}
			{isLoadMoreShown && (
				<div className={styles.loadMoreContainer}>
					<Button
						text="Load more"
						type={ButtonTypesToClassNameMap.OUTLINED}
						action={ButtonActionsToTypeMap.BUTTON}
						clickHandler={loadMore}
					/>
				</div>
			)}
		</div>
	);
};
