import { GrassWrapper, GrassItem } from '@/components/User/GrassTable/style';
import { useSelectedUser } from '@/hooks/useSelectedUser';

type LightnessType = 100 | 200 | 300 | 400 | 500;

const GrassTable = () => {
  const currentUser = useSelectedUser();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const grass = Array.from(
    { length: lastDayOfMonth },
    (): LightnessType => 100,
  );

  currentUser?.posts.forEach((post) => {
    const postDate = new Date(post.createdAt);
    const postYear = postDate.getFullYear();
    const postMonth = postDate.getMonth();
    const postDay = postDate.getDate();

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    if (
      postYear === currentYear &&
      postMonth === currentMonth &&
      grass[postDay] < 500
    ) {
      grass[postDay] += 100;
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
