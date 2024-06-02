import {SupportPage} from "@/sections/TransitionPages/Support/SupportPage"
import {useEffect} from "react";

const Support = ({setLogo, setBackground, router, setDarkFooter}: any) => {
    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [])

    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [setBackground, setLogo, router, setDarkFooter])

    return (
        <SupportPage/>
    );
};

export default Support
