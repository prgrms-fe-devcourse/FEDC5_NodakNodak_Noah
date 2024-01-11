import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Comment } from '@/types/APIResponseTypes';
import {
  VoteTitleWrapper,
  InputWrapper,
  ButtonWrapper,
} from '@/components/Post/Detail/Vote/style';
import theme from '@/styles/theme';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import { createNotification } from '@/slices/notification/thunk';
import { CreateNotificationData } from '@/slices/notification/type';
import { useSelectedVote } from '@/hooks/useSelectedVote';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';
import { Input, Button, Card, ScrollBar, Text } from '@/components/common';
import { Warning } from '@/components/Sign/style';
import axiosInstance from '@/utils/customAxios';

const PostVote = () => {
  const postDetailContent = useSelectedPostDetail();
  const postDetailVote = useSelectedVote();
  const myInfo = useSelectedMyInfo();
  const postDetail = useSelectedPostDetail();
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [voteContent, setVoteContent] = useState('');
  const [reVote, setRevote] = useState(false);
  const [myVote, setMyvote] = useState('');

  useEffect(() => {
    postDetailVote.some((vote) => vote.author._id === myInfo?._id)
      ? setRevote(true)
      : setRevote(false);
  }, [myInfo, postDetailVote]);

  useEffect(() => {
    const myVote = postDetailVote.filter(
      (vote) => vote.author._id === myInfo?._id,
    )[0]?.comment;
    if (!myVote) return;
    setMyvote(JSON.parse(myVote).content);
  }, [myInfo, postDetailVote]);

  if (!postDetailContent.title) return null;
  const { voteArray, voteTitle } = JSON.parse(postDetailContent.title);

  const handleViewResult = () => {
    navigate(`./result`);
  };

  const handleVoteContent = (voteItem: string) => {
    if (reVote) return;
    setVoteContent(voteItem);
  };

  const handleVote = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');
    if (!voteContent || reVote || !token || !postId) return;

    try {
      const {
        data: { _id },
      } = await axiosInstance.post<Comment>('comments/create', {
        comment: JSON.stringify({
          type: 'vote',
          content: voteContent,
        }),
        postId,
      });

      const notificationData: CreateNotificationData = {
        notificationType: 'COMMENT',
        notificationTypeId: _id,
        postId,
        userId: postDetail.author._id,
      };

      dispatch(createNotification({ notificationData }));
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
          {reVote ? (
            <Warning style={{ margin: '20px 0 0 0' }}>
              이미 투표하셨습니다.
            </Warning>
          ) : (
            ''
          )}
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
                  cursor: reVote ? 'not-allowed' : 'pointer',
                  backgroundColor: `${
                    vote === myVote
                      ? theme.colors.primary[200]
                      : voteContent === vote
                        ? theme.colors.primary[200]
                        : ''
                  }`,
                  outline: 'none',
                }}
                onClick={() => handleVoteContent(vote)}
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
