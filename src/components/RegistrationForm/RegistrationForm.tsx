import { Field, Form, Formik, ErrorMessage } from 'formik';
import s from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../redux/hooks';
import { RegisterBody } from '../App/App.types';
import { FormikHelpers } from 'formik';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialValues: RegisterBody = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = async (
    values: RegisterBody,
    actions: FormikHelpers<RegisterBody>
  ) => {
    try {
      await dispatch(registerThunk(values)).unwrap();
      actions.resetForm();
    } catch (error) {
      console.log(error);
      toast.error(
        'A user with this email is already registered. Please, try again.'
      );
    }
  };

  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.heroText}>
          <h1>Register now!</h1>
          <p>Register to access your contacts.</p>
        </div>
        <div className={s.card}>
          <div className={s.cardBody}>
            <Formik<RegisterBody>
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={FeedbackSchema}
            >
              <Form>
                <fieldset className={s.fieldset}>
                  <label>Name</label>
                  <Field
                    type="name"
                    name="name"
                    className={s.input}
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={s.errorMessage}
                  />
                  <label>Email</label>
                  <Field
                    type="email"
                    name="email"
                    className={s.input}
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={s.errorMessage}
                  />
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    className={s.input}
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={s.errorMessage}
                  />
                  <div>
                    <Link to="/login" className={s.link}>
                      Have you had an account yet? Log in!
                    </Link>
                  </div>
                  <button type="submit" className={s.btn}>
                    Register
                  </button>
                </fieldset>
              </Form>
            </Formik>
            <Link to="/" className={s.link}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
