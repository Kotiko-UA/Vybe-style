import {
  AbousUsTitle,
    AboutUsDescriptionText1,
  AboutUsDescriptionText2,
  AboutUsDescriptionTextThird,
  AboutUsDescriptionTextForth,
  SecondContainer,
  FirstContainer,
  MainTextContainer,
  Wrapper,
  Container,
} from './AbousUsStyles.styled';
import ArrowAnimation from './AbousUsStyles.styled';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container id="aboutus">
        <AbousUsTitle>{t('about-us-title')}</AbousUsTitle>
        <MainTextContainer>
          <FirstContainer>
          <AboutUsDescriptionText1>
                {t('about-us-text-1')}<span className="main-text-one">{t('about-us-text-1-2')}</span>{t('about-us-text-1-3')}
          </AboutUsDescriptionText1>
          <AboutUsDescriptionText2>
                {t('about-us-text-2')}<span className="main-text-two">{t('about-us-text-2-2')}</span>
              </AboutUsDescriptionText2>
        </FirstContainer>
        <SecondContainer>
          <AboutUsDescriptionTextThird>
            {t('about-us-text-3')}<span className="main-text-three">{t('about-us-text-3-2')}</span>{t('about-us-text-3-3')}
          </AboutUsDescriptionTextThird>
          <AboutUsDescriptionTextForth>
              <a href='#contactus' className='link-to-contactus'>{t('about-us-text-5')}{ArrowAnimation()}</a>
            <span>{t('about-us-text-4')}</span>
          </AboutUsDescriptionTextForth>
        </SecondContainer>
        </MainTextContainer>
        
      </Container>
    </Wrapper>
  );
};
