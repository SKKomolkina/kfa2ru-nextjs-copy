import cls from './CorePage.module.scss';
import {Header} from "./Header/Header";
import {Series} from "./Series/Series";
import {Power} from "./Power/Power";
import {CoreLight} from "./CoreLight/CoreLight";
import {CoreWings} from "./CoreWings/CoreWings";
import {CoreCooling} from "./CoreCooling/CoreCooling";
import {CoreBlades} from "./CoreBlades/CoreBlades";
import {CoreAir} from "./CoreAir/CoreAir";
import {CoreSafe} from "./CoreSafe/CoreSafe";
import {CoreFanstop} from "@/sections/CorePage/CoreFanstop/CoreFanstop";
import {CorePerformance} from "@/sections/CorePage/CorePerformance/CorePerformance";
import {CoreFooter} from "@/sections/CorePage/CoreFooter/CoreFooter";
import Head from "next/head";

export const CorePage = () => {

    return (
        <div className={cls.core}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/core'/>
                <title>Серия CORE - Видеокарты KFA2</title>
                <meta name="keywords" content="kfa2 core, видеокарты core,"
                />
                <meta name="description"
                      content="Игровые видеокарты серии CORE разработаны для ежедневного гейминга со стабильными игровыми показателями."
                />
            </Head>

            <Header/>
            <Series/>
            <Power/>
            <CoreLight/>
            <CoreWings/>
            <CoreCooling/>
            <CoreBlades/>
            <CoreAir/>
            <CoreSafe/>
            <CoreFanstop/>
            <CorePerformance/>
            <CoreFooter/>
        </div>
    );
};
