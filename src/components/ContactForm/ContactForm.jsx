import { useId } from "react";
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(12, 'Too Long!')
    .matches(/^[0-9-]+$/, "Only numbers and hyphens are allowed")
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = ({ name, number }, actions) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({
      name,
      number,
    }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <label htmlFor={nameId} className={styles.label}>Name</label>
          <Field
            id={nameId}
            name="name"
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.errorMessage} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor={numberId} className={styles.label}>Number</label>
          <Field
            id={numberId}
            type="tel"
            name="number"
            className={styles.input}
          />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>

        <button type="submit" className={styles.addButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;