import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
    return (
        <>
            {' '}
            <ul className={s.navList}>
                <li className={s.navItem}>
                    <NavLink
                        className={({ isActive }) =>
                            clsx(s.link, isActive && s.active)
                        }
                        to="/login"
                    >
                        Login
                    </NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink
                        className={({ isActive }) =>
                            clsx(s.link, isActive && s.active)
                        }
                        to="/register"
                    >
                        Registration
                    </NavLink>
                </li>
                <li className={s.navItem}></li>
            </ul>
        </>
    );
};

export default AuthNav;
