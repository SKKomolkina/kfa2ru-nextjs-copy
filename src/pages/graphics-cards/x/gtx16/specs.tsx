import {SpecPage} from "@/shared/ui/SpecPage/SpecPage";

import {gtxItem} from '@/utils/specs/gtx16/gtx16'
import {itemNames} from '@/utils/specs/gtx16/names'
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const list: any = [gtxItem]

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
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/x/gtx16'/>
                <title>Спецификации серии X - Видеокарты KFA2</title>
                <meta name="keywords"
                      content="GeForce RTX, GeForce GTX, Nvidia Ampere, Nvidia Turing, видеокарта geforce, видеокарта nvidia, видеокарты kfa2, лучшие видеокарты, rtx 3050, rtx 3060, rtx 3070, rtx 3060 Ti"
                />
                <meta name="description"
                      content="Характеристики видеокарты KFA2 GeForce GTX 1650 X."
                />
            </Head>

            <ProductNavigation pageLink={'/graphics-cards/x/gtx16'}/>
            <SpecPage className={''} specsList={list} itemNames={itemNames}/>
        </>
    )
}

export default Specs
