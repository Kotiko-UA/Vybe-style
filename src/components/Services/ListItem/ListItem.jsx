import { LanguageContext } from "components/HookLang/LanguageContext";
import { LiItem, Number, Text, HiddenText } from "./ListItem.styled";
import { useContext  } from "react";

export const ListItem = ({item: {id, text, textUa, hiddenText, hiddenTextUa, photoMob,photoMob2x,photoTablet,photoTablet2x,photoMax,photoMax2x},handleHover,handleHoverOut}) => {
    
    const isRetina = window.devicePixelRatio > 1.1;
    const mobilePhoto = isRetina ? photoMob2x : photoMob;
    const tabletPhoto = isRetina ? photoTablet2x : photoTablet;
    const desktopPhoto = isRetina ? photoMax2x : photoMax;
    const {currentLanguage} = useContext(LanguageContext);
    
    return (
        <LiItem 
            className='liwka'
            tabIndex={0}
            $mobilephoto={mobilePhoto}
            $tabletphoto={tabletPhoto}
            $desktopphoto={desktopPhoto}
            onMouseEnter={() => handleHover(id)}
            onMouseLeave={handleHoverOut}
            >
            <Number>{id}</Number>
            <Text $lang={currentLanguage}>{currentLanguage === 'en' ? text : textUa}</Text>
            <HiddenText>{currentLanguage === 'en' ? hiddenText : hiddenTextUa}</HiddenText>
            
        </LiItem>)
}
