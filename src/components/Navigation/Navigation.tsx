import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useAppSelector } from '../../redux/hooks';

const setActiveClass = ({ isActive }: { isActive: boolean }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

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
