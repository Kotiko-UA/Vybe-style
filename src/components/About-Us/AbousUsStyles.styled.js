import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 75px;
  padding-bottom: 53px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 70px;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 93px;
    padding-bottom: 85px;
  }
  @media screen and (min-width: 1920px) {
    padding-top: 145px;
    padding-bottom: 100px;
  }
`;
export const Container = styled.div`
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1368px) {
    max-width: 1368px;
    padding-left: 60px;
    padding-right: 204px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    padding-left: 120px;
    padding-right: 195px;
  }
`;

export const AbousUsTitle = styled.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: 1.18;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    line-height: 1.2;
    letter-spacing: 3.2px;
  }
  @media screen and (min-width: 1368px) {
    font-size: 35px;
    letter-spacing: 3.2px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 60px;
    letter-spacing: 4.8px;
  }
`;

export const AboutUsContainerFirst = styled.div`
  @media screen and (min-width: 1368px) {
    display: flex;
  }
`;

export const ContainerText = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 758px;
    display: flex;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1601px;
  }
`;

export const AboutUsContainerSecond = styled.div`
  max-width: 264px;
  @media screen and (min-width: 768px) {
    max-width: 398px;
    margin-left: 25px;
  }
  @media screen and (min-width: 1368px) {
    max-width: 338px;
    margin-left: 60px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 512px;
  }
`;

export const AboutUsDescriptionText1 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.18;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    text-align: justify;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.02px;
  }
  @media screen and (min-width: 1368px) {
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.66;
    letter-spacing: 0.48px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.6;
  }
`;

export const AboutUsDescriptionText2 = styled.p`
  font-size: 16px;
  font-weight: 100;
  line-height: 1.18;
  letter-spacing: 0.48px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    text-align: justify;
    font-size: 18px;
    font-weight: 200;
    line-height: 1.2;
    letter-spacing: -0.02px;
  }
  @media screen and (min-width: 1368px) {
    font-style: normal;
    font-size: 20px;
    line-height: 1.66;
    letter-spacing: 0.48px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.6;
    letter-spacing: 0.48px;
  }
`;

export const AboutUsDescriptionTextBoth = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.18;
  margin-top: 30px;
  letter-spacing: 0.48px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-left: 0;
    font-size: 18px;
    line-height: 1.61;
    text-align: justify;
  }
  @media screen and (min-width: 1368px) {
    margin-top: 0px;
    font-size: 20px;
    text-align: justify;
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }
`;

export const AboutUsDescriptionTextBothWeight = styled.p`
  font-size: 16px;
  font-weight: 100;
  line-height: 1.18;
  letter-spacing: 0.48px;
  @media screen and (min-width: 768px) {
    margin-left: 0;
    font-size: 18px;
    font-weight: 200;
    line-height: 1.6;
    text-align: justify;
  }
  @media screen and (min-width: 1368px) {
    font-size: 20px;
    text-align: justify;
    line-height: 1.4;
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.6;
  }
`;

export const DescriptionContainer = styled.div`
  margin-left: 88px;
  @media screen and (min-width: 768px) {
    max-width: 573px;
    margin-left: 0px;
  }
  @media screen and (min-width: 1368px) {
    max-width: 356px;
    margin-left: 60px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 524px;
    margin-left: 56px;
  }
`;
