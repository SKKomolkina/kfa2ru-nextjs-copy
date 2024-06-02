import CatalogPage from "@/sections/CatalogPage/CatalogPage";
import {useEffect} from "react";

const Catalog = ({setLogo, setBackground, router, setDarkFooter}: any) => {
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
        <CatalogPage/>
    )
}

export default Catalog
