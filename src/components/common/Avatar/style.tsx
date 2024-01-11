import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: 50%;
  aspect-ratio: 1/1;
  background-color: #eee;
  overflow: hidden;
  cursor: pointer;
  > img {
    transition: opacity 0.2s ease-out;
  }
`;
