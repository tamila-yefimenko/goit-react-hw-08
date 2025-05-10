import { Field, Form, Formik, ErrorMessage } from 'formik';
import s from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.heroText}>
          <h1>Login now!</h1>
          <p>Log in to access your contacts.</p>
        </div>
        <div className={s.card}>
          <div className={s.cardBody}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={FeedbackSchema}
            >
              <Form>
                <fieldset className={s.fieldset}>
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
                    <Link to="/register" className={s.link}>
                      You don't have account? Sign UP!
                    </Link>
                  </div>
                  <button type="submit" className={s.btn}>
                    Login
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

export default LoginForm;
