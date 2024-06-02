import XtremePlus from "@/sections/XtremePlus/XtremePlus";
import {UtilsNavigation} from "@/shared/ui/ProductNavigation/UtilsNavigation";
import {useEffect} from "react";

const Index = ({setLogo, setBackground, setDarkFooter, router}: any) => {
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
        <>
            <UtilsNavigation/>
            <XtremePlus/>
        </>
    )
}

export default Index
