import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import s from './UserMenu.module.css';
import { logoutThunk } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);
    const handleClick = () => {
        dispatch(logoutThunk());
    };
    return (
        <>
            <ul className={s.userMenuList}>
                <li className={s.userMenuItem}>Welcome, {name}</li>
                <li className={s.userMenuItem}>
                    <Button type="logout" callback={handleClick}>
                        Logout
                    </Button>
                </li>
            </ul>
        </>
    );
};

export default UserMenu;
