import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import Button from '../Button/Button';

const LoginForm = ({ onSubmit }) => {
    const handleSubmit = (values, options) => {
        onSubmit(values);
        options.resetForm();
    };

    const initialValues = {
        email: '',
        password: '',
    };
    return (
        <>
            <h2>Login Page</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <h3>Email</h3>
                    <Field name="email" />
                    <h3>Password</h3>
                    <Field name="password" />
                    <Button type="submit">Login</Button>
                </Form>
            </Formik>
        </>
    );
};

export default LoginForm;
