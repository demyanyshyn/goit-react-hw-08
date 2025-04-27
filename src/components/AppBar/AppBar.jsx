import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={s.header}>
            <ul className={s.menuList}>
                <li className={s.menuItem}>
                    <Navigation />
                </li>
                {!isLoggedIn && (
                    <li className={s.menuItem}>
                        <AuthNav />
                    </li>
                )}
                {isLoggedIn && (
                    <li className={s.menuItem}>
                        <UserMenu />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default AppBar;
