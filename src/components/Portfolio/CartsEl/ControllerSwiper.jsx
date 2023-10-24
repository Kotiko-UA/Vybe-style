import { SwiperSlide, useSwiper } from 'swiper/react';
import { useContext } from 'react';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import { ReactComponent as ArrorL } from '../../../icons/arrorL.svg';
import { ReactComponent as ArrorR } from '../../../icons/arrorR.svg';
import 'swiper/css';
import {
  Buttons,
  DarkImgEl,
  NextButton,
  PrevButton,
  ProjectName,
  ProjectServises,
  ProjectYear,
  Services,
  SlideImg,
  SlideLink,
  SlideWrapper,
  SliderSecondWrap,
  SwiperEl,
} from '../Portfolio.styled';
import { Autoplay } from 'swiper/modules';

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <PrevButton aria-label="Button previous" onClick={() => swiper.slidePrev()}>
      {children}
    </PrevButton>
  );
};

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <NextButton aria-label="Button next" onClick={() => swiper.slideNext()}>
      {children}
    </NextButton>
  );
};

export const ControlingSwiper = ({ projectCarts, slideCount }) => {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <SliderSecondWrap>
      <SwiperEl
        spaceBetween={0}
        slidesPerView={slideCount}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
      >
        {projectCarts.map(
          ({
            projectName,
            projectYear,
            projectUrl,
            projectFotoUrl,
            id,
            projectServises,
            projectNameUa,
            projectServisesUa,
            projectServiseTitle,
            projectServiseTitleUa,
          }) => (
            <SwiperSlide key={id}>
              <SlideWrapper>
                <SlideLink
                  className="slide-wrap"
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <DarkImgEl />
                  <SlideImg
                    loading="lazy"
                    src={projectFotoUrl}
                    alt={projectName}
                  />
                  <ProjectName>
                    {currentLanguage === 'en' ? projectName : projectNameUa}
                  </ProjectName>
                  <ProjectYear>&#123; {projectYear} &#125;</ProjectYear>

                  <Services>
                    {currentLanguage === 'en'
                      ? projectServiseTitle
                      : projectServiseTitleUa}
                  </Services>
                  <ProjectServises>
                    {currentLanguage === 'en'
                      ? projectServises
                      : projectServisesUa}
                  </ProjectServises>
                </SlideLink>
              </SlideWrapper>
            </SwiperSlide>
          )
        )}
        <Buttons>
          <SwiperButtonPrev>
            <ArrorL />
          </SwiperButtonPrev>
          <SwiperButtonNext>
            <ArrorR />
          </SwiperButtonNext>
        </Buttons>
      </SwiperEl>
    </SliderSecondWrap>
  );
};
