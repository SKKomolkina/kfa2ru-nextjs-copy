import {useEffect} from "react";
import {Page404} from "@/sections/404/Page404";
import Head from "next/head";

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
    }, [setBackground, setLogo, router, setDarkFooter])

    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/404'/>
                <meta name="robots" content="noindex"/>
                <title>Страница не найдена</title>
            </Head>
            <Page404/>
        </>
    )
}

export default Index
