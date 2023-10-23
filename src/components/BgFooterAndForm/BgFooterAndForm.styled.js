import styled from 'styled-components';
import bgFooterMobile1x from './images/form_and_footer_background_mobile_1x.png';
import bgFooterMobile2x from './images/form_and_footer_background_mobile_2x.jpg';
import bgFooterTablet1x from './images/form_and_footer_background_tablet_1x.png';
import bgFooterTablet2x from './images/form_and_footer_background_tablet_2x.png';

export const BackgroundImage = styled.div`
  width: 100%;
  background-image: linear-gradient(267deg, #000 2.55%, rgba(0, 0, 0, 0) 80.9%),
    url(${bgFooterMobile1x});

  background-size: 516px 500px;
  background-repeat: no-repeat;
  background-position: center bottom -25px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        267deg,
        #000 2.55%,
        rgba(0, 0, 0, 0) 80.9%
      ),
      url(${bgFooterMobile2x});
  }
  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        267deg,
        #000 2.55%,
        rgba(0, 0, 0, 0) 80.9%
      ),
      url(${bgFooterTablet1x});

    background-size: 776px 574px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          267deg,
          #000 2.55%,
          rgba(0, 0, 0, 0) 80.9%
        ),
        url(${bgFooterTablet2x});
    }
  }
`;
