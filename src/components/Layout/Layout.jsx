import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <AppBar />
            {children}
        </>
    );
};

export default Layout;
