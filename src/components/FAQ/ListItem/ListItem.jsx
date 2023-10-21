import { useState, useContext, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import {
  LiItem,
  Number,
  ContainerBlock,
  InfoBlock,
  Text,
  Button,
  HiddenText,
  PlusSvg,
  CloseSvg,
} from './ListItem.styled';
import '../../../transition.css';

export const ListItem = ({item: { id, text, textUa, hiddenText, hiddenTextUa }}) => {
  const [isTextShown, setIsTextShown] = useState(false);
  const { currentLanguage } = useContext(LanguageContext);
 const nodeRef = useRef(null);

  return (
         <LiItem $data={`${isTextShown}`}>
      <Number>{id}</Number>
      <ContainerBlock>
        <InfoBlock onClick={() => setIsTextShown(!isTextShown)}>
          <Text $isTextShown={`${isTextShown}`}>
            {currentLanguage === 'en' ? text : textUa}
          </Text>
          <Button
            type="button"
            onClick={() => setIsTextShown(!isTextShown)}
            $data={`${!isTextShown}`}
          >
            {!isTextShown ? (
              <PlusSvg $data={`${isTextShown}`} />
            ) : (
              <CloseSvg $data={`${isTextShown}`} />
            )}
          </Button>
        </InfoBlock>
       
          <CSSTransition
            nodeRef={nodeRef}
      in={isTextShown}
      timeout={300}
      classNames="alert"
      unmountOnExit>
      <HiddenText  ref={nodeRef} >
      {currentLanguage === 'en' ? hiddenText : hiddenTextUa}
      </HiddenText>
          </CSSTransition>
                      
      </ContainerBlock>
      </LiItem>
  );
};
