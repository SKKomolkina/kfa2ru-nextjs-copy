import {AccessoriesPage} from "@/sections/TransitionPages/Accessories/AccessoriesPage";
import {useEffect} from "react";

const Index = ({router, setLogo, setBackground, setDarkFooter}: any) => {
    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [])

    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [setBackground, setLogo, router])

    return (
        <AccessoriesPage/>
    );
};

export default Index
