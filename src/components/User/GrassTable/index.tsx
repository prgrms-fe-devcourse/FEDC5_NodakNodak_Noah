import { GrassWrapper, GrassItem } from '@/components/User/GrassTable/style';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import { LightnessType } from '@/components/User/GrassTable/type';
import Tooltip from '@/components/Common/Tooltip';

const GrassTable = () => {
  const currentUser = useSelectedUser();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const grass: { lightness: LightnessType; postNumber: number }[] = Array.from(
    { length: lastDayOfMonth },
    () => ({ lightness: 100, postNumber: 0 }),
  );

  currentUser?.posts.forEach((post) => {
    const postDate = new Date(post.createdAt);
    const postYear = postDate.getFullYear();
    const postMonth = postDate.getMonth();
    const postDay = postDate.getDate();

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    if (postYear === currentYear && postMonth === currentMonth) {
      if (grass[postDay].lightness + 100 < 500) {
        grass[postDay].lightness += 100;
      }
      grass[postDay].postNumber += 1;
    }
  });

  return (
    <GrassWrapper>
      {grass &&
        grass.map((data, i) => (
          <Tooltip
            key={i}
            direction='bottom'
            message={`게시물: ${data.postNumber}`}
            hasArrow={true}
            type='hover'>
            <GrassItem lightness={data.lightness} />
          </Tooltip>
        ))}
    </GrassWrapper>
  );
};

export default GrassTable;
