import cls from './Slider4Page.module.scss'
import Head from "next/head";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout"

import Header from './Header'
import Gamer from './Gamer'
import Ergonomic from "./Ergonomic"
import View from './View'
import Rgb from './Rgb'
import Simple from './Simple'

export const Slider4Page = () => {
    return (
        <div className={cls.main}>
            <Head>
                <title>Мышка Slider 04 - KFA2</title>
                <meta name="keywords" content="Игровая мышка, мышь, slider 04"
                />
                <meta name="description" content="Стильная игровая мышка KFA2 Slider 04 с большим
                        набором функций."
                />
            </Head>

            <Header/>
            <Gamer/>
            <Ergonomic/>
            <View/>
            <Rgb/>
            <Simple/>

            <HomeAbout blackText={true} boxClassName={cls.boxClassName}/>
        </div>
    );
};
