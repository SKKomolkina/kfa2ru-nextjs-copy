import {VideocardsTransitionPage} from "@/sections/TransitionPages/Videocards/Videocards";
import {useEffect} from "react";

const Index = ({setLogo, setBackground, setDarkFooter, router}) => {
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
        <VideocardsTransitionPage/>
    );
};

export default Index
