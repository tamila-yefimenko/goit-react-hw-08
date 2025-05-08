import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <nav>
      <NavLink className={setActiveClass} to="/login">
        Login
      </NavLink>
      <NavLink className={setActiveClass} to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default AuthNav;
