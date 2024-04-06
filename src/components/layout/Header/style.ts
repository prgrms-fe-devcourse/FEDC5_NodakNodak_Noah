import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLayout = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const ChannelList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  width: 400px;
`;

export const NavLinkBox = styled(NavLink)`
  text-decoration: none;
`;

export const FormElement = styled.form`
  display: flex;
  position: relative;
  width: 160px;
  flex-wrap: nowrap;
`;

export const AuthUiBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const IconBox = styled.span`
  cursor: pointer;
  user-select: none;
  transition: all 0.2s linear;
  transform: scale(1.4);
  &:hover {
    transform: scale(1.5);
  }
`;
