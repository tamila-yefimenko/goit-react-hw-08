import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={s.contactContainer}>
      <ContactForm />
      <SearchBox />
      <ul className={s.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
      {loading && <p className={s.loading}>Loading...</p>}
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};

export default ContactList;
