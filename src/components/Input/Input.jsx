import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputTypes } from "./constants";
import styles from "./Input.module.css";
import iconsSprite from "../../assets/sprite.svg";

export const Input = ({ type, placeholder, name, isMap, id, value, setValue, dates, setDates, isRequired = false }) => {
	const [startDate, endDate] = dates || [];

	if (type === InputTypes.DATE) {
		return (
			<DatePicker
				selectsRange
				startDate={startDate}
				endDate={endDate}
				onChange={setDates}
				placeholderText="Booking date*"
				className={styles.input}
				dateFormat="yyyy-MM-dd"
				minDate={new Date()}
			/>
		);
	}

	return (
		<div className={styles.inputWrapper}>
			{isMap && (
				<svg className={`${styles.icon} ${value ? styles.iconFilled : styles.iconPlaceholder}`}>
					<use href={`${iconsSprite}#icon-map`} />
				</svg>
			)}
			<input
				id={id}
				className={`${styles.input} ${isMap ? styles.mapInput : ""}`}
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={setValue}
				required={isRequired}
			/>
		</div>
	);
};
