import {SpecPage} from "@/shared/ui/SpecPage/SpecPage";

import {coreItem} from '@/utils/specs/rtx40core/core/coreItem'
import {core3FanItem} from '@/utils/specs/rtx40core/core3fan/core3fanItem'
import {itemNames} from "@/utils/specs/rtx40core/names"
import {core1FanItem} from '@/utils/specs/rtx40core/core1fan/core3fanItem'
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const list: any = [core3FanItem, coreItem, core1FanItem]

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
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/core'/>
                <title>Спецификации серии CORE - Видеокарты KFA2</title>
                <meta name="keywords" content="kfa2 core, видеокарты core,"
                />
                <meta name="description" content="Технические спецификации актуальных видеокарт серии CORE."
                />
            </Head>

            <ProductNavigation pageLink={'/graphics-cards/core'}/>
            <SpecPage className={''} specsList={list} itemNames={itemNames}/>
        </>
    )
}

export default Specs
