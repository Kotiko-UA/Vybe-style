import { Section, Container, Title, List } from './Services.styled';
import { ListItem } from '../ListItem/ListItem';
import { data } from '../data.js';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect  } from 'react';
import { useInView } from 'framer-motion';

export const Services = () => {
  const [hoverId, setHoverId] = useState('01');
  const { t } = useTranslation();
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: false });
  const handleHover = id => {
    setHoverId(id);
  };
  const handleHoverOut = () => {
    setHoverId('01');
  };
   
  useEffect(() => {
    const liElement = document.querySelector('.liwka');
    if (isInView) liElement.classList.add('is-hovered');
    if (!isInView) liElement.classList.remove('is-hovered')
    if(hoverId !== '01') liElement.classList.remove('is-hovered');
  }, [hoverId,isInView]);

  return (
    <Section id="services">
      <Container ref={ref}>
        <Title>{t('services-title')}</Title>
        <List>
          {data.map((item, index) => {
            return (
              <ListItem
                handleHover={handleHover}
                handleHoverOut={handleHoverOut}
                key={item.id}
                item={item}
                         />
            );
          })}
        </List>
      </Container>
    </Section>
  );
};
