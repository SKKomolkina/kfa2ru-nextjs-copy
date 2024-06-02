import {SpecPage} from "@/shared/ui/SpecPage/SpecPage";

import {xItem} from '@/utils/specs/rtx30x/x/xItem'
import {itemNames} from '@/utils/specs/rtx30x/names'
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const list: any = [xItem]

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
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/x/rtx30'/>
                <title>Спецификации серии X - Видеокарты KFA2</title>
                <meta name="keywords"
                      content="GeForce RTX, GeForce GTX, Nvidia Ampere, Nvidia Turing, видеокарта geforce, видеокарта nvidia, видеокарты kfa2, лучшие видеокарты, rtx 3050, rtx 3060, rtx 3070, rtx 3060 Ti"
                />
                <meta name="description"
                      content="Игровые видеокарты KFA2 серии X разработаны для самых требовательных и искушённых геймеров."
                />
            </Head>

            <ProductNavigation pageLink={'/graphics-cards/x/rtx30'}/>
            <SpecPage className={''} specsList={list} itemNames={itemNames}/>
        </>
    )
}

export default Specs
