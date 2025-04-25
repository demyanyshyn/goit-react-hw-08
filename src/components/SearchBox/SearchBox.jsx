import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filterSlice';

const SearchBox = ({}) => {
    const inputValue = useSelector(state => state.filters.name);
    const dispatch = useDispatch();
    return (
        <div className={s.searchBox}>
            <p>Search contacts by name or number</p>
            <input
                value={inputValue}
                type="text"
                name="search"
                onChange={e => dispatch(changeFilter(e.target.value))}
            />
        </div>
    );
};

export default SearchBox;
