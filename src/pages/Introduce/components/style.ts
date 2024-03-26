import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@/styles/theme';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const StyledSwiper = styled(Swiper)`
  width: 80vw;
  max-width: 500px;
  aspect-ratio: 16/9;

  --swiper-pagination-color: ${theme.isDark
    ? theme.colors.primary[200]
    : theme.colors.primary[400]};
  --swiper-pagination-bullet-inactive-color: ${theme.isDark
    ? theme.colors.grayscale[200]
    : theme.colors.grayscale[400]};
  --swiper-pagination-bullet-inactive-opacity: 0.4;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-navigation-size: 28px;
  --swiper-theme-color: ${theme.isDark
    ? theme.colors.primary[200]
    : theme.colors.primary[400]};
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
