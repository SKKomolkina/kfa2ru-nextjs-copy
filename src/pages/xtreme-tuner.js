import {useEffect, useRef, useState} from "react";
import {XtremeTunerPage} from "@/sections/XtremeTunerPage/XtremeTunerPage";
import {UtilsNavigation} from "@/shared/ui/ProductNavigation/UtilsNavigation";
import Head from "next/head";

const XtremeTuner = ({setLogo, setBackground, setDarkFooter, router}) => {
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

    const scrollRef = useRef()
    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/xtreme-tuner'/>
                <title>KFA2 - Утилита Xtreme Tuner</title>
                <meta name="description"
                      content="Утилита Xtreme Tuner для настройки и мониторинга показателей видеокарт KFA2. Выбор режимов подсветки, настройка кривой вентиляторов, автоматический и ручной разгон."/>
                <meta name="keywords"
                      content="утилита Xtreme Tuner, инструкция по настройке Xtreme Tuner, разгон видеокарты kfa2, подсветка kfa2, приложение kfa2, функция 1-Click OC, софт kfa2, argb управление, rgb программа, настройка видеокарты"/>
            </Head>

            <UtilsNavigation scrollRef={scrollRef}/>
            <XtremeTunerPage scrollRef={scrollRef}/>
        </>
    )
}

export default XtremeTuner
