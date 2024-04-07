import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface ProtectedRouteProps {
  admin?: boolean;
}

const ProtectedRoute = ({
  children,
  admin,
}: PropsWithChildren<ProtectedRouteProps>) => {
  const { state } = useLocation();
  const token = localStorage.getItem('auth-token');

  if (admin) {
    return state !== 'SuperAdmin' ? <Navigate to='/home' replace /> : children;
  } else {
    return token ? (
      children
    ) : (
      <Navigate
        to={
          confirm('로그인이 필요합니다. 로그인 하시겠습니까?')
            ? '/sign'
            : '/home'
        }
        replace
      />
    );
  }
};

export default ProtectedRoute;
