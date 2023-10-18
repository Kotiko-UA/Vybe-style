import { LiItem, Number, ContainerBlock,InfoBlock, Text, Button, HiddenText,PlusSvg,CloseSvg } from "./ListItem.styled";
import { useState, useContext } from "react";
import { LanguageContext } from "components/HookLang/LanguageContext";
 
export const ListItem = ({ item: { id, text, textUa, hiddenText, hiddenTextUa } }) => {
    const [isTextShown, setIsTextShown] = useState(false);
    const [isFocusBtn, setIsFocusBtn] = useState(false);
    const { currentLanguage } = useContext(LanguageContext);
    
    return (
        <LiItem $data={`${isTextShown}`}>
        <Number>{id}</Number>
            <ContainerBlock>
                <InfoBlock onClick={() => setIsTextShown(!isTextShown)}> 
                    <Text $isTextShown={`${isTextShown}`}
                          $focus={`${isFocusBtn}`}
                    >{currentLanguage === 'en' ? text : textUa}</Text>
                    <Button type="button"
                        onBlur={()=>  setIsFocusBtn(!isFocusBtn)}
                        onFocus={()=>  setIsFocusBtn(!isFocusBtn)}
                        onClick={() => setIsTextShown(!isTextShown)}
                        
                        $data={`${!isTextShown}`}>
                                 {!isTextShown ? <PlusSvg $data={`${isTextShown}`}/>
                                               : <CloseSvg $data={`${isTextShown}`}/>}
                    </Button>
                </InfoBlock>
                {isTextShown && <HiddenText>{currentLanguage === 'en' ? hiddenText : hiddenTextUa}</HiddenText>}
            </ContainerBlock>
        </LiItem>
    )
}