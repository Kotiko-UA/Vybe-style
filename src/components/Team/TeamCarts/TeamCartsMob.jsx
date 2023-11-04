import { LanguageContext } from 'components/HookLang/LanguageContext';
import { useContext, useState } from 'react';
import teamCarts from '../team-arrey';
import {
  ButtonOpenPhoto,
  Buttons,
  LinkedinSvg,
  SlideImg2,
  SlideImgMob,
  SlideMobWrap,
  SlideWrapperMob,
  SocialsLink,
  SvgCloseIcon,
  SvgPlusIcon,
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

export const MobSwiper = ({ windowWidth }) => {
  const [isNextPhotoShow, setNextPhotoShow] = useState(false);
  const { currentLanguage } = useContext(LanguageContext);
  const onClickButton = id => {
    const currentCart = document.querySelector(`.team-photo-${id}`);
    currentCart.classList.toggle('active-cart');
    setNextPhotoShow(!isNextPhotoShow);
  };
  return (
    <SwiperEl
      spaceBetween={8}
      slidesPerView={(windowWidth < 768 && 1) || (windowWidth < 1368 && 2)}
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
          teamRoleUa,
          teamNameUa,
          klim,
        }) => {
          return (
            <SwiperSlide key={id}>
              <SlideWrapperMob>
                <SlideMobWrap className={`team-photo-${id}`}>
                  <TeamRole>
                    {currentLanguage === 'en' ? teamRole : teamRoleUa}
                  </TeamRole>
                  <TeamName>
                    {currentLanguage === 'en' ? teamName : teamNameUa}
                  </TeamName>
                  <ButtonOpenPhoto
                    type="button"
                    onClick={() => onClickButton(id)}
                  >
                    <SvgPlusIcon />
                    <SvgCloseIcon />
                  </ButtonOpenPhoto>
                  {klim && (
                    <SocialsLink
                      href="https://www.linkedin.com/company/vibestyle/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinSvg width="19px" height="18px" />
                    </SocialsLink>
                  )}

                  <SlideImgMob
                    loading="lazy"
                    src={teamFotoUrl}
                    alt={teamName}
                  />
                  <SlideImg2 loading="lazy" src={teamFotoUrl2} alt={teamName} />
                </SlideMobWrap>
              </SlideWrapperMob>
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
