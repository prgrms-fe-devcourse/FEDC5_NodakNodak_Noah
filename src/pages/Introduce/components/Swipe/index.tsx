import { Navigation, Pagination } from 'swiper/modules';
import {
  StyledSwiper,
  StyledSwiperSlide,
} from '@/pages/Introduce/components/Swipe/style';
import theme from '@/styles/theme';

const Swipe = () => {
  return (
    <StyledSwiper
      slidesPerView={1}
      spaceBetween={30}
      loop
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation]}>
      {[0, 1, 2, 3, 4].map((index) => (
        <StyledSwiperSlide key={index}>
          <img
            src={`/${theme.isDark ? 'SlideD' : 'SlideL'}${index}.webp`}
            alt={`Slide ${index}`}
          />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default Swipe;
