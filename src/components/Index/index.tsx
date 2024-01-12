import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import theme from '@/styles/theme';

const Swipe = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        style={{
          '--swiper-pagination-color': theme.isDark
            ? theme.colors.primary[200]
            : theme.colors.primary[400],
          '--swiper-pagination-bullet-inactive-color': theme.isDark
            ? theme.colors.grayscale[200]
            : theme.colors.grayscale[400],
          '--swiper-pagination-bullet-inactive-o pacity': '0.4',
          '--swiper-pagination-bullet-size': '8px',
          '--swiper-pagination-bullet-horizontal-gap': '4px',
          '--swiper-navigation-size': '28px',
          '--swiper-theme-color': theme.isDark
            ? theme.colors.primary[200]
            : theme.colors.primary[400],
        }}>
        <SwiperSlide>
          {theme.isDark ? (
            <img src='/public/SlideD0.jpg' />
          ) : (
            <img src='/public/SlideL0.jpg' />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {theme.isDark ? (
            <img src='/public/SlideD1.jpg' />
          ) : (
            <img src='/public/SlideL1.jpg' />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {theme.isDark ? (
            <img src='/public/SlideD2.jpg' />
          ) : (
            <img src='/public/SlideL2.jpg' />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {theme.isDark ? (
            <img src='/public/SlideD3.jpg' />
          ) : (
            <img src='/public/SlideL3.jpg' />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {theme.isDark ? (
            <img src='/public/SlideD4.jpg' />
          ) : (
            <img src='/public/SlideL4.jpg' />
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipe;
