import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { RestrictedRouteProps } from '../App/App.types';

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return component;
};

export default RestrictedRoute;
