import { useState, useEffect } from 'react';
import { ListItem } from '../ListItem/ListItem';
import { data } from '../img/data';
import {
  Wrapper,
  Container,
  Title,
  InfoBlock,
  List,
  Thumb,
  Image,
  PlayerWrapper,
  StyledPlayer,
} from './HowWeWork.styled';
import { useTranslation } from 'react-i18next';
import defaultPhoto from '../img/hww1Desk-min.jpg';
import defaultPhoto2x from '../img/hww1Desk@2x-min.jpg';

export const HowWeWorkSection = () => {
  const { t } = useTranslation();
  const isRetina = window.devicePixelRatio > 1.1;
  const mainPhoto = isRetina ? defaultPhoto2x : defaultPhoto;
  const [photo, setPhoto] = useState(mainPhoto);
  const [btnId, setBtnId] = useState('01');
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
  const handlePhoto = photo => {
    setPhoto(photo);
  };

  const handleId = id => {
    setBtnId(id);
  };

  return (
    <Wrapper id="howwework">
      <Container>
        <Title>{t('how-we-work-title')}</Title>
        <InfoBlock>
          <List>
            {data.map(item => {
              return (
                <ListItem
                  key={item.id}
                  item={item}
                  handlePhoto={handlePhoto}
                  handleId={handleId}
                  btnId={btnId}
                />
              );
            })}
          </List>
          {isNarrowScreen &&
            (btnId === '01' ? (
              <PlayerWrapper>
                <StyledPlayer
                  url="https://res.cloudinary.com/deqdv9pvd/video/upload/v1697817423/Video%20for%20website/desktop_video_akrowl.mp4"
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
                  loading="lazy"
                  $maxphoto={photo.maxPhoto ?? photo}
                  src={photo.desktopPhoto ?? photo}
                  alt="team work"
                ></Image>
              </Thumb>
            ))}
        </InfoBlock>
      </Container>
    </Wrapper>
  );
};
