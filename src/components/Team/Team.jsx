import { useContext, useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { SwiperSlide, useSwiper } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ReactComponent as ArrorL } from '../../icons/arrorL.svg';
import { ReactComponent as ArrorR } from '../../icons/arrorR.svg';

import {
  Buttons,
  Container,
  H2,
  LinkedinSvg,
  NextButton,
  PrevButton,
  SlideDiv,
  SlideImg,
  SlideImg2,
  SlideLink,
  SlideWrapper,
  SocialsLink,
  SwiperEl,
  TeamName,
  TeamRole,
  Wrapper,
} from './Team.styled';

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

export const Team = ({ teamCarts }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = throttle(200, () => {
      setWindowWidth(window.innerWidth);
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Container id="team">
        <H2>{t('team-title')}</H2>
        <SwiperEl
          spaceBetween={8}
          slidesPerView={
            (windowWidth < 768 && 1) ||
            (windowWidth < 1368 && 2) ||
            (windowWidth < 1920 && 3) ||
            (windowWidth > 1919 && 4)
          }
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {teamCarts.map(
            ({
              id,
              teamName,
              teamRole,
              teamFotoUrl,
              teamFotoUrl2,
              projectUrl,
              teamRoleUa,
              teamNameUa,
              klim,
            }) => {
              return klim ? (
                <SwiperSlide key={id}>
                  <SlideWrapper>
                    <SlideLink
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <TeamRole>
                        {currentLanguage === 'en' ? teamRole : teamRoleUa}
                      </TeamRole>
                      <TeamName>
                        {currentLanguage === 'en' ? teamName : teamNameUa}
                      </TeamName>
                      {klim && (
                        <SocialsLink
                          href="https://www.linkedin.com/company/vibestyle/about/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedinSvg width="19px" height="18px" />
                        </SocialsLink>
                      )}

                      <SlideImg
                        loading="lazy"
                        src={teamFotoUrl}
                        alt={teamName}
                      />
                      <SlideImg2
                        loading="lazy"
                        src={teamFotoUrl2}
                        alt={teamName}
                      />
                    </SlideLink>
                  </SlideWrapper>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={id}>
                  <SlideWrapper>
                    <SlideDiv>
                      <TeamRole>
                        {currentLanguage === 'en' ? teamRole : teamRoleUa}
                      </TeamRole>
                      <TeamName>
                        {currentLanguage === 'en' ? teamName : teamNameUa}
                      </TeamName>
                      <SlideImg
                        loading="lazy"
                        src={teamFotoUrl}
                        alt={teamName}
                      />
                      <SlideImg2
                        loading="lazy"
                        src={teamFotoUrl2}
                        alt={teamName}
                      />
                    </SlideDiv>
                  </SlideWrapper>
                </SwiperSlide>
              );
            }
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
      </Container>
    </Wrapper>
  );
};
