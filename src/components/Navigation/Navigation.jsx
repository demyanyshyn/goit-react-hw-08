import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
    return (
        <>
            <ul className={s.navList}>
                <li className={s.navItem}>
                    <NavLink
                        className={({ isActive }) =>
                            clsx(s.link, isActive && s.active)
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink
                        className={({ isActive }) =>
                            clsx(s.link, isActive && s.active)
                        }
                        to="/contacts"
                    >
                        Contacts
                    </NavLink>
                </li>
                <li className={s.navItem}></li>
            </ul>
        </>
    );
};

export default Navigation;
