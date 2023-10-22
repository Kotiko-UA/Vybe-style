import { LanguageContext } from 'components/HookLang/LanguageContext';
import { useContext } from 'react';
import {
  DarkImgEl,
  Li,
  ProjectName,
  ProjectServises,
  ProjectYear,
  Services,
  SlideImg,
  SlideLink,
} from './Portfolio.styled';

export const PortfolioCarts = ({ projectCarts }) => {
  const { currentLanguage } = useContext(LanguageContext);
  return projectCarts.map(
    ({
      projectName,
      projectYear,
      projectUrl,
      projectFotoUrl,
      id,
      projectServises,
      projectNameUa,
      projectServisesUa,
      projectServiseTitle,
      projectServiseTitleUa,
    }) => (
      <Li key={id}>
        <SlideLink
          className="slide-wrap"
          href={projectUrl}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <DarkImgEl />
          <SlideImg loading="lazy" src={projectFotoUrl} alt={projectName} />
          <ProjectName>
            {currentLanguage === 'en' ? projectName : projectNameUa}
          </ProjectName>
          <ProjectYear>&#123; {projectYear} &#125;</ProjectYear>
          <Services>
            {currentLanguage === 'en'
              ? projectServiseTitle
              : projectServiseTitleUa}
          </Services>
          <ProjectServises>
            {currentLanguage === 'en' ? projectServises : projectServisesUa}
          </ProjectServises>
        </SlideLink>
      </Li>
    )
  );
};
