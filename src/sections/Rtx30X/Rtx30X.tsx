import cls from './Rtx30x.module.scss'

import {Header} from './Header'
import {Classic} from "./Classic"
import {Cooling} from "./Cooling"
import {Load} from "./Load"
import {Colors} from "./Colors"
import {ColorsHeader} from "./ColorsHeader";
import {ColorsColor} from "./ColorsColor";
import {ColorsSwitch} from "./ColorsSwitch";
import {ColorsButton} from "./ColorsButton";
import {ColorsRgb} from "./ColorsRgb";
import Head from "next/head";
import {Performance} from "./Performance";
import {Footer} from "./Footer";
import {useState} from "react";

export const Rtx30X = () => {
    const [lightOn, setLightOn] = useState(true)

    return (
        <div className={cls.main}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/x/rtx30'/>
                <title>Серия X GeForce RTX 30 - Видеокарты KFA2</title>
                <meta name="keywords" content="GeForce RTX 30, GeForce RTX 3050, GeForce RTX 3060, GeForce RTX 3060 Ti"
                />
                <meta name="description"
                      content="Тихие, холодные, стильные и производительные видеокарты KFA2 серии X с широкими возможностями кастомизации подсветки."
                />
            </Head>

            <Header/>
            <Classic/>
            <Cooling/>
            <Load/>
            <Colors>
                <ColorsHeader/>
                <ColorsColor/>
                <ColorsSwitch lightOn={lightOn} setLightOn={setLightOn}/>
                <ColorsButton lightOn={lightOn}/>
                <ColorsRgb/>
            </Colors>

            <Performance/>
            <Footer fill={true}/>
        </div>
    );
};
