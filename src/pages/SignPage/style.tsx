import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #faf6e8;
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 960px;
  height: 680px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 1px #868e96;
  @media screen and (max-width: 900px) {
    width: 680px;
  }
  @media screen and (max-width: 600px) {
    width: 400px;
  }
`;

export const SignText = styled.h1`
  display: flex;
  font-size: 48px;
  margin-top: 72px;
  margin-bottom: 72px;
  width: 100%;
  justify-content: center;
  user-select: none;
`;
