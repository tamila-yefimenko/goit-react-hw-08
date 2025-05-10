import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

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
