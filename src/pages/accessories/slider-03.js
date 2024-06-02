import {useEffect} from "react";
import {Slider3Page} from "@/sections/Sliders/Slider3Page/Slider";
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
                <link rel="canonical" href='https://kfa2.ru/accessories/slider-03'/>
                <title>Игровая мышка Slider 03 - Аксессуары KFA2</title>
            </Head>

            <ProductNavigation pageLink={'/accessories/slider-03'}/>
            <Slider3Page/>
        </>
    )
}

export default Slider03
