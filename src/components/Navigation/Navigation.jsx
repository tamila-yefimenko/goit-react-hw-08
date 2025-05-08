import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={setActiveClass} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
