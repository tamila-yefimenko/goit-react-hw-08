import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const id = useId();
  const filter = useSelector(state => state.filters.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.filterInputWrapper}>
      <label className={s.inputTitle} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={s.filterInput}
        value={filter}
        onChange={handleFilter}
        type="text"
        id={id}
      ></input>
    </div>
  );
};

export default SearchBox;
