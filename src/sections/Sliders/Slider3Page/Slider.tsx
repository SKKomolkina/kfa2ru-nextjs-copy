import cls from './Slider.module.scss'
import Head from "next/head"
import Header from './Header'
import Second from './Second'
import Ergonomic from "./Ergonomic"
import View from './View'
import Simple from './Simple'
import Choice from './Choice'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import {TunerGear} from "@/shared/ui/TunerGear/TunerGear";

export const Slider3Page = () => {
    return (
        <div className={cls.main}>
            <Head>
                <title>Мышка Slider 03 - KFA2</title>
                <meta name="keywords" content="Игровая мышка, мышь, slider 03"
                />
                <meta name="description" content="Стильная игровая мышка KFA2 Slider 03 с большим
                        набором функций, качественным сенсором и широкими возможностями кастомизации."
                />
            </Head>

            <Header/>
            <Second/>
            <Ergonomic/>
            <View/>
            <Simple/>
            <Choice/>

            <TunerGear secondLink={true}/>
            <HomeAbout blackText={true} boxClassName={cls.boxClassName}/>
        </div>
    );
};
