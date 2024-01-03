import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { RootState, useDispatch } from '@/store';
import { getUser } from '@/slices/user';

const Setting = () => {
  const navigate = useNavigate();
  const mypage = () => {
    navigate('/user');
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const currentUser = useSelector(
    (state: RootState) => state.userInfo.currentUser,
  );
  if (!currentUser) {
    return <div>Loading...</div>;
  }
  const { image, fullName, username, email } = currentUser;

  return (
    <IndexContainer>
      <CardWrapper>
        <ButtonWrapper>
          <Button styleType='ghost' isArrow={true} onClick={mypage}>
            취소하기
          </Button>
        </ButtonWrapper>
        <RowGrid>
          <ColGrid>
            <Avatar src={image} size='large' alt={fullName} />
            <Button size='wide'>이미지 선택</Button>
            <Button size='wide' styleType='ghost'>
              이미지 삭제
            </Button>
          </ColGrid>
          <ColGrid>
            <Input
              underline={true}
              placeholder='닉네임'
              width='80%'
              fontType='h1'
              required={true}
              value={fullName}
            />
            <Input
              underline={true}
              placeholder='한줄 소개'
              width='80%'
              fontType='body1'
              value={username}
            />
            <RowGrid>
              <Text tagType='span' fontType='body1' colorType='black'>
                💌
              </Text>
              <Text tagType='span' fontType='body1' colorType='black'>
                {email}
              </Text>
            </RowGrid>
          </ColGrid>
        </RowGrid>
        <ButtonWrapper>
          <Button styleType='danger'>탈퇴하기</Button>
        </ButtonWrapper>
      </CardWrapper>
    </IndexContainer>
  );
};

const IndexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 480px;
  padding: 30px 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RowGrid = styled.div`
  display: flex;
  flex-direction: row;
`;
const ColGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Setting;
