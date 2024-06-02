import {useEffect, useRef} from "react"
import Head from "next/head"
import {HofAiPage} from "@/sections/HofAiPage/HofAi";
import {UtilsNavigation} from "@/shared/ui/ProductNavigation/UtilsNavigation";

const HofAi = ({setLogo, setBackground, setDarkFooter, router}) => {
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

    const scrollRef = useRef()

    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/hof-ai'/>
                <title>KFA2 - HOF AI</title>

                <meta name="keywords"
                      content="утилита hof ai для видеокарты, oc scanner, дисплей hof panel, разгон, 1-click oc, кривая вентиляторов, настройка и мониторинг видеокарты"
                />
                <meta name="description"
                      content="Утилита для настройки видеокарт KFA2 серии HOF (Hall Of Fame)."
                />
            </Head>

            <UtilsNavigation scrollRef={scrollRef}/>
            <HofAiPage scrollRef={scrollRef}/>
        </>
    )
}

export default HofAi
