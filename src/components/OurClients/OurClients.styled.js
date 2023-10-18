import { styled } from 'styled-components';

export const Section = styled.section`
  box-sizing: border-box;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.blackColor};
  padding-top: 121px;
  padding-bottom: 81px;
   @media screen and (min-width: 768px) {
    padding-top: 140px;
  padding-bottom: 140px;
  }
   @media screen and (min-width: 1368px) {
    padding-top: 170px;
  padding-bottom: 70px;
  }
   @media screen and (min-width: 1920px) {
    padding-top: 200px;
  padding-bottom: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1367px) {
  .uk-question-text {
      padding: 24px;
          }
}

 @media screen and (min-width: 1368px) and (max-width: 1919px) {
  .uk-question-text {
      padding: 60px 36px;
          }
  .uk-awards-block {
      padding-top: 85px;
     }
     .uk-visits-block{
      gap: 18px;
     }
     .uk-awards-5mil{
    gap: 15px;
  }
  .uk-awards-5mil-text{
    width: 300px;
  }
  .uk-awards-1mil {
    padding-right:10px;
  }
 
}

@media screen and (min-width: 1920px){
  .uk-question-text {
      padding: 82px 52px;
          }
  .uk-awards-5mil-text{
    width: 300px;
  }
  .uk-awards-5mil{
    gap: 78px;
  }
    .uk-awards-block {
       gap: 135px;
     }
}
`;

export const Container = styled.div`
  max-width: 480px;
  height: 1578px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 425px) and (max-width: 767px){
    padding-left: 40px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 999px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1368px) {
    max-width: 1368px;
    height: 1200px;
    padding-left: 60px;
    padding-right: 185px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    padding-left: 120px;
    padding-right: 196px;
    height: 1500px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colorText};
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 78px;
 
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1368px) {
    text-align: center;
  }
  @media screen and (min-width: 1920px) {
    font-size: 90px;
  }
`;

export const MainBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;

  @media screen and (min-width) {
    padding-top: 600px;
  }
`;

export const OneMilBlock = styled.div`
  box-sizing: border-box;
  width: 180px;
  height: 186px;
  border: 0.1px solid ${({ theme }) => theme.colorText};
  border-bottom: none;
  padding-top: 26px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 213px;
    height: 258px;
    border-color: ${({ theme }) => theme.borderColor};
      }

  @media screen and (min-width: 1368px) {
    position: absolute;
    top: 150px;
    width: 256px;
    height: 286px;
    padding-top: 39px;
    padding-left: 36px;
    padding-right: 75px;
    border: 1px solid ${({ theme }) => theme.borderAlphaColor};
    border: none;
    border-left: 1px solid ${({ theme }) => theme.borderAlphaColor};
    gap: 15px;
  }

  @media screen and (min-width: 1920px) {
    gap: 80px;
    width: 373px;
    height: 326px;
    padding-left: 53px;
    top: 300px;
      
  }
`;

export const Text = styled.p`
  width: 148px;
  color: ${({ theme }) => theme.borderColor};
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.9;
  letter-spacing: 0.32px;
  @media screen and (min-width: 1368px) {
    font-size: 16px;
    width: auto;
  }
`;

export const TitleH3 = styled.h3`
  color: ${({ theme }) => theme.colorText};
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    // color: ${({ theme }) => theme.borderColor};
    font-size: 64px;
    font-weight: 700;
    line-height: 1.65;
  }
  @media screen and (min-width: 1368px) {
    font-size: 72px;
    line-height: 1.48;
  }
  @media screen and (min-width: 1920px) {
    font-size: 96px;
    line-height: 1.1;
  }
`;

export const SadGirlPhoto = styled.img`
  position: absolute;
  top: 0;
  left: 184px;
  width: 150px;
  height: 186px;
  @media screen and (min-width: 768px) {
    top: -80px;
    left: 230px;
    width: 215px;
    height: 357px;
    border-radius: 3372px;
  }
  @media screen and (min-width: 1368px) {
    top: -220px;
    left: 120px;
    width: 183px;
    height: 228px;
    border-radius: 10000px;
  }

  @media screen and (min-width: 1920px) {
    top: -300px;
    left: 210px;
    width: 243px;
    height: 303px;
    border-radius: 3372px;
  }
