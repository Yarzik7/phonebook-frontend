import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'Redux/filter/filterSlice';
import { selectFilter } from 'Redux/filter/selectors';
import Input from 'components/Input/Input';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <div className={css.filterBox}>
      <Input
        label="Find contacts by name"
        type="text"
        name="filter"
        pattern="^[A-Za-z\u0080-\uFFFF\- ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChangeFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;
