import {useEffect} from "react"
import {Chair04} from "@/sections/Chairs/Chair04/Chair04"
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const ChairGc04 = ({setLogo, setBackground, router, setDarkFooter}) => {
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
                <link rel="canonical" href='https://kfa2.ru/accessories/chairs-gc-04'/>
                <title>Кресло геймера GC-04 - Аксессуары KFA2</title>
                <meta name="description"
                      content="Игровое кресло KFA2 Gaming Chair 04 выполнено из прочных дышащих материалов и обеспечивает максимальный комфорт. "
                />
            </Head>

            <ProductNavigation pageLink={'/accessories/chairs-gc-04'}/>
            <Chair04/>
        </>
    )
}

export default ChairGc04
