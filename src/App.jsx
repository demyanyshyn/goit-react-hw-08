import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectLoading } from './redux/contactsSlice';
import Loader from './components/Loader/Loader';

const App = () => {
    const isLoader = useSelector(selectLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <section className="app">
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {isLoader && <Loader>Loading...</Loader>}
        </section>
    );
};
export default App;
