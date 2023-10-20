import { useState } from "react";
import { Button, ArrowUp} from "./Btntottop.styled";

export const Btntotop = () => {
    const [scroll, setScroll] = useState(false)
    window.onscroll = function () {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    return (
        <Button $scroll={`${scroll}`}
        onClick={() => {
               window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }} >
            <ArrowUp />
        </Button>
    )
}