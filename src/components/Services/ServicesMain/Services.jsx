import { Section, Container, Title, List } from './Services.styled';
import { ListItem } from '../ListItem/ListItem';
import { data } from '../data.js';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <Section id="services">
      <Container>
        <Title>{t('services-title')}</Title>
        <List>
          {data.map(item => {
            return <ListItem key={item.id} item={item} />;
          })}
        </List>
      </Container>
    </Section>
  );
};
