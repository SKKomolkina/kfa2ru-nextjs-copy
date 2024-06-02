import {useEffect} from "react";
import {Vivance32QPage} from "@/sections/Monitors/Vivance32Q/Vivance32QPage";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";

const Index = ({setLogo, setBackground, router, setDarkFooter}: any) => {
    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(false)
    }, [])

    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(false)
    }, [setBackground, setLogo, router, setDarkFooter])

    return (
        <>
            <ProductNavigation pageLink={'/monitors/vivance32q'}/>
            <Vivance32QPage/>
        </>
    )
}
export default Index
