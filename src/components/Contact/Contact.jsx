import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { FaUser, FaPhone } from 'react-icons/fa6';
import s from './Contact.module.css';
import toast from 'react-hot-toast';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedNumber, setEditedNumber] = useState(contact.number);

  const handleUpdate = () => {
    if (
      editedName.trim() === contact.name &&
      editedNumber.trim() === contact.number
    ) {
      setIsEditing(false);
      return;
    }

    dispatch(
      updateContact({ id: contact.id, name: editedName, number: editedNumber })
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(contact.name);
    setEditedNumber(contact.number);
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success('Сontact successfully deleted!');
  };

  return (
    <div className={s.contactItem}>
      <div className={s.contactWrapper}>
        {isEditing ? (
          <>
            <input
              className={s.input}
              value={editedName}
              onChange={e => setEditedName(e.target.value)}
              disabled={isLoading}
            />
            <input
              className={s.input}
              value={editedNumber}
              onChange={e => setEditedNumber(e.target.value)}
              disabled={isLoading}
            />
          </>
        ) : (
          <>
            <p className={s.name}>
              <FaUser className={s.icon} />
              {contact.name}
            </p>
            <p className={s.phone}>
              <FaPhone className={s.icon} />
              {contact.number}
            </p>
          </>
        )}
      </div>

      <div className={s.buttonGroup}>
        {isEditing ? (
          <>
            <button
              className={s.saveButton}
              onClick={handleUpdate}
              disabled={isLoading}
            >
              Save
            </button>
            <button
              className={s.cancelButton}
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className={s.editButton}
            onClick={() => setIsEditing(true)}
            disabled={isLoading}
          >
            Update
          </button>
        )}
        <button
          className={s.contactButton}
          onClick={handleDelete}
          disabled={isLoading}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
