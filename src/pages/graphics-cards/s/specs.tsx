import {SpecPage} from "@/shared/ui/SpecPage/SpecPage";

import {sgItem} from '@/utils/specs/rtx40s/sg/sgItem'
import {stItem} from '@/utils/specs/rtx40s/st/stItem'
import {itemNames} from "@/utils/specs/rtx40s/names"
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const list: any = [sgItem, stItem]

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
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/s'/>
                <title>Спецификации серии S - Видеокарты KFA2</title>
                <meta name="keywords" content="GeForce RTX, GeForce GTX, Nvidia Ampere, Nvidia Turing,
                        видеокарта geforce, видеокарта nvidia, видеокарты kfa2, лучшие видеокарты, rtx 3050,
                        rtx 3060, rtx 3070, rtx 3060 Ti"
                />
                <meta name="description" content="Игровые видеокарты KFA2 серии SG GeForce RTX 40
                        созданы для ценителей высокой производительности и дизайна с широкими возможностями
                        кастомизации, в том числе установке водяной системы охлаждения."
                />
            </Head>

            <ProductNavigation pageLink={'/graphics-cards/s'}/>
            <SpecPage className={''} specsList={list} itemNames={itemNames}/>
        </>
    )
}

export default Specs
