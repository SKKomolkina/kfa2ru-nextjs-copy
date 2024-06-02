import {SGPage} from "@/sections/SgPage/SGPage"
import localFont from "@next/font/local";
import {useEffect} from "react"
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";


const furore = localFont({
    src: '../../../styles/fonts/Furore/Furore.otf',
    weight: '400',
    variable: '--font-furore',
})

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
    }, [router, setDarkFooter, setBackground, setLogo])


    return (
        <>
            <ProductNavigation pageLink={'graphics-cards/s'}/>
            <SGPage font={furore}/>
        </>
    )
}

export default Index
