import s from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ data: { name, id, number } }) => {
    const dispatch = useDispatch();
    return (
        <li className={s.contactItem}>
            <div>
                <p className={s.name}>
                    <FaUser />
                    {name}
                </p>
                <p className={s.number}>
                    <FaPhone />
                    {number}
                </p>
            </div>
            <Button type="delete" callback={() => dispatch(deleteContact(id))}>
                Delete
            </Button>
        </li>
    );
};

export default Contact;
