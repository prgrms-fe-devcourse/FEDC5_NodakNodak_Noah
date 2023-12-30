import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: 50%;
  background-color: #eee;
  overflow: hidden;
  > img {
    transition: opacity 0.2s ease-out;
  }
`;
