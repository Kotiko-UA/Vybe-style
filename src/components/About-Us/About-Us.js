import {
  AbousUsTitle,
  AboutUsContainerSecond,
  AboutUsDescriptionText1,
  AboutUsDescriptionText2,
  AboutUsDescriptionTextBoth,
  AboutUsDescriptionTextBothWeight,
  DescriptionContainer,
  AboutUsContainerFirst,
  ContainerText,
  Wrapper,
  Container,
} from './AbousUsStyles.styled';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container id="aboutus">
        <AboutUsContainerFirst>
          <ContainerText>
            <AbousUsTitle>{t('about-us-title')}</AbousUsTitle>
            <AboutUsContainerSecond>
              <AboutUsDescriptionText1>
                {t('about-us-text-1')}
              </AboutUsDescriptionText1>
              <br />
              <AboutUsDescriptionText2>
                {t('about-us-text-2')}
              </AboutUsDescriptionText2>
            </AboutUsContainerSecond>
          </ContainerText>

          <DescriptionContainer>
            <AboutUsDescriptionTextBoth>
              {t('about-us-text-3')}
            </AboutUsDescriptionTextBoth>
            <br />
            <AboutUsDescriptionTextBothWeight>
              {t('about-us-text-4')}
            </AboutUsDescriptionTextBothWeight>
          </DescriptionContainer>
        </AboutUsContainerFirst>
      </Container>
    </Wrapper>
  );
};
