import {
  AnimatedRound,
  AnimationWrapper,
  Button,
  ButtonSpan,
  ButtonWraper,
  Container,
  HeroTitle,
  LogoContainer,
  LogoSvg,
  NameCompany,
  PlaySvgImg,
  PlayWrapper,
  Section,
  Slogan,
  SvgSpan,
  TextButton,
  TitleSvg,
  TitleWrapper,
} from './Hero.styled';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import { useContext } from 'react';
export const Hero = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <Section>
      <Container id="home">
        <LogoContainer>
          <LogoSvg alt="logo-company" />
          <NameCompany>VibeStyle</NameCompany>
        </LogoContainer>
        <ButtonWraper>
          <Button className="heroButton" href="#howwework">
            <SvgSpan>
              <PlayWrapper />
              <PlaySvgImg />
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
