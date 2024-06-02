import {CorePage} from "@/sections/CorePage/CorePage";
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";

const Index = ({setLogo, setBackground, setDarkFooter, router}: any) => {
    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(false)
    }, [])

    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(false)
    }, [setBackground, setDarkFooter, setLogo, router])

    return (
        <>
            <ProductNavigation pageLink={'/graphics-cards/core'}/>
            <CorePage/>
        </>
    )
}

export default Index
