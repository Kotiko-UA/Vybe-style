import styled from 'styled-components';
import bgMobile from '../img/back.png';
import bgMobile2x from '../img/back2x.png';
import newBgPhoto from '../img/newBGphoto.png';
import newBgPhoto2x from '../img/newBGphoto2x.png';
import { ReactComponent as Ellipse } from '../img/ellipse.svg';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.blackColor};
  margin: 0 auto;

  @media screen and (min-width: 1920px) {
    padding-top: 218px;
    padding-bottom: 218px;
  }
`;
export const SvgEllipse = styled(Ellipse)`
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    width: 295px;
    height: 295px;
  }
  @media screen and (min-width: 1368px) {
    width: 551px;
    height: 551px;
  }
  @media screen and (min-width: 1920px) {
    width: 867px;
    height: 867px;
  }
`;
export const Container = styled.div`
  height: 302px;
  
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
 @media screen and (max-width: 380px) {
  ${SvgEllipse}:nth-child(4) {
    margin-left: -96px;
  }
  ${SvgEllipse}:nth-child(n + 5) {
    margin-left: -40px;
  }
 }
  @media screen and (max-width: 767px) {
    background-image: linear-gradient(
        180deg,
        #000 0%,
        rgba(0, 0, 0, 0) 349.05%,
        #000 100%
      ),
      url(${bgMobile});
    background-repeat: no-repeat;
    background-size: 330px 325px;
    background-position: left -15px bottom -20px;
    @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        #000 0%,
        rgba(0, 0, 0, 0) 349.05%,
        #000 100%
      ),url(${bgMobile2x});
 
}
  }
  @media screen and (min-width: 381px) and (max-width: 767px){
     ${SvgEllipse}:nth-child(4) {
    margin-left: -46px;
  }
  ${SvgEllipse}:nth-child(n + 5) {
    margin-left: -40px;
  }
  }

 
  @media screen and (min-width: 768px) {
    height: 412px;
    background-image: url(${newBgPhoto}), url(${newBgPhoto});
    background-size: 218px 158px;
    background-repeat: no-repeat;
    background-position: left 30px bottom 120px, right 30px top 115px;
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${newBgPhoto2x}), url(${newBgPhoto2x});
    }
    @media screen and (min-width: 768px) and (max-width: 1367px) {
      ${SvgEllipse}:nth-child(4) {
        background-image: linear-gradient(
            90deg,
            #000 0%,
            rgba(0, 0, 0, 0) 49.05%,
            #000 100%
          ),
          linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 49.05%, #000 100%);
        margin-left: -40px;
      }
      ${SvgEllipse}:nth-child(n + 5) {
        margin-left: -60px;
      }
    }
  }
  @media screen and (min-width: 1368px) {
    padding-top: 140px;
    padding-bottom: 170px;
    height: auto;
    background-size: 390px 280px;
    background-position: left 30px bottom 290px, right 35px bottom 323px;
    max-width: 1368px;
    ${SvgEllipse}:nth-child(4) {
      margin-left: -110px;
      background-image: linear-gradient(
          180deg,
          #000 0%,
          rgba(0, 0, 0, 0) 49.05%,
          #000 100%
        ),
        linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 49.05%, #000 100%);
    }
    ${SvgEllipse}:nth-child(n + 5) {
      margin-left: -80px;
    }
    ${SvgEllipse}:nth-child(6) {
      background-image: linear-gradient(
          180deg,
          #000 0%,
          rgba(0, 0, 0, 0) 49.05%,
          #000 100%
        ),
        linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 49.05%, #000 100%);
    }
  }
  @media screen and (min-width: 1920px) {
    height: 861px;
    padding-top: 0;
    padding-bottom: 0;
    background-size: 646px 460px;
    background-position: left -50px bottom 173px, right -120px bottom 223px;
    max-width: 1920px;
    ${SvgEllipse}:nth-child(4) {
      margin-left: -200px;
      background-image: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 47.46%, #000 100%);
    }
    ${SvgEllipse}:nth-child(n + 5) {
    //   background-image: linear-gradient(
    //       90deg,
    //       #000 0%,
    //       rgba(0, 0, 0, 0) 49.05%,
    //       #000 100%
    //     ),
    //     linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 49.05%, #000 100%);
   margin-left: -160px;
    }
    ${SvgEllipse}:nth-child(6) {

 background-image: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 47.46%, #000 100%);
  }
`;

export const Transparency = styled.p`
position: absolute;
  top: -45px;
  left: 30px;
 color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.13;
  letter-spacing: -1.5px;
  text-transform: lowercase;
  animation: ${props =>
    props.$isInView === 'true' ? '3s top infinite linear' : ''};
   @keyframes top {
    0% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(95px);
    }
    24% {
      transform: translateY(85px);
    }
    86% {
      transform: translateY(85px);
    }
    90% {
      transform: translateY(95px);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @media screen and (min-width: 768px) {
    top: -95px;
    left: 85px;
    font-size: 48px;
    @keyframes top {
    0% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(205px);
    }
    24% {
      transform: translateY(187px);
    }
    86% {
      transform: translateY(187px);
    }
    90% {
      transform: translateY(205px);
    }
    100% {
      transform: translateY(0%);
    }
  }
  }
 @media screen and (min-width: 1368px) {
    top: -110px;
    left: 90px;
    font-size: 90px;
    @keyframes top {
    0% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(340px);
    }
    24% {
      transform: translateY(320px);
    }
    86% {
      transform: translateY(320px);
    }
    90% {
      transform: translateY(340px);
    }
    100% {
      transform: translateY(0%);
    }
  }
  }
  @media screen and (min-width: 1920px) {
     font-size: 144px;
     letter-spacing: -6px;
     top: -200px;
    left: 100px;
    @keyframes top {
    0% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(360px);
    }
    24% {
      transform: translateY(300px);
    }
    86% {
      transform: translateY(300px);
    }
    90% {
      transform: translateY(360px);
    }
    100% {
      transform: translateY(0%);
    }
     }
