import { ProtectedRouteProps } from './type';
import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';

const ProtectedRoute = ({
  children,
  admin,
}: PropsWithChildren<ProtectedRouteProps>) => {
  const myInfo = useSelectedMyInfo();

  if (!myInfo?.role || (admin && myInfo?.role !== 'SuperAdmin')) {
    return <Navigate to='/home' replace />;
  }
  return children;
};

export default ProtectedRoute;
