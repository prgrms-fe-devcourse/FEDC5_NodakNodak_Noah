import { GrassWrapper, GrassItem } from '@/components/User/GrassTable/style';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import { LightnessType } from '@/components/User/GrassTable/type';

const GrassTable = () => {
  const currentUser = useSelectedUser();

  const grass = Array.from({ length: 30 }, (): LightnessType => 100);

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
