import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
  Logo,
  NameCompany,
  BurgerMenuBtn,
  ContainerMobileMenu,
  Menu,
  MenuList,
  MenuItem,
  ContainerMenu,
  SelectContainer,
  CloseBtnMenu,
  ArrowDropDown,
  SelectLang,
  SelectLangOption,
  BackgroundMenuOpen,
} from './aside.styled';
import LogoVibeStyle from './images/logo-vibe-style.png';
import BurgerMenu from './images/burger-menu.png';
import { useTranslation } from 'react-i18next';
import { menuList } from './menu-list';
import dropDownArrow from './images/chevron-down.png';

export const Aside = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, currentLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia('(min-width: 1368px)');
    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen);
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
      };
    } else {
      mediaWatcher.addEventListener(updateIsNarrowScreen);
      return function cleanup() {
        mediaWatcher.removeEventListener(updateIsNarrowScreen);
      };
    }
  }, [isNarrowScreen]);

  useEffect(() => {
    if (isNarrowScreen) {
      enableBodyScroll(document.body);
      setIsOpen(false);
      return;
    }

    if (!isNarrowScreen && isOpen) {
      disableBodyScroll(document.body);
    }

    return () => {
      enableBodyScroll(document.body);
    };
  }, [isNarrowScreen, isOpen]);

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  const toggleMenuBtn = () => {
    setIsOpen(open => !open);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <>
      <BurgerMenuBtn src={BurgerMenu} alt="menu" onClick={toggleMenuBtn} />
      <BackgroundMenuOpen $open={`${isOpen}`} onClick={handleBackdropClick}>
        <ContainerMobileMenu
          className={`main-menu ${isOpen ? 'open-menu' : ''}`}
        >
          <Logo src={LogoVibeStyle} alt="logo-company" />
          <NameCompany>VibeStyle</NameCompany>
          <Menu>
            <SelectContainer>
              <SelectLang
                value={i18n.language}
                onChange={e => changeLanguage(e.target.value)}
              >
                <SelectLangOption value="en">English</SelectLangOption>
                <SelectLangOption value="ua">Українська</SelectLangOption>
              </SelectLang>
              <ArrowDropDown src={dropDownArrow} alt="arrow" />
            </SelectContainer>

            <ContainerMenu className="container-menu-ua">
              <MenuList>
                {menuList.map(({ nameEn, nameUa, link }) => {
                  return (
                    <MenuItem
                      className="menu-items"
                      onClick={() => {
                        enableBodyScroll(document.body);
                        closeMenu();
                      }}
                    >
                      <a href={link}>
                        {currentLanguage === 'en' ? nameEn : nameUa}
                      </a>
                    </MenuItem>
                  );
                })}
              </MenuList>
              <CloseBtnMenu onClick={toggleMenuBtn} />
            </ContainerMenu>
          </Menu>
        </ContainerMobileMenu>
      </BackgroundMenuOpen>
    </>
  );
};
