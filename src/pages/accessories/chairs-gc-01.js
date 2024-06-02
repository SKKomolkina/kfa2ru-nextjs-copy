import {useEffect} from "react"
import {Chair01} from "@/sections/Chairs/Chair01/Chair01"
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const ChairGc01 = ({setLogo, setBackground, setDarkFooter, router}) => {
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

    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/accessories/chairs-gc-01'/>
                <title>Кресло геймера GC-01 - Аксессуары KFA2</title>
                <meta name="description"
                      content="Игровое кресло KFA2 Gaming Chair 01 со стильной RGB подсветкой, откидывающейся спинкой и настраиваемыми подлокотниками. "
                />
            </Head>

            <ProductNavigation pageLink={'/accessories/chairs-gc-01'}/>
            <Chair01/>
        </>
    )
}

export default ChairGc01
