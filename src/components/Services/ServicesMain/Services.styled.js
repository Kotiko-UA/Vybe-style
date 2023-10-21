import { styled } from "styled-components";

export const Section = styled.section`
background-color: ${({ theme }) => theme.blackColor};
  color: ${({ theme }) => theme.colorText};
  margin: 0 auto;
  // padding-bottom: 106px;
`
export const Container = styled.div`
margin: 0 auto;
@media screen and (min-width: 376px) and (max-width: 767px){
  padding-left: 20px;
  padding-right: 20px;
  max-width: 480px;
    }
    @media screen and (min-width: 768px){
max-width: 768px;
    }
     @media screen and (min-width: 1368px){
max-width: 1368px;
padding-left: 60px;
padding-right: 245px;
    }
      @media screen and (min-width: 1920px){
max-width: 1920px;
padding-left: 120px;
padding-right: 195px;
    }
`
export const Title = styled.h2`
text-align: right;
color: ${({ theme }) => theme.colorText};
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 300;
line-height: 1.2;
margin-bottom: 32px;
 transition: color  ${({ theme }) => theme.animationStyles};

  &:hover {
    color: ${({ theme }) => theme.brandColor};
  }
@media screen and (min-width: 768px){
  
margin-bottom: 39px;
font-size: 40px;
letter-spacing: 3.2px;
padding-right: 39px;
}
@media screen and (min-width: 1368px){
  padding-right: 0px;
    margin-bottom: 22px;
    text-align: left;
    letter-spacing: 4.8px;
}
@media screen and (min-width: 1920px){
  margin-bottom: 10px;
  font-size: 60px;
}
`
export const List = styled.ul`

display: flex;
flex-direction: column;
height: 936px;
width: 100%;
@media screen and (min-width:768px) {
flex-direction: row;
height: 475px;
width: 748px;

}
@media screen and (min-width:1368px) {
height: 656px;
width: 1024px;

}
@media screen and (min-width:1920px) {
height: 950px;
width: 1496px;
}
`

