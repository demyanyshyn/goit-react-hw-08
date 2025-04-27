import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUserThunk } from './redux/auth/operations';

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {
        dispatch(refreshUserThunk());
    }, [dispatch]);
    return (
        <section className="app">
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/register"
                        element={
                            <RestrictedRoute
                                component={<RegistrationPage />}
                                redirectTo="/contacts"
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <RestrictedRoute
                                component={<LoginPage />}
                                redirectTo="/contacts"
                            />
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute>
                                <ContactsPage />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Layout>
        </section>
    );
};
export default App;
