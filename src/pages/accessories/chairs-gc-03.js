import {useEffect} from "react"
import {ChairPage} from "@/sections/Chairs/Chair3/ChairPage"
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const ChairGc03 = ({setLogo, setBackground, router, setDarkFooter}) => {
    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(false)
    }, [])

    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(false)
    }, [router, setBackground, setLogo])

    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/accessories/chairs-gc-03'/>
                <title>Кресло геймера GC-03 - Аксессуары KFA2</title>
                <meta name="description"
                      content="Игровое кресло KFA2 Gaming Chair 03 в стильном оформлении и с большими возможностями настройки для максимального комфорта."
                />
            </Head>

            <ProductNavigation pageLink={'/accessories/chairs-gc-03'}/>
            <ChairPage/>
        </>
    )
}

export default ChairGc03
