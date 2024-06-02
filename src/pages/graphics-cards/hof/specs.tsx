import {SpecPage} from "@/shared/ui/SpecPage/SpecPage";

import {hofItem} from '@/utils/specs/rtx40hof/hofItem'
import {names} from '@/utils/specs/rtx40hof/names'
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const list = [hofItem]

const Specs = ({setLogo, setBackground, setDarkFooter, router, productPage, setProductPage}: any) => {
    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
        setProductPage(true)
    }, [])

    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [router, setDarkFooter, setBackground, setLogo])

    useEffect(() => {
        setProductPage(true)
    }, [router, productPage])

    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/hof'/>
                <title>Спецификации серии HOF - Видеокарты KFA2</title>
                <meta name="description"
                      content="Технические спецификации актуальных видеокарт серии HOF."
                />
            </Head>

            <ProductNavigation pageLink={'/graphics-cards/hof'}/>
            <SpecPage className={''} specsList={list} itemNames={names}/>
        </>
    )
}

export default Specs
