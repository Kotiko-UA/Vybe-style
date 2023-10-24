import { styled } from 'styled-components';

export const LiItem = styled.li`
padding-left: 20px;
position: relative;
display: flex;
flex-direction:column;
width:100%;
max-width: 480px;
transition: width 400ms cubic-bezier(0.4, 0, 0.2, 1);
@media screen and (max-width: 767px) {
height: calc(100% / 4);
&::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 background: url(${props => props.$mobilephoto});


//  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), 
//  linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%),
//      url(${props => props.$mobilephoto}),
//     ${({ theme }) => theme.brandColor};
//     background-blend-mode: luminosity;
    background-repeat:no-repeat;
    background-size: cover;
  z-index: 0;
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
 &:hover::after,
   &:focus::after {
    opacity: 1;
  }

}
@media screen and (min-width: 768px){
 width: calc(100% / 4);
 padding-top: 39px;
 padding-left: 22px;
 padding-right: 12px;
}
@media screen and (min-width: 768px) and (max-width: 1367px){
  &::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
   background: url(${props => props.$tabletphoto});
   
//  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), 
//  linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%),
//      url(${props => props.$tabletphoto}),
//     ${({ theme }) => theme.brandColor};
//     background-blend-mode: luminosity;
    background-repeat:no-repeat;
    background-size: cover;
    border-right: 0.5px solid ${({ theme }) => theme.colorText};
  z-index: 0;
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
}

@media screen and (min-width: 768px) {
 
  padding-right: 30px;
 
     &:nth-child(n + 2)::before {
        content: '';
        background-color: ${({ theme }) => theme.colorText};
        position:absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 0.5px;
            };
            &::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:     url(${props => props.$desktopphoto});
   
//  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), 
//  linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%),
//      url(${props => props.$desktopphoto}),
//     ${({ theme }) => theme.brandColor};
//     background-blend-mode: luminosity;
    background-repeat:no-repeat;
    background-size: cover;
      z-index: 0;
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
 }

  @media screen and (min-width: 1368px) {
    padding-right: 15px;

    &:nth-child(n + 2)::before {
      content: '';
      background-color: ${({ theme }) => theme.colorText};
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 0.5px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
       background: url(${props => props.$desktopphoto});
   
//       background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%), 
//  linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%),
//         url(${props => props.$desktopphoto}),  ${({ theme }) => theme.brandColor};
//       background-blend-mode: luminosity;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 0;
      opacity: 0;
      transition: opacity ${({ theme }) => theme.animationStyles};
    }
  }
  @media screen and (min-width: 1920px) {
    width: calc(100% / 4);
    padding-top: 77px;
    padding-left: 44px;
    padding-right: 42px;
    flex-shrink: 0;
  }

  &:hover::after,
   &:focus::after {
    opacity: 1;
  }

  &:hover {
    flex-shrink: 0;
    height: 315px;

    @media screen and (min-width: 768px) {
      flex-grow: 1;
      width: 242px;
      height: 475px;
    }
    @media screen and (min-width: 1368px) {
      &:not(:first-child) {
        border-left: 1px solid #fff;
      }
      width: 295px;
      height: 656px;
    }
    @media screen and (min-width: 1920px) {
      width: 484px;
      height: 950px;
    }
  }
  &:focus {
    flex-shrink: 0;
    height: 315px;

    @media screen and (min-width: 768px) {
      flex-grow: 1;
      width: 242px;
      height: 475px;
    }
    @media screen and (min-width: 1368px) {
      &:not(:first-child) {
        border-left: 1px solid #fff;
      }
      width: 295px;
      height: 656px;
    }
    @media screen and (min-width: 1920px) {
      width: 484px;
      height: 950px;
    }
  }
  @media screen and (min-width: 768px) {
    height: auto;
  }
}
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.colorText};
  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 2.05;
  letter-spacing: -2.532px;
  text-transform: uppercase;
  z-index: 2;
   ${LiItem}:hover &,
  ${LiItem}:focus & {
    font-size: 80px;
    line-height: 1.05;
    letter-spacing: -4.285px;
    @media screen and (min-width: 768px) {
      line-height: 1.5;
      font-size: 102px;
    }
    @media screen and (min-width: 1368px) {
      font-size: 124px;
      font-weight: 600;
      line-height: 1.12;
      letter-spacing: -5.064px;
    }
    @media screen and (min-width: 1920px) {
      line-height: 2.05;
    }
  }
  @media screen and (min-width: 1368px) {
    font-size: 92px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -5.064px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 120px;
    line-height: 2.05;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colorText};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.736px;
  text-transform: uppercase;
  z-index: 2;
  ${LiItem}:hover &,
  ${LiItem}:focus &{
    font-size: 32px;
    line-height: 1;
    letter-spacing: -1.17px;
    @media screen and (min-width: 768px) {
      margin-top: 50px;
    }
    @media screen and (min-width: 1368px) {
      font-size: ${props => (props.$lang === 'en' ? '52px' : '44px')};
      line-height: 1.3;
      letter-spacing: -2.34px;
      margin-top: 60px;
    }
    @media screen and (min-width: 1920px) {
      font-size: ${props => (props.$lang === 'en' ? '76px' : '68px')};
      line-height: 1.5;
      letter-spacing: -2.34px;
      margin-top: 0px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 78px;
  }
  @media screen and (min-width: 1368px) {
    font-size: 32px;
    line-height: 1.13;
    letter-spacing: -1.471px;
    margin-top: 120px;
  }
  @media screen and (min-width: 1920px) {
    margin-top: 60px;
    font-size: 48px;
  }
`;

export const HiddenText = styled.p`
  color: ${({ theme }) => theme.hiddenText};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.67;
  letter-spacing: 0.24px;
  max-width: 290px;
  margin-top: 40px;
  opacity: 0;
  z-index: 2;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  ${LiItem}:hover &,
  ${LiItem}:focus & {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    max-width: 199px;
  }
  @media screen and (min-width: 1368px) {
    max-width: 243px;
    color: ${({ theme }) => theme.hiddenText};
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0px;
    margin-top: 93px;
    &${LiItem}:nth-child(2) {
      margin-top: 0px;
    }
  }
  @media screen and (min-width: 1920px) {
    margin-top: 132px;
    font-size: 24px;
    font-weight: 200;
    line-height: 1.67;
    max-width: 398px;
  }
`;
