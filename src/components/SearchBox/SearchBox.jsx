import { useId } from "react";
import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const searchId = useId();

  return (
    <div className={styles.container}>
      <label htmlFor={searchId} className={styles.label}>Find contacts by name</label>
      <input
        id={searchId}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;