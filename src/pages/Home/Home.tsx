import s from './Home.module.css';
import welcomeImg from '../../assets/undraw_contact-us_kcoa.svg';

const Home: React.FC = () => {
  return (
    <div className={s.home}>
      <img src={welcomeImg} alt="Welcome" className={s.homeImage} />
      <h1 className={s.homeTitle}>Welcome to the Phonebook App</h1>
      <p className={s.homeText}>Your contacts are just a click away!</p>
      <p className={s.homeText}>
        Use the navigation menu to access different features.
      </p>
    </div>
  );
};

export default Home;
