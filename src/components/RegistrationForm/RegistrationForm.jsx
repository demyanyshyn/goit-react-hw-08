import { Field, Form, Formik } from 'formik';
import s from './RegistrationForm.module.css';
import Button from '../Button/Button';

const RegistrationForm = ({ onSubmit }) => {
    const handleSubmit = (values, options) => {
        onSubmit(values);
        options.resetForm();
    };

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    return (
        <>
            <h2>Registration</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <h3>Name</h3>
                    <Field name="name" />
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

export default RegistrationForm;