`;

export const Block5mil = styled.div`
  box-sizing: border-box;
  width: 333px;
  height: 186px;
  padding-top: 26px;
  padding-left: 20px;
  border: 0.1px solid ${({ theme }) => theme.colorText};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    border-color: ${({ theme }) => theme.borderColor};
    width: 214px;
    height: 183px;
    margin-left: 237px;
  }
  @media screen and (min-width: 1368px) {
    width: 795px;
    height: 286px;
    padding-top: 40px;
    padding-left: 37px;
    position: absolute;
    left: 18px;
    top: 150px;
    border: 1px solid ${({ theme }) => theme.borderAlphaColor};
    border-top: none;
    border-right: none;
    gap: 42px;
  }
  @media screen and (min-width: 1368px) and (max-width: 1919px) {
    padding-right: 565px;
  }
  @media screen and (min-width: 1920px) {
    padding-top: 40px;
    gap: 107px;
    width: 746px;
    height: 326px;
    left: 134px;
    top: 300px;
  }
`;

export const PeopleOnBoard = styled.div`
  box-sizing: border-box;
  margin-left: 120px;
  width: 213px;
  height: 163px;
  padding-top: 21px;
  padding-left: 21px;
  border-right: 0.1px solid #fff;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding-top: 26px;
    position: absolute;
    left: 349px;
    top: 0;
    gap: 16px;
    border: 0.1px solid ${({ theme }) => theme.borderColor};
    height: 258px;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 40px;
    padding-left: 36px;
    left: -120px;
    top: 435px;
    width: 256px;
    height: 286px;
    gap: 40px;
    border: 1px solid ${({ theme }) => theme.borderAlphaColor};
    border-bottom: none;
  }
  @media screen and (min-width: 1920px) {
    gap: 107px;
    width: 373px;
    height: 326px;
    left: -120px;
    top: 624px;
    padding-top: 40px;
    padding-left: 53px;
    
  }
`;

export const ManWithBagPhoto = styled.img`
  position: absolute;
  width: 141px;
  height: 343px;
  left: -20px;
  top: 371px;

  @media screen and (min-width: 768px) {
    width: 213px;
    height: 278px;
    left: 0;
    top: 259px;
  }
  @media screen and (min-width: 1368px) {
    width: 215px;
    height: 414px;
    left: 645px;
    top: -30px;
  }
  @media screen and (min-width: 1920px) {
    width: 287px;
    height: 551px;
    left: 960px;
    top: -10px;
  }
`;

export const YearsBlock = styled.div`
  box-sizing: border-box;
  width: 214px;
  height: 179px;
  padding-top: 19px;
  padding-left: 21px;
  margin-left: 119px;
  border: 0.1px solid ${({ theme }) => theme.colorText};
  border-left: none;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 350px;
    top: 258px;
    height: 183px;
    width: 213px;
    padding-top: 24px;
    border: 0.1px solid ${({ theme }) => theme.borderColor};
    border-top: none;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 40px;
    padding-left: 36px;
    left: 137px;
    top: 436px;
    height: 286px;
    width: 256px;
    border: none;
    border-right: 1px solid ${({ theme }) => theme.borderAlphaColor};
    gap: 40px;
  }
  @media screen and (min-width: 1920px) {
    gap: 107px;
    left: 252px;
    top: 625px;
    height: 326px;
    width: 373px;
    padding-top: 40px;
    padding-left: 53px;
    border-left: none;
    border-top: none;
  }
`;

export const ProjectsBlock = styled.div`
  width: 227px;
  height: 186px;
  padding-top: 26px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 213px;
    margin-top: 96px;
    border: 0.1px solid ${({ theme }) => theme.borderColor};
    padding-left: 20px;
    border-top: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1367px) {
    border-bottom: none;
  }
  @media screen and (min-width: 1368px) {
    position: absolute;
    top: 395px;
    left: 511px;
    width: 265px;
    height: 272px;
    margin-top: 55px;
    padding-left: 36px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.borderAlphaColor};
    gap: 40px;
  }

  @media screen and (min-width: 1920px) {
    gap: 107px;
    top: 625px;
    left: 743px;
    width: 373px;
    height: 326px;
    margin-top: 0;
    padding-top: 41px;
    padding-left: 53px;
  }
