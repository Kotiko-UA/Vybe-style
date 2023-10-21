import { useState, useEffect } from 'react';
import { PopUp } from './PopUp/PopUp';
import {
  FooterBlock,
  FooterContainer,
  AddressLink,
  FooterText,
  SocialsLink,
  SocialsList,
  Address,
  LinkedinSvg,
  InstagramSvg,
  CopyrightSvg,
  CopyrightWrap,
  CreatedByLink,
  DribbleSvg,
  BehanceSvg,
  UaFlagSvg,
} from './Footer.styled';

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isModalOpen]);

  return (
    <FooterBlock>
      <FooterContainer>
        <Address>
          <UaFlagSvg width="29px" height="18px" />
          <AddressLink
            href="https://maps.app.goo.gl/6haXRa5Jv8jBtiwJ9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kyiv, Ukraine Regeneratorna 4 Str. 16
          </AddressLink>
        </Address>
        <SocialsList>
          <li>
            <SocialsLink
              href="https://www.linkedin.com/company/vibestyle/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinSvg width="19px" height="18px" />
            </SocialsLink>
          </li>
          <li>
            <SocialsLink
              href="https://dribbble.com/klimevtushenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DribbleSvg width="24px" height="24px" />
            </SocialsLink>
          </li>
          <li>
            <SocialsLink
              href="https://www.instagram.com/uxui_evtushenkoklim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramSvg width="19px" height="19px" />
            </SocialsLink>
          </li>
          <li>
            <SocialsLink
              href="https://www.behance.net/klymevtushenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BehanceSvg width="23px" height="15px" />
            </SocialsLink>
          </li>
        </SocialsList>
        <CreatedByLink onClick={handleModal}>
          created <br /> by GoIT students
        </CreatedByLink>
        
       <PopUp isModalOpen={isModalOpen} onCloseModal={handleModal} />
         
        <CopyrightWrap>
          <CopyrightSvg width="16px" height="16px" />
          <FooterText>2023</FooterText>
        </CopyrightWrap>
      </FooterContainer>
    </FooterBlock>
  );
};
