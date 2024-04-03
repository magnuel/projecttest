import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../components/store';

const PrivateRoute = ({element: Component, ...rest }:RouteProps) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } 

  return (
    <Route {...rest} element={Component} />
  );
};

export default PrivateRoute;