`;
export const GirlInStylePhoto = styled.img`
  position: absolute;
  top: 713px;
  left: 207px;
  width: 148px;
  height: 186px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1368px) {
    display: block;
    width: 179px;
    height: 300px;
    top: -30px;
    left: 880px;
  }
  @media screen and (min-width: 1920px) {
    left: 1365px;
    top: -10px;
    width: 242px;
    height: 405px;
  }
`;

export const AwardsBlock = styled.div`
  box-sizing: border-box;
  width: 212px;
  height: 187px;
  padding-top: 21px;
  padding-left: 21px;
  border: 0.1px solid ${({ theme }) => theme.colorText};
  border-left: none;
  margin-left: 143px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    height: 242px;
    width: 213px;
    position: absolute;
    left: 326px;
    top: 441px;
    border: 0.1px solid ${({ theme }) => theme.borderColor};
    border-top: none;
    gap: 54px;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 40px;
    padding-left: 36px;
    height: 325px;
    width: 256px;
    left: 113px;
    top: 721px;
    border: 1px solid ${({ theme }) => theme.borderAlphaColor};
    border-left: none;
    border-bottom: none;
    gap: 80px;
  }
  @media screen and (min-width: 1920px) {
    gap: 107px;
    height: 326px;
    width: 373px;
    left: 228px;
    top: 950px;
    padding-top: 40px;
    padding-left: 53px;
  }
`;

export const VisitsBlock = styled.div`
  box-sizing: border-box;
  width: 212px;
  height: 187px;
  padding-top: 21px;
  padding-left: 21px;
  margin-left: 143px;
  border-right: 0.1px solid #fff;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 213px;
    position: absolute;
    left: 326px;
    top: 683px;
    border: 0.1px solid ${({ theme }) => theme.borderColor};
    border-top: none;
  }
  @media screen and (min-width: 1368px) {
    width: 256px;
    height: 326px;
    left: 369px;
    top: 694px;
    border: 1px solid ${({ theme }) => theme.borderAlphaColor};
    border: none;
    padding-top: 51px;
    padding-left: 36px;
    padding-right: 36px;
    @media screen and (min-width: 1368px) and (max-width: 1919px) {
      gap: 40px;
    ${Text} {
      width: 147px;
    }
    }
    
  }
  @media screen and (min-width: 1920px) {
    gap: 75px;
    width: 373px;
    height: 326px;
    left: 601px;
    top: 950px;
    padding-top: 40px;
    padding-left: 53px;
  }
`;

export const GirlWithWordsPhoto = styled.img`
  position: absolute;
  left: -20px;
  top: 900px;
  width: 163px;
  height: 372px;

  @media screen and (min-width: 768px) {
    width: 214px;
    height: 429px;
    left: 238px;
    top: 441px;
  }
  @media screen and (min-width: 1368px) {
    width: 296px;
    height: 395px;
    left: 750px;
    top: 648px;
  }
  @media screen and (min-width: 1920px) {
    width: 483px;
    height: 643px;
    left: 1117px;
    top: 624px;
  }
`;

export const QuestionText = styled.p`
  padding: 49px 42px 50px;
  width: 375px;
  border: 0.1px solid ${({ theme }) => theme.colorText};
  position: absolute;
  left: -20px;
  background-color: ${({ theme }) => theme.blackColor};
  color: ${({ theme }) => theme.borderColor};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  line-height: 1.21;
  letter-spacing: 0.32px;

  @media screen and (min-width: 768px) {
    border-color: ${({ theme }) => theme.borderColor};
    width: 213px;
    padding: 35.5px 27px;
    margin-left: 20px;
    text-align: left;
  }
  @media screen and (min-width: 1368px) {
    width: 256px;
    color: ${({ theme }) => theme.colorText};
    font-family: Inter;
    font-size: 24px;
    line-height: 1.69;
    padding: 82px 36px;
    margin-left: 20px;
    top: 721px;
    border: 1px solid ${({ theme }) => theme.borderAlphaColor};
    border-bottom: none;
  }

  @media screen and (min-width: 1920px) {
    width: 373px;
    padding: 93px 50px 111px 53px;
    margin-left: 0;
    top: 950px;
    left: 0;

    font-size: 32px;
    font-weight: 300;
    line-height: 1.25;
  }
`;
