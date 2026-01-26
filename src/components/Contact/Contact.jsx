import { useDispatch } from 'react-redux';
import styles from './Contact.module.css';
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return <div className={styles.contactItem}>
    <div className={styles.contactInfo}>
      <div className={styles.infoRow}>
        <span className={styles.icon}>👤</span>
        <span className={styles.text}>{name}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.icon}>📞</span>
        <span className={styles.text}>{number}</span>
      </div>
    </div>
    <button className={styles.deleteButton} onClick={() => dispatch(deleteContact(id))}>
      Delete
    </button>
  </div>
};

export default Contact;