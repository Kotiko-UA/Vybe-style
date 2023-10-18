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
          <AddressLink
            href="https://maps.app.goo.gl/WYx2kVtniSVQLyBd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            629 N. HIGH STREET COLUMBUS, OH 43215
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
        {isModalOpen && (
          <PopUp isModalOpen={isModalOpen} onCloseModal={handleModal} />
        )}
        <CopyrightWrap>
          <CopyrightSvg width="16px" height="16px" />
          <FooterText>2023</FooterText>
        </CopyrightWrap>
      </FooterContainer>
    </FooterBlock>
  );
};
