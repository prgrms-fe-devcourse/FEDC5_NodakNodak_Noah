import {
  VoteTitleWrapper,
  InputWrapper,
  ButtonWrapper,
} from './StyledPostVote';
import { useSelectedPost } from '../useSelectedPost';
import { useSelectedVote } from '../PostComment/useSelectedComment';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { RootState, useDispatch } from '@/store';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Text from '@/components/Text';
import ScrollBar from '@/components/ScrollBar';
import theme from '@/styles/theme';
import { getPostDetail } from '@/slices/postDetail';

const PostVote = () => {
  const postDetailContent = useSelectedPost();
  const postDetailVote = useSelectedVote();
  const myInfo = useSelector((state: RootState) => state.userInfo.authUser);
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [voteContent, setVoteContent] = useState('');
  const [reVote, setRevote] = useState(false);

  useEffect(() => {
    postDetailVote.some((vote) => vote.author._id === myInfo?._id)
      ? setRevote(true)
      : setRevote(false);
  }, [myInfo, postDetailVote]);

  if (!postDetailContent.title) return null;
  const { voteArray, voteTitle } = JSON.parse(postDetailContent.title);

  const handleViewResult = () => {
    navigate(`./result`);
  };

  const handleVote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!voteContent || reVote) return;
    const token = localStorage.getItem('auth-token');
    try {
      await axios({
        url: 'https://kdt.frontend.5th.programmers.co.kr:5003/comments/create',
        method: 'POST',
        data: {
          comment: JSON.stringify({
            type: 'vote',
            voteArray: ['한식', '중식', '일식', '양식'],
            content: voteContent,
          }),
          postId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getPostDetail({ postId }));
      navigate(`./result`);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Card width='44.375rem' height='31.25rem' shadowType='large'>
      <ScrollBar>
        <VoteTitleWrapper>
          <Text
            tagType='span'
            fontType='h3'
            colorType='black'
            style={{ margin: '1rem 0' }}>
            {voteTitle}
          </Text>
          <Text tagType='span' fontType='body2' colorType='black'>
            {`${postDetailVote?.length}명 투표`}
          </Text>
        </VoteTitleWrapper>
        <form>
          <InputWrapper>
            {voteArray.map((vote: string, index: number) => (
              <Input
                key={index}
                value={vote}
                bordertype='enabled'
                readOnly={true}
                style={{
                  marginBottom: '1.5rem',
                  width: '466px',
                  height: '48px',
                  backgroundColor: `${
                    voteContent === vote ? theme.colors.primary[200] : ''
                  }`,
                  outline: 'none',
                }}
                onClick={() => setVoteContent(vote)}
              />
            ))}
          </InputWrapper>
          <ButtonWrapper>
            <Button
              event={voteContent === '' || reVote ? 'disabled' : 'enabled'}
              styleType='primary'
              size='wide'
              disabled={voteContent === '' || reVote ? true : false}
              onClick={handleVote}>
              투표 하기
            </Button>
            <Button
              event='enabled'
              styleType='ghost'
              size='wide'
              onClick={handleViewResult}>
              결과 보기
            </Button>
          </ButtonWrapper>
        </form>
      </ScrollBar>
    </Card>
  );
};

export default PostVote;
