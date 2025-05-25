import { useId } from 'react';
import { changeFilter } from '../../redux/filters/slice';
import s from './SearchBox.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const SearchBox: React.FC = () => {
  const id = useId();
  const filter = useAppSelector(state => state.filters.filter);
  const dispatch = useAppDispatch();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
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
