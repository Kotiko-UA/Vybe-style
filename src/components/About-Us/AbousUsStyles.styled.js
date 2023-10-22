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
    display: flex;
    gap: 90px;
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
font-size: 40px;
font-style: normal;
font-weight: 300;
line-height: 1.2;
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    position: absolute;
  }
  @media screen and (min-width: 1368px) {
    position: static;
    flex-shrink: 0;
 font-weight: 400;

  }
  @media screen and (min-width: 1920px) {
    font-size: 60px;
    letter-spacing: 4.8px;
  }
`;


export const MainTextContainer = styled.div`
display: flex;
flex-direction: column;
gap: 64px;
  @media screen and (min-width: 768px) {
    gap: 59px;
    
  }
    @media screen and (min-width: 1368px) {
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1601px;
  }
`;

export const FirstContainer = styled.div`
width: 263px;
margin-left: auto;
display: flex;
flex-direction: column;
gap:32px;
  @media screen and (min-width: 768px) {
    width: 398px;
  }
   @media screen and (min-width: 1368px) {
    width: 320px;
    margin:0;
    gap: 120px;
  }
 
`;
export const AboutUsDescriptionText1 = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: 0.48px;
  color: ${({theme})=> theme.hiddenText};
  @media screen and (min-width: 768px) {
        font-weight: 400;
    line-height: 1.75;
     }
  @media screen and (min-width: 1368px) {

  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.6;
  }
`;

export const AboutUsDescriptionText2 = styled.p`
 color: ${({theme})=> theme.hiddenText};
font-size: 16px;
font-weight: 200;
line-height: 1,5;
letter-spacing: 0.48px;
  @media screen and (min-width: 768px) {
  line-height: 1.75;

  }
  @media screen and (min-width: 1368px) {
   
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.6;
    letter-spacing: 0.48px;
  }
`;

export const SecondContainer = styled.div`
  width: 246px;
  display: flex;
  flex-direction: column;
  gap:32px;
  @media screen and (min-width: 768px) {
    width: 573px;
    
  }
  @media screen and (min-width: 1368px) {
    width: 356px;
    
  }
  @media screen and (min-width: 1920px) {
    max-width: 524px;
   
  }
`;

export const AboutUsDescriptionTextThird = styled.p`
  color: ${({theme})=> theme.hiddenText};
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.48px;
  @media screen and (min-width: 768px) {
 line-height: 1.75;
  }
  @media screen and (min-width: 1368px) {
     }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }
`;

export const AboutUsDescriptionTextForth = styled.p`
 color: ${({theme})=> theme.hiddenText};
font-size: 16px;
font-weight: 200;
line-height: 1.5;
letter-spacing: 0.48px;
  .link-to-contactus {
    font-weight: 400;
   font-size: 16px;
line-height: 1.5;
letter-spacing: 0.48px;
    color: ${({theme})=> theme.brandColor};
  }
  @media screen and (min-width: 768px) {
  line-height: 1.75;
 .link-to-contactus {
 line-height: 1.75;
 }
  }
  @media screen and (min-width: 1368px) {
   }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.6;
  }
`;


