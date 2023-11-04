import { LanguageContext } from 'components/HookLang/LanguageContext';
import { useContext } from 'react';
import teamCarts from '../team-arrey';
import {
  Buttons,
  LinkedinSvg,
  SlideDiv,
  SlideImg,
  SlideImg2,
  SlideLink,
  SlideWrapper,
  SocialsLink,
  SwiperEl,
  TeamName,
  TeamRole,
} from '../Team.styled';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ReactComponent as ArrorL } from '../../../icons/arrorL.svg';
import { ReactComponent as ArrorR } from '../../../icons/arrorR.svg';
import { SwiperButtonNext, SwiperButtonPrev } from '../SwiperButtons';

export const DesktopSwiper = ({ windowWidth }) => {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <SwiperEl
      spaceBetween={8}
      slidesPerView={(windowWidth < 1920 && 3) || (windowWidth > 1919 && 4)}
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
                <SlideLink>
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

                  <SlideImg loading="lazy" src={teamFotoUrl} alt={teamName} />
                  <SlideImg2 loading="lazy" src={teamFotoUrl2} alt={teamName} />
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
                  <SlideImg loading="lazy" src={teamFotoUrl} alt={teamName} />
                  <SlideImg2 loading="lazy" src={teamFotoUrl2} alt={teamName} />
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
  );
};
