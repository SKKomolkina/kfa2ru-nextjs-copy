import cls from './Slider01Page.module.scss'
import Header from "./Header"
import View from './View'
import Gamers from './Gamers'
import Comfort from './Comfort'
import Rgb from './Rgb'
import Praktic from './Praktic'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import Head from "next/head";
import {TunerGear} from "@/shared/ui/TunerGear/TunerGear";

export const Slider01Page = () => {
    return (
        <div className={cls.main}>
            <Head>
                <title>Мышка Slider 01 - KFA2</title>
                <meta name="keywords" content="Игровая мышка, мышь, slider 01"
                />
                <meta name="description" content="Стильная игровая мышка KFA2 Slider 01 с большим
                        набором функций и широкими возможностями кастомизации."
                />
            </Head>

            <Header/>
            <View/>
            <Gamers/>
            <Comfort/>
            <Rgb/>
            <Praktic/>

            <TunerGear firstLink={true}/>
            <HomeAbout blackText={true} boxClassName={cls.boxClassName}/>
        </div>
    );
};
