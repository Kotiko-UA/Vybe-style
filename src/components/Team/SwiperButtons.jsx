import { useSwiper } from 'swiper/react';
import { NextButton, PrevButton } from './Team.styled';

export const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <PrevButton aria-label="Button previous" onClick={() => swiper.slidePrev()}>
      {children}
    </PrevButton>
  );
};

export const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <NextButton aria-label="Button next" onClick={() => swiper.slideNext()}>
      {children}
    </NextButton>
  );
};
