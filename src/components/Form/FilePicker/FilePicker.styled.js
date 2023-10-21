import styled from 'styled-components';
import { ReactComponent as IconClip } from './icons/clip.svg';

export const FilePickerInput = styled.input`
  display: none;
`;

export const ClipLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: auto;

  gap: 16px;
`;

export const ClipSvg = styled(IconClip)`
  width: 20px;
  height: 20px;
`;

export const IconEWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.greyColor};

  transition: all ${({ theme }) => theme.animationStyles};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.brandColor};

    & ${ClipSvg} {
      stroke: ${({ theme }) => theme.blackColor};
    }
  }
`;

export const LabelText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${({ theme }) => theme.lightGreyColor};

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.14px;
  }
`;
