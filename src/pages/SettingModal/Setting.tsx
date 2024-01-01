import styled from 'styled-components';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Text from '@/components/Text';

const Setting = () => {
  return (
    <IndexContainer>
      <CardWrapper>
        <ButtonWrapper>
          <Button styleType='ghost' isArrow={true}>
            취소하기
          </Button>
        </ButtonWrapper>
        <RowGrid>
          <ColGrid>
            <Avatar
              src='https://i.pravatar.cc/300'
              size='large'
              alt='userAvatar'
            />
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
            />
            <Input
              underline={true}
              placeholder='한줄 소개'
              width='80%'
              fontType='body1'
            />
            <Text tagType='span' fontType='body1' colorType='black'>
              💌 nodaknodak@gmail.com
            </Text>
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
