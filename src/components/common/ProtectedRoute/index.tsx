import { ProtectedRouteProps } from './type';
import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';

const ProtectedRoute = ({
  children,
  admin,
}: PropsWithChildren<ProtectedRouteProps>) => {
  const myInfo = useSelectedMyInfo();
  const token = localStorage.getItem('auth-token');

  if (!token || (admin && !token && myInfo?.role !== 'SuperAdmin')) {
    return <Navigate to='/home' replace />;
  }
  return children;
};

export default ProtectedRoute;
