import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { useAppDispatch } from '../../redux/hooks';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import { ContactFormValues } from '../App/App.types';

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

const initialValues: ContactFormValues = {
  name: '',
  number: '',
};

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAddContact = (newContact: ContactFormValues) => {
    const contactToAdd = {
      name: newContact.name,
      number: newContact.number,
    };
    dispatch(addContact(contactToAdd));
    toast.success('Contact successfully added!');
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik<ContactFormValues>
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
