import styled from 'styled-components';

export const PostSnippetBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > img {
    padding-bottom: 4px;
  }
  & > *:not(img) {
    padding: 2px 12px;
  }
`;

export const ContentBox = styled.div``;
