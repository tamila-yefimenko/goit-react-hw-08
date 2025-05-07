import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^(\d+-)*\d+$/, 'Must be a valid number')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const contactToAdd = {
      name: newContact.name,
      number: newContact.number,
    };
    dispatch(addContact(contactToAdd));
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleAddContact(values);
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.contactForm}>
        <div className={s.inputWrapper}>
          <label className={s.nameLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={s.nameInput}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
        </div>

        <div className={s.inputWrapper}>
          <label className={s.phoneLabel} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={s.phoneInput}
            type="text"
            name="number"
            id={phoneFieldId}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
        </div>

        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
