// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
