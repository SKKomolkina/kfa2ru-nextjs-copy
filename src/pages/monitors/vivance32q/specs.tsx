import Head from "next/head";
import {SpecPageAcc} from "@/shared/ui/SpecPage/Acc/SpecPageAcc"
import {vivance32q} from '@/utils/specs/monitors/vivance32q/item'
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import {useEffect} from "react";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import cls from "@/sections/404/404.module.scss";

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
                <title>Vivance 32Q - Мониторы KFA2</title>
                <meta name="keywords"
                      content="монитор, игровой монитор, монитор ips, gaming монитор, game монитор, монитор 2560x1440, монитор 2k, монитор 32 дюйма, монитор 165 гц, AMD FreeSync Compatible, NVIDIA G-SYNC Compatible"
                />
                <meta name="description"
                      content="Игровой монитор KFA2 Vivance 32Q с высокоскоростной IPS матрицей и отменной цветопередачей. Живые цвета, реалистические оттенки, яркие детали — это то, что вы получите с монитором VIVANCE. Высокая частота смены кадров максимально раскрывает потенциал установленной видеокарты."
                />
                <link rel="canonical" href='https://kfa2.ru/monitors/vivance32q'/>
            </Head>

            <ProductNavigation pageLink={'/monitors/vivance32q'}/>
            <SpecPageAcc accItem={vivance32q}/>

            <HomeAbout/>
        </>
    )
}

export default Specs
