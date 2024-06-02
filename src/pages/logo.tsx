import {useEffect} from "react";
import {LogoPage} from "@/sections/LogoPage/LogoPage";


const Logo = ({setLogo, setBackground, setDarkFooter, router}: any) => {
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
        <LogoPage/>
    )
}

export default Logo
