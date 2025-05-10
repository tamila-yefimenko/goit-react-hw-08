import { Field, Form, Formik } from 'formik';
import s from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
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
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset className={s.fieldset}>
                  <label>Name</label>
                  <Field
                    type="name"
                    name="name"
                    className={s.input}
                    placeholder="Name"
                  />
                  <label>Email</label>
                  <Field
                    type="email"
                    name="email"
                    className={s.input}
                    placeholder="Email"
                  />
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    className={s.input}
                    placeholder="Password"
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
