import {HofPage} from "@/sections/HofPage/HofPage";
import {useEffect} from "react";
import localFont from "@next/font/local";
import {Manrope} from 'next/font/google'
import {router} from "next/client";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const furore = localFont({
    src: '../../../styles/fonts/Furore/Furore.otf',
    weight: '400',
    variable: '--font-furore',
})

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['cyrillic'],
})

const Index = ({setLogo, setBackground, setDarkFooter, setProductPage, productPage, router}: any) => {
    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(false)
        setProductPage(true)
    }, [])

    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(false)
    }, [setLogo, setBackground, setDarkFooter, router])


    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/hof'/>
                <title>Серия HOF - Видеокарты KFA2</title>
            </Head>

            <ProductNavigation pageLink={'graphics-cards/hof'}/>
            <HofPage manropeFont={manrope} font={furore}/>
        </>
    )
}

export default Index
