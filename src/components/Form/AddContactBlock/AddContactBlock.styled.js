import { styled } from 'styled-components';
import KlymImage1x from '../images/Klym_Evtushenko_desktop_1x.jpg';
import KlymImage2x from '../images/Klym_Evtushenko_desktop_2x.jpg';
import { ReactComponent as IconLinkedin } from './icons/linkedin.svg';

export const AddContactWrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 48px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media only screen and (min-width: 1368px) {
    margin-bottom: 46px;
  }
`;

export const ImageWrap = styled.div`
  width: 104px;
  height: 104px;

  background-image: url(${KlymImage1x});

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${KlymImage2x});
  }
`;
export const RightBlockWrap = styled.div``;

export const AboveBlockWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 24px;
  margin-bottom: 31px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.33;
`;

export const SocialsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 27px;
  height: 27px;
  border: 1px solid ${({ theme }) => theme.brandColor};
  border-radius: 50%;
  background: transparent;
`;
export const LinkedinSvg = styled(IconLinkedin)`
  path {
    stroke: ${({ theme }) => theme.brandColor};
  }
`;

export const Email = styled.a`
  margin-bottom: 4px;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  color: ${({ theme }) => theme.brandColor};
`;

export const Position = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  color: ${({ theme }) => theme.colorText};
`;
