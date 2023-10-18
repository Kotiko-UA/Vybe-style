import { Aside } from './components/Aside/Aside';
import { useMediaQuery } from '@react-hook/media-query';
import { Portfolio } from 'components/Portfolio/Portfolio';
import projectCarts from './components/Services/FakePortfolioData.json';
import teamCarts from './components/Team/team-arrey';
import { OurClients } from 'components/OurClients/OurClients';
import { HowWeWorkSection } from './components/HowWeWork/HowWeWorkSection/HowWeWorkSection';
import { AnimationSection } from './components/HowWeWork/AnimationSection/AnimatonSection';
import { Team } from 'components/Team/Team';
import { Faq } from './components/FAQ';
import { AboutUs } from 'components/About-Us/About-Us';
import { Services } from 'components/Services';
import { Hero } from 'components/Hero/Hero';
import { Footer } from 'components/Footer/Footer';
import { ContactForm } from './components/Form/Form/Form';
import { BgFooterAndForm } from 'components/BgFooterAndForm/BgFooterAndForm';
import { Btntotop } from 'components/Btntotop/Btntotop';
import { LanguageProvider } from './components/HookLang/LanguageContext';

export const App = () => {
  const isScreenWide = useMediaQuery('(min-width: 1368px)');
  return (
    <>
      <LanguageProvider>
        <Aside />
        <Hero/>
        <AboutUs />
        <Services />
        <OurClients />
        <AnimationSection />
        <HowWeWorkSection />
        <Portfolio projectCarts={projectCarts} />
        <Team teamCarts={teamCarts} />
        <Faq />
        {isScreenWide ? (
          <>
            <ContactForm />
            <Footer />
          </>
        ) : (
          <BgFooterAndForm />
        )}
        <Btntotop/>
      </LanguageProvider>
    </>
  );
};
