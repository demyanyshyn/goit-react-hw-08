import s from './ContactsPage.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectLoading } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';

const ContactsPage = () => {
    const isLoader = useSelector(selectLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        const controller = new AbortController();
        dispatch(fetchContacts(controller.signal));
        return () => {
            controller.abort();
        };
    }, [dispatch]);
    return (
        <div className={s.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {isLoader && <Loader>Loading...</Loader>}
        </div>
    );
};

export default ContactsPage;
