import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from 'react';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  ProjectName,
  ProjectServises,
  ProjectYear,
  Services,
  SlideImg,
  SlideLink,
  SlideWrapper,
  SliderFirstWrap,
} from './Portfolio.styled';

export const AutomaticSwiper = ({ projectCarts }) => {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <SliderFirstWrap>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
                  rel="noreferrer noopener nofollow"
                >
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
      </Swiper>
    </SliderFirstWrap>
  );
};
