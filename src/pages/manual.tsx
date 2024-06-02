import {ManualPage} from "@/sections/ManualPage/ManualPage";
import {UtilsNavigation} from "@/shared/ui/ProductNavigation/UtilsNavigation";
import {useEffect} from "react";
import Head from "next/head";

const Manual = ({setLogo, setBackground, setDarkFooter, router}: any) => {
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
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/manual'/>
                <title>KFA2 - Руководства </title>
                <meta name="keywords"
                      content="установка видеокарты, кабель синхронизации 1-click sync pro, вентиляотр 1-clip booster"
                />
                <meta name="description"
                      content="Руководства и инструкции по установке и настройке видеокарт KFA2. Подключение кабеля синхронизации подсветки 1-Click Sync Pro. Подключение вентилятора 1-Clip Booster."
                />
            </Head>

            <UtilsNavigation/>
            <ManualPage/>
        </>
    )
}

export default Manual
