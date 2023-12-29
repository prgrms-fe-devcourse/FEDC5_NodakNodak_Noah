import { TempPost } from './tempType';
import { FlexWrapper } from './StyledPostCard';
import PostSnippet from './PostSnippet';
import Button from '../Button';
import Card from '../Card';

import styled from 'styled-components';

const PostCard = ({ avatar, image, title, count, fullName }: TempPost) => {
  return (
    <Card width='280px' height='280px' shadowType='medium'>
      <PostSnippet
        avatar={avatar}
        image={image}
        title={title}
        count={count}
        fullName={fullName}
      />
      <FlexWrapper>
        <Button styleType='primary'>자세히 보기</Button>
        <Button styleType='ghost'>결과 보기</Button>
      </FlexWrapper>
    </Card>
  );
};

PostCard.Group = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 16px;
`;

export default PostCard;
