import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import s from './ContactPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

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
