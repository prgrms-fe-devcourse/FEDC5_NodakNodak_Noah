import { GrassWrapper, GrassItem } from '@/components/User/GrassTable/style';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import { LightnessType } from '@/components/User/GrassTable/type';
import Tooltip from '@/components/common/Tooltip';

const GrassTable = () => {
  const currentUser = useSelectedUser();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const grass: {
    lightness: LightnessType;
    postNumber: number;
    date: string;
  }[] = Array.from({ length: lastDayOfMonth }, (_, index) => ({
    lightness: 100,
    postNumber: 0,
    date: `${year}-${month + 1}-${index + 1}`,
  }));

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
    <div>
      <label>{`총 ${currentUser.posts.length}개의 포스트를 작성하였습니다.`}</label>
      <GrassWrapper>
        {grass.map(({ date, postNumber, lightness }) => (
          <Tooltip
            key={date}
            direction='bottom'
            message={`${date}, 게시물: ${postNumber}`}
            hasArrow
            type='hover'>
            <GrassItem $lightness={lightness} />
          </Tooltip>
        ))}
      </GrassWrapper>
    </div>
  );
};

export default GrassTable;
