import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  AboveBlockWrap,
  AddContactWrap,
  Email,
  ImageWrap,
  LinkedinSvg,
  Name,
  Position,
  RightBlockWrap,
  SocialsLink,
} from './AddContactBlock.styled';

export const AddContactBlock = () => {
  const { t } = useTranslation();
  return (
    <AddContactWrap>
      <ImageWrap />
      <RightBlockWrap>
        <AboveBlockWrap>
          <Name>{t('form-klym-name')}</Name>
          <SocialsLink
            href="https://www.linkedin.com/in/klym-yevtushenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSvg width="10px" height="10px" />
          </SocialsLink>
        </AboveBlockWrap>

        <Email href="mailto:klimevtushenko@gmail.com">
          klimevtushenko@gmail.com
        </Email>
        <Position>{t('form-klym-position')}</Position>
      </RightBlockWrap>
    </AddContactWrap>
  );
};
