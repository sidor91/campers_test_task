import { useState } from "react";
import styles from "./Form.module.css";
import { Input, InputTypes } from "../Input";
import { Button, ButtonActionsToTypeMap, ButtonTypesToClassNameMap } from "../Button";

const initFormData = {
	name: "",
	email: "",
	comment: "",
	dates: [null, null],
};

export const Form = () => {
	const [formData, setFormData] = useState(initFormData);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    if (!formData.dates[0] || !formData.dates[1]){
      alert('dates are required')
    }
		console.log("Sending form:", formData);
		alert('Camper booked! Thank you!');
    setFormData(initFormData);
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.title}>Book your campervan now</h3>
				<p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>
			</div>

			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					type={InputTypes.TEXT}
					placeholder="Name*"
					name="name"
					id="name"
					value={formData.name}
					setValue={handleInputChange}
					isRequired={true}
				/>

				<Input
					type={InputTypes.TEXT}
					placeholder="Email*"
					name="email"
					id="email"
					value={formData.email}
					setValue={handleInputChange}
					isRequired={true}
				/>

				<Input
					type={InputTypes.DATE}
					placeholder="Booking date*"
					name="date"
					id="date"
					value={formData.dates}
					dates={formData.dates}
					setDates={(value) => setFormData((prev) => ({ ...prev, dates: value }))}
				/>

				<textarea
					className={styles.textarea}
					placeholder="Comment"
					name="comment"
					value={formData.comment}
					onChange={handleInputChange}
				/>

				<Button text="Send" type={ButtonTypesToClassNameMap.FILLED} action={ButtonActionsToTypeMap.SUBMIT} />
			</form>
		</div>
	);
};
