import { useState, useEffect, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import {
  ListLi,
  Wrapper,
  Number,
  ContainerBlock,
  InfoBlock,
  Text,
  HiddenText,
  Button,
  PlusSvg,
  CloseSvg,
  Thumb,
  Image,
  PlayerWrapper,
  StyledPlayer,
} from './ListItem.styled';

export const ListItem = ({
  item: {
    id,
    text,
    textUa,
    hiddenText,
    hiddenTextUa,
    video,
    photo,
    retinaPhoto,
    photoTab,
    retinaPhotoTab,
    photoDesk,
    retinaPhotoDesk,
    photoMax,
    retinaPhotoMax,
  },
  handlePhoto,
  handleId,
  btnId,
}) => {
  const { currentLanguage } = useContext(LanguageContext);
  const [isTextShown, setIsTextShown] = useState(true);
  const [isVideo, setIsVideo] = useState(true);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const isRetina = window.devicePixelRatio > 1.1;
  const mobilePhoto = isRetina ? retinaPhoto : photo;
  const tabletPhoto = isRetina ? retinaPhotoTab : photoTab;
  const desktopPhoto = isRetina ? retinaPhotoDesk : photoDesk;
  const maxPhoto = isRetina ? retinaPhotoMax : photoMax;
  const nodeRef = useRef(null);

  useEffect(() => {
    const mediaWatcher = window.matchMedia('(max-width: 1367px)');
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
    if (id !== btnId) {
      setIsTextShown(false);
    }
  }, [btnId, id]);
  const handleSetVideo = id => {
    if (id === '01') {
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
  };

  return (
    <ListLi>
      <Wrapper>
        <Number>{id}</Number>
        <ContainerBlock>
          <InfoBlock
            onClick={() => {
              setIsTextShown(!isTextShown);
              handlePhoto({ desktopPhoto, maxPhoto });
              handleId(id);
              handleSetVideo(id);
            }}
          >
            <Text $isTextShown={`${isTextShown}`}>
              {currentLanguage === 'en' ? text : textUa}
            </Text>
            <Button id={id} type="button" $data={`${!isTextShown}`}>
              {!isTextShown ? (
                <PlusSvg />
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
            unmountOnExit
          >
            <HiddenText ref={nodeRef}>
              {currentLanguage === 'en' ? hiddenText : hiddenTextUa}
            </HiddenText>
          </CSSTransition>
        </ContainerBlock>
      </Wrapper>

      {isTextShown &&
        isNarrowScreen &&
        (isVideo ? (
          <PlayerWrapper>
            <StyledPlayer
              url="https://res.cloudinary.com/deqdv9pvd/video/upload/v1698267222/Video%20for%20website/mobile_video_jgt12x_oolhmc.mp4"
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                  },
                },
              }}
            />
          </PlayerWrapper>
        ) : (
          <Thumb>
            <Image
              $tabletphoto={tabletPhoto}
              src={mobilePhoto}
              alt="how we work"
            />
          </Thumb>
        ))}
    </ListLi>
  );
};
