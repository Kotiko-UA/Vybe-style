import { useEffect, useContext} from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from 'components/HookLang/LanguageContext';
import { createPortal } from 'react-dom';
import { Overlay, Modal, CloseSvgBtn } from './PopUp.styled';
import { data } from './data/contacts';
import './styles.css';

const modal = document.querySelector('#teampopup');

export const PopUp = ({ isModalOpen, onCloseModal }) => {
  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
             <Modal  $modal={`${isModalOpen}`}>
          <CloseSvgBtn onClick={onCloseModal} />
          <h2 className="title">{t('modal-title')}</h2>
          <p data={currentLanguage} className="text">
            {t('modal-text')}
          </p>
          <ul className="list">
            {data.map(
              ({
                id,
                image,
                teamRole,
                teamRoleUA,
                teamNameUA,
                teamName,
                projectUrl,
              }) => (
                <li className="li-item" key={id}>
                  <a
                    className="link"
                    href={projectUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="thumb">
                      <img className="image" src={image} alt={teamName}></img>
                    </div>
                    <p className="team-role">
                      {currentLanguage === 'en' ? teamRole : teamRoleUA}
                    </p>
                    <p className="team-name">
                      {currentLanguage === 'en' ? teamName : teamNameUA}
                    </p>
                  </a>
                </li>
              )
            )}
          </ul>
        </Modal>
         </Overlay>,
    modal
  );
};
