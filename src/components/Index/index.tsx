import { Pagination, Navigation } from 'swiper/modules';
import theme from '@/styles/theme';
import { StyledSwiper, StyledSwiperSlide } from '@/components/Index/style';

const Swipe = () => {
  return (
    <StyledSwiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}>
      {[0, 1, 2, 3, 4].map((index) => (
        <StyledSwiperSlide key={index}>
          <img
            src={`/public/${theme.isDark ? 'SlideD' : 'SlideL'}${index}.jpg`}
            alt={`Slide ${index}`}
          />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default Swipe;
