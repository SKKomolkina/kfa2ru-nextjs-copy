import Head from "next/head";
import {TunerGearPage} from "@/sections/TunerGearPage/TunerGearPage";
import {useEffect} from "react";


const TunerGear = ({setLogo, setBackground, setDarkFooter, router}) => {
    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [])

    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [router, setDarkFooter, setBackground, setLogo])

    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/tuner-gear'/>
                <title>KFA2 - Утилита Xtreme Tuner Gear</title>
                <meta name="description" content="Утилита для настройки игровых мышек KFA2 Slider-01 и Slider-03. Управление подсветкой и запись макросов."
                />
            </Head>

            <TunerGearPage/>
        </>
    )
}

export default TunerGear
