import {Slider01Page} from "../../sections/Sliders/Slider01Page/Slider01Page";
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const Slider01 = ({setLogo, setBackground, router, setDarkFooter}) => {
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
                <link rel="canonical" href='https://kfa2.ru/accessories/slider-01'/>
                <title>Игровая мышка Slider 01 - Аксессуары KFA2</title>
            </Head>

            <ProductNavigation pageLink={'/accessories/slider-01'}/>
            <Slider01Page/>
        </>
    )
}

export default Slider01
