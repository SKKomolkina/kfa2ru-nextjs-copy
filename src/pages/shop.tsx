import {ShopPage} from "@/sections/ShopPage/ShopPage";
import {useEffect} from "react";

const Shop = ({setLogo, setBackground, router, setDarkFooter}: any) => {
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
        <ShopPage/>
    )
}

export default Shop
