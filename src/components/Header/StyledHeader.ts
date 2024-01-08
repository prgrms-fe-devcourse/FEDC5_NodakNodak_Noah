import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '@/styles/theme';

export const StyledHeaderWrapper = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const ChannelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-decoration: none;
`;

export const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary[500]}; /* 마우스 호버 시 색을 red로 변경 */
  }

  &:active {
    font-weight: 600;
    color: ${theme.colors.primary[500]}; /* 클릭 중일 때 색을 red로 변경 */
  }

  &.active {
    color: red; /* 현재 라우트와 일치할 때 색을 red로 변경 */
  }
`;

export const FormContainer = styled.form`
  position: relative;
  width: 160px;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 32px;
  top: 4px;
`;
export const AuthUiWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
