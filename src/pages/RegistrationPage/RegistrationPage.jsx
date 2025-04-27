import { useDispatch } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';
import { registerThunk } from '../../redux/auth/operations';

const RegistrationPage = () => {
    const dispatch = useDispatch();
    const onSubmit = credentials => {
        dispatch(registerThunk(credentials));
    };

    return (
        <div>
            <RegistrationForm onSubmit={onSubmit} />
        </div>
    );
};

export default RegistrationPage;
