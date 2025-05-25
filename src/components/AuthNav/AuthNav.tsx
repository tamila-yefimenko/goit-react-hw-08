import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const setActiveClass = ({ isActive }: { isActive: boolean }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      {!isLoggedIn && (
        <>
          <NavLink className={setActiveClass} to="/login">
            Login
          </NavLink>
          <NavLink className={setActiveClass} to="/register">
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default AuthNav;
