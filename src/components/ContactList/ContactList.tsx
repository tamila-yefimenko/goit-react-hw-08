import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import { useAppSelector } from '../../redux/hooks';

const ContactList: React.FC = () => {
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const filteredContacts = useAppSelector(selectFilteredContacts);

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
