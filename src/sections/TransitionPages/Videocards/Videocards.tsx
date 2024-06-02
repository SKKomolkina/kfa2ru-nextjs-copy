import cls from './Videocards.module.scss'

import {TitleContainer} from "./TitleContainer"
import {SgSt} from "./SgSt"
import {X} from './X'
import {Core} from './Core'
import {Slider} from './Slider'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import {Utils} from "./Utils";
import Head from "next/head";

export const VideocardsTransitionPage = () => {
    return (
        <div className={cls.main}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards'/>
                <title>KFA2 - Видеокарты</title>
                <meta name="description"
                      content="Игровые видеокарты KFA2. Серии HOF, SG, ST, X и CORE на базе графических процессоров GeForce RTX 40, RTX 30 и GTX 16."/>
                <meta name="keywords" content="kfa2, видеокарты kfa2, kfa2 core, kfa2 x, xtreme tuner,"/>
            </Head>

            <TitleContainer/>
            <SgSt/>
            <Slider/>
            <X/>
            <Core/>
            <Utils/>
            <HomeAbout boxClassName={cls.boxClassName}/>
        </div>
    )
}
