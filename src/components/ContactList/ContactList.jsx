import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = ({}) => {
    const filteredContactList = useSelector(selectFilteredContacts);

    return (
        <div className={s.container}>
            <h2 className={s.title}>Phonebook</h2>
            <ul className={s.ContactList}>
                {filteredContactList.map(item => (
                    <Contact key={item.id} data={item} />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
