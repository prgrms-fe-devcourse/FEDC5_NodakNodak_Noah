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
    const check = window.confirm('로그인이 필요합니다. 로그인 하시겠습니까?');
    if (check) {
      return <Navigate to='/sign' replace />;
    } else {
      return <Navigate to='/home' replace />;
    }
  }
  return children;
};

export default ProtectedRoute;
