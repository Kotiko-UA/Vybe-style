import {
  AnimatedRound,
  AnimationWrapper,
  Button,
  ButtonSpan,
  ButtonWraper,
  Container,
  HeroTitle,
  Logo,
  NameCompany,
  PlayWrapper,
  Section,
  Slogan,
  SvgSpan,
  TextButton,
  TitleSvg,
  TitleWrapper,
} from './Hero.styled';
import LogoVibeStyle from './img/logo-vibe-style.png';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PlaySvg } from '../../icons/play-svg.svg';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import { useContext } from 'react';
export const Hero = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <Section id="home">
      <Container>
        <Logo src={LogoVibeStyle} alt="logo-company" />
        <NameCompany>VibeStyle</NameCompany>
        <ButtonWraper>
          <Button>
            <SvgSpan>
              <PlayWrapper />
              <PlaySvg />
            </SvgSpan>
            <ButtonSpan>{t('hero-play-button')}</ButtonSpan>
          </Button>
          <TextButton className={currentLanguage === 'en' ? '' : 'hero-ua'}>
            {t('hero-digital-agency')}
          </TextButton>
        </ButtonWraper>
        <TitleWrapper>
          <HeroTitle>VibeStyle</HeroTitle>
          <TitleSvg />
        </TitleWrapper>
        <AnimationWrapper>
          <Slogan className={currentLanguage === 'en' ? '' : 'hero-ua'}>
            {t('hero-we-craft')}
          </Slogan>
          <AnimatedRound />
        </AnimationWrapper>
      </Container>
    </Section>
  );
};
