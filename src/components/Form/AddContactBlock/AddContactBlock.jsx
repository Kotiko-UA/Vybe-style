import React from 'react';
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
  return (
    <AddContactWrap>
      <ImageWrap />
      <RightBlockWrap>
        <AboveBlockWrap>
          <Name>Klym Yevtushenko</Name>
          <SocialsLink
            href="https://www.linkedin.com/company/vibestyle/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSvg width="10px" height="10px" />
          </SocialsLink>
        </AboveBlockWrap>

        <Email href="mailto:klimevtushenko@gmail.com">
          klimevtushenko@gmail.com
        </Email>
        <Position>founder / lead designer</Position>
      </RightBlockWrap>
    </AddContactWrap>
  );
};
