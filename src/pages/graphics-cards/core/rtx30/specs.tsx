import {SpecPage} from "@/shared/ui/SpecPage/SpecPage";

import {coreItem} from '@/utils/specs/rtx30core/core/coreItem'
import {itemNames} from "@/utils/specs/rtx30core/names"
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const list: any = [coreItem]

const Specs = ({setLogo, setBackground, setDarkFooter, router}: any) => {
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
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/core/rtx30'/>
                <title>Спецификации серии CORE - Видеокарты KFA2</title>
                <meta name="keywords" content="kfa2 core, видеокарты core,"
                />
                <meta name="description"
                      content="Технические спецификации видеокарт серии CORE GeForce RTX 30."
                />
            </Head>

            <ProductNavigation pageLink={'/graphics-cards/core/rtx30'}/>
            <SpecPage className={''} specsList={list} itemNames={itemNames}/>
        </>
    )
}

export default Specs
