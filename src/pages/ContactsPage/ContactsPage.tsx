import { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import s from './ContactPage.module.css';
import { useAppDispatch } from '../../redux/hooks';

const ContactsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contactWrapper}>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
