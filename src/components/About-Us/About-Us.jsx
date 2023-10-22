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
                {t('about-us-text-1')}
          </AboutUsDescriptionText1>
          <AboutUsDescriptionText2>
                {t('about-us-text-2')}
              </AboutUsDescriptionText2>
        </FirstContainer>
        <SecondContainer>
          <AboutUsDescriptionTextThird>
            {t('about-us-text-3')}
          </AboutUsDescriptionTextThird>
          <AboutUsDescriptionTextForth>
            <a href='#contactus' className='link-to-contactus'>{t('about-us-text-5')}</a>
            <p>{t('about-us-text-4')}</p>
          </AboutUsDescriptionTextForth>
        </SecondContainer>
        </MainTextContainer>
        
      </Container>
    </Wrapper>
  );
};
