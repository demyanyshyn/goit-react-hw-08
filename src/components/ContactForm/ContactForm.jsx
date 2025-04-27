import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import ContactList from '../ContactList/ContactList';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const initialValues = {
    name: '',
    number: '',
};

const ContactForm = ({}) => {
    const nameFieldId = crypto.randomUUID();
    const numberFieldId = crypto.randomUUID();
    const dispatch = useDispatch();

    const handleSubmit = ({ name, number }, actions) => {
        const newContact = {
            name,
            number,
        };

        dispatch(addContact(newContact));
        actions.resetForm();
    };
    const addContactkSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        number: Yup.string()
            .min(3, 'Too Short!')
            .max(12, 'Too Long!')
            .required('Required'),
    });
    return (
        <div className={s.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={addContactkSchema}
            >
                <Form className={s.contactFormWrapper}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field
                        className={s.name}
                        type="text"
                        name="name"
                        id={nameFieldId}
                    />
                    <ErrorMessage
                        className={s.nameError}
                        name="name"
                        component="span"
                    />
                    <label htmlFor={numberFieldId}>Phone</label>
                    <Field
                        className={s.number}
                        type="text"
                        name="number"
                        id={numberFieldId}
                    />
                    <ErrorMessage
                        className={s.numberError}
                        name="number"
                        component="span"
                    />
                    <Button type="submit">Add Contact</Button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
