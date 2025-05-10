import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  // console.log('isLoggedIn:', isLoggedIn);

  if (isRefreshing) {
    return null; // or a loading spinner
  }

  if (!isLoggedIn) {
    toast.error('You need to log in to access this page.');
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
