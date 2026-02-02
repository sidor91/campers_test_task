import { Oval } from "react-loader-spinner";
import styles from './Loader.module.css';

export const Loader = ({ width = 64, height = 64, color = "#6C717B", visible=true }) => {
	return (
		<div className={styles.loaderContainer}>
			<Oval
				height={height}
				width={width}
				color={color}
				wrapperStyle={{}}
				wrapperClass=""
				visible={visible}
				ariaLabel="oval-loading"
				secondaryColor={color}
				strokeWidth={12}
				strokeWidthSecondary={12}
			/>
		</div>
	);
};
