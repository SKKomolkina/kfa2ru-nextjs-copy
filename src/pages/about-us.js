import {useEffect} from "react";
import Head from "next/head";
import {AboutUsPage} from "@/sections/AboutUsPage/AboutUsPage";

const AboutUs = ({setLogo, setBackground, setDarkFooter, router}) => {
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
                <link rel="canonical" href='https://kfa2.ru/about-us'/>
                <title>KFA2 - О нас</title>
                <meta name="description" content="Ознакомьтесь с историей торговой марки KFA2."
                />
            </Head>

            <AboutUsPage/>
        </>
    )
}

export default AboutUs
