import {MonitorsPage} from "@/sections/TransitionPages/Monitors/MonitorsPage";
import {useEffect} from "react";

const Index = ({setLogo, setBackground, router, setDarkFooter}: any) => {
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
        <MonitorsPage/>
    )
}

export default Index
