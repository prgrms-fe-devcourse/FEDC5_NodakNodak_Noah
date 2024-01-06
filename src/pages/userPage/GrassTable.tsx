import styled from 'styled-components';
import theme from '@/styles/theme';
import { useSelectedUser } from '@/hooks/useSelectedUser';

type LightnesType = 100 | 200 | 300 | 400 | 500;

const GrassTable = () => {
  const currentUser = useSelectedUser();

  const grass = Array.from({ length: 30 }, (): LightnesType => 100);

  currentUser?.posts.forEach((post) => {
    const date = new Date(post.createdAt);

    const year = date.getFullYear();
    const month = date.getMonth();

    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    const day = date.getDay();

    if (year === thisYear && month === thisMonth && grass[day] < 500) {
      grass[day] += 100;
    }
  });

  return (
    <GrassWrapper>
      {grass &&
        grass.map((lightness, i) => (
          <GrassItem key={i} lightness={lightness} />
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

const GrassItem = styled.div<{ lightness: LightnesType }>`
  width: 20px;
  height: 20px;
  background-color: ${({ lightness }) => theme.colors.success[lightness]};
  border-radius: 4px;

  box-shadow: 0 0 0 0.5px ${theme.colors.grayscale[200]};
`;
