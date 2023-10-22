import styled, { keyframes } from 'styled-components';
import { ReactComponent as ArrowRight } from '../OurClients/img/arrow-right.svg';

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
    // gap: 90px;
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
flex-grow:1;
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
    justify-content: flex-end;
    flex-grow: 1;  
    gap:56px;
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
  @media screen and (min-width: 1920px) {
    width: 512px;
    gap: 185px;
  }
 
`;
export const AboutUsDescriptionText1 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.48px;
  color: ${({ theme }) => theme.hiddenText};
  
  .main-text-one {
    color: ${({ theme }) => theme.hiddenText};
font-weight: 700;
font-size: 16px;
line-height: 1.5;
  }
  @media screen and (min-width: 768px) {
        font-weight: 400;
    line-height: 1.75;

      .main-text-one {
 line-height: 1.75;
  }

     }
  @media screen and (min-width: 1368px) {

  }
  @media screen and (min-width: 1920px) {
font-size: 24px;
line-height: 1.67;
   .main-text-one {
font-size: 24px;
font-weight: 700;
line-height: 1.67;

  }
  }
`;

export const AboutUsDescriptionText2 = styled.p`
 color: ${({theme})=> theme.hiddenText};
font-size: 16px;
font-weight: 200;
line-height: 1,5;
letter-spacing: 0.48px;

.main-text-two{
font-weight: 400;
}

  @media screen and (min-width: 768px) {
  line-height: 1.75;
font-weight: 400;

  .main-text-two{
font-weight: 700;
line-height: 1.75;
}
  }
  @media screen and (min-width: 1368px) {
    font-weight: 200;
    .main-text-two{
font-weight: 400;

}
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
line-height: 1.67;

.main-text-two{
font-size: 24px;
line-height:1.67;
}
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
    width: 512px;
    gap: 56px;
  }
`;

export const AboutUsDescriptionTextThird = styled.p`
  color: ${({theme})=> theme.hiddenText};
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.48px;

.main-text-three{
font-weight: 700;
}

  @media screen and (min-width: 768px) {
 line-height: 1.75;
 
 .main-text-three{
line-height: 1.75;
}
  }
  @media screen and (min-width: 1368px) {
  }
       @media screen and (min-width: 1920px) {
 font-size: 24px;
line-height: 1.67;
 .main-text-three{
font-size: 24px;
line-height: 1.67;
}
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
    color: ${({ theme }) => theme.brandColor};
    display: flex;
     background-image: linear-gradient(235deg, #F4F90F -1.28%, #0FF9C0 115.55%);
    -webkit-background-clip: text; 
    background-clip: text;
    transition: color  ${({ theme }) => theme.animationStyles},transform  ${({ theme }) => theme.animationStyles};
  }
    .link-to-contactus:hover {
       @media screen and (min-width: 768px) {
      color: transparent;
      transform: scale(1.2) translateX(60px);
       }
      
      @media screen and (min-width: 1368px) {
        transform: scale(1.2) translateX(30px);
   }
    @media screen and (min-width: 1920px) {
        transform: scale(1.2) translateX(45px);
   }
    }
  @media screen and (min-width: 768px) {
  line-height: 1.75;
 .link-to-contactus {
 line-height: 1.75;
 }
  }
  
  @media screen and (min-width: 1920px) {
 font-size: 24px;
line-height: 1.67;
.link-to-contactus {
font-size: 24px;
line-height: 1.67;
}
  }
`;

const ArrowContainer = styled.div`
@media screen and (max-width: 767px){
position: absolute;
left: 235px;
}
  position: relative;
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 100px;
  margin-left: 20px;
  @media screen and (min-width: 1920px) {
margin-left: 20px;

  }
`;

const ArrowSvg = styled(ArrowRight)`
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1368px) {
   }
  @media screen and (min-width: 1920px) {
width: 44px;
height: 40px;

  }
`;

const runOnSpot = keyframes`
  0% {
    left: 0;
  }
  25% {
    left: 20px;
  }
  50% {
    left: 0;
  }
  75% {
    left: -20px;
  }
  100% {
    left: 0;
  }
  `;

const AnimatedArrow = styled.div`
  position: relative;
  left: 0;
  display:flex;
  align-items: center;
  animation: ${runOnSpot} 2s linear infinite;
`;

const ArrowAnimation = () => {
  return (
    <ArrowContainer>
      <AnimatedArrow>
        <ArrowSvg />
      </AnimatedArrow>
      <AnimatedArrow>
        <ArrowSvg />
      </AnimatedArrow>
      <AnimatedArrow>
        <ArrowSvg />
      </AnimatedArrow>
    </ArrowContainer>
  );
};

export default ArrowAnimation;


