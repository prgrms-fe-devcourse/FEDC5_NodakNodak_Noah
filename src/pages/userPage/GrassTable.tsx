import styled from 'styled-components';
import theme from '@/styles/theme';

const GrassTable = () => {
  return (
    <GrassWrapper>
      {Array(30)
        .fill()
        .map((_, i) => (
          <GrassItem key={i} />
        ))}
    </GrassWrapper>
  );
};

export default GrassTable;

const GrassWrapper = styled.div`
  width: 224px;
  height: 80px;
  background-color: ${theme.colors.grayscale[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  border-radius: 4px;
`;

const GrassItem = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${theme.colors.success[200]};
  border-radius: 4px;
`;
