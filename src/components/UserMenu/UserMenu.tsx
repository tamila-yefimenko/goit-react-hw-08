import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu: React.FC = () => {
  const user = useAppSelector(selectUser);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  return (
    <>
      {isLoggedIn && user && <h2 className={s.title}>Hello, {user.name}</h2>}
      {isLoggedIn && (
        <button onClick={() => dispatch(logoutThunk())} className={s.logoutBtn}>
          Logout
        </button>
      )}
    </>
  );
};

export default UserMenu;
