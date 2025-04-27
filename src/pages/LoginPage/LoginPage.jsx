import { Field, Form, Formik } from 'formik';
import s from './LoginPage.module.css';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { loginThunk, registerThunk } from '../../redux/auth/operations';

const LoginPage = () => {
    const dispatch = useDispatch();
    const onSubmit = credentials => {
        dispatch(loginThunk(credentials));
    };

    return (
        <div>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};

export default LoginPage;
