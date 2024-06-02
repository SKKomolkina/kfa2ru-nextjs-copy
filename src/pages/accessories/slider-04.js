import {useEffect} from "react";
import {Slider4Page} from "@/sections/Sliders/Slider4Page/Slider4Page";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const Slider03 = ({setLogo, setBackground, router, setDarkFooter}) => {
    useEffect(() => {
        setLogo(true)
        setBackground('blue')
        setDarkFooter(false)
    }, [])

    useEffect(() => {
        setLogo(true)
        setBackground('blue')
        setDarkFooter(false)
    }, [router, setBackground, setLogo])

    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/accessories/slider-04'/>
                <title>Игровая мышка Slider 04 - Аксессуары KFA2</title>
            </Head>

            <ProductNavigation pageLink={'/accessories/slider-04'}/>
            <Slider4Page/>
        </>
    )
}

export default Slider03
