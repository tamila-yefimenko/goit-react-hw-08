import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={setActiveClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
