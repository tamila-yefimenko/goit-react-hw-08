import './App.css';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch } from 'react-redux';
import { lazy, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

// const Home = lazy(() => import('./pages/Home/Home'));
// const Layout = lazy(() => import('./components/Layout/Layout'));
const LoginForm = lazy(() => import('./pages/LoginForm/LoginForm'));
const RegistrationForm = lazy(() =>
  import('./pages/RegistrationForm/RegistrationForm')
);
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* <h1>Phonebook</h1> */}
          {/* <ContactForm />
        <SearchBox />
        <ContactList /> */}
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