`;

export const Quality = styled.p`
position: absolute;
  right: -100px;
  top: 90px;
color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.13;
  letter-spacing: -1.5px;
  text-transform: lowercase;
  animation: ${props =>
    props.$isInView === 'true' ? '3s left infinite linear' : ''};
    @keyframes left {
    0% {
      transform: translateX(0);
    }

    30% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-280px);
    }
    44% {
      transform: translateX(-260px);
    }
    86% {
      transform: translateX(-260px);
    }
    90% {
      transform: translateX(-280px);
    }
    100% {
      transform: translateX(0);
    }
  }
     @media screen and (min-width: 480px){
    @keyframes left {
    0% {
      transform: translateX(0);
    }

    30% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-325px);
    }
    44% {
      transform: translateX(-311px);
    }
    86% {
      transform: translateX(-311px);
    }
    90% {
      transform: translateX(-325px);
    }
    100% {
      transform: translateX(0);
    }
  }
     }

  @media screen and (min-width: 768px){
    right: -170px;
    top: 158px;
    font-size: 48px;
    @keyframes left {
    0% {
      transform: translateX(0);
    }
    30% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-550px);
    }
    44% {
      transform: translateX(-536px);
    }
    86% {
      transform: translateX(-536px);
    }
    90% {
      transform: translateX(-550px);
    }
    100% {
      transform: translateX(0);
    }
}
@media screen and (min-width: 1368px) {
    right: -270px;
    top: 320px;
    font-size: 90px;
    
    @keyframes left {
    0% {
      transform: translateX(0);
    }
    30% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-980px);
    }
    44% {
      transform: translateX(-945px);
    }
    86% {
      transform: translateX(-945px);
    }
    90% {
      transform: translateX(-980px);
    }
    100% {
      transform: translateX(0);
    }
  }
  }
  @media screen and (min-width: 1920px) {
     font-size: 144px;
     letter-spacing: -6px;
     right: -440px;
    top: 280px;
    @keyframes left {
    0% {
      transform: translateX(0);
    }

    30% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-1400px);
    }
    44% {
      transform: translateX(-1340px);
    }
    86% {
      transform: translateX(-1340px);
    }
    90% {
      transform: translateX(-1400px);
    }
    100% {
      transform: translateX(0%);
    }
     }
`;

export const Satisfaction = styled.p`
  position: absolute;
  bottom: -45px;
  left: 144px;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.13;
  letter-spacing: -1.5px;
  text-transform: lowercase;
  animation: ${props =>
    props.$isInView === 'true' ? '3s bottom infinite linear' : ''};
  @keyframes bottom {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(-170px);
    }
    64% {
      transform: translateY(-160px);
    }
    86% {
      transform: translateY(-160px);
    }
    90% {
      transform: translateY(-170px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @media screen and (min-width: 768px) {
    bottom: -55px;
    left: 238px;
    font-size: 48px;
    @keyframes bottom {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(0);
      }
      60% {
        transform: translateY(-205px);
      }
      64% {
        transform: translateY(-185px);
      }
      86% {
        transform: translateY(-185px);
      }
      90% {
        transform: translateY(-205px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  @media screen and (min-width: 1368px) {
    bottom: -100px;
    left: 390px;
    font-size: 90px;
    @keyframes bottom {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(0);
      }
      60% {
        transform: translateY(-460px);
      }
      64% {
        transform: translateY(-420px);
      }
      86% {
        transform: translateY(-420px);
      }
      90% {
        transform: translateY(-460px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  @media screen and (min-width: 1920px) {
    bottom: -275px;
    left: 550px;
    font-size: 144px;
    letter-spacing: -6px;
    @keyframes bottom {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(0);
      }
      60% {
        transform: translateY(-520px);
      }
      64% {
        transform: translateY(-460px);
      }
      86% {
        transform: translateY(-460px);
      }
      90% {
        transform: translateY(-520px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;
