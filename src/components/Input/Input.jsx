import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputTypes } from "./constants";
import styles from "./Input.module.css";
import iconsSprite from "../../assets/sprite.svg";

export const Input = ({ type, placeholder, name, isMap, id }) => {
	const [inputValue, setInputValue] = useState("");
	const [range, setRange] = useState([null, null]);
	const [startDate, endDate] = range;

	const handleChange = (e) => setInputValue(e.target.value);

	if (type === InputTypes.DATE) {
		return (
			<DatePicker
				selectsRange
				startDate={startDate}
				endDate={endDate}
				onChange={(update) => setRange(update)}
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
				<svg className={`${styles.icon} ${inputValue ? styles.iconFilled : styles.iconPlaceholder}`}>
					<use href={`${iconsSprite}#icon-map`} />
				</svg>
			)}
			<input
				id={id}
				className={`${styles.input} ${isMap ? styles.mapInput : ""}`}
				type={type}
				placeholder={placeholder}
				name={name}
				value={inputValue}
				onChange={handleChange}
			/>
		</div>
	);
};
