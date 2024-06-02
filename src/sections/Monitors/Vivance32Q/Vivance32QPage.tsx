import cls from './Vivance32QPage.module.scss'

import {Header} from './Header'
import {Hz} from './Hz'
import {Colors} from './Colors'
import {Sync} from './Sync'
import {Border} from './Border'
import {Care} from './Care'
import {Connect} from './Connect'
import {Osd} from './Osd'
import {Step} from './Step'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import Head from "next/head";
import Image from "next/image";

export const Vivance32QPage = () => {
    return (
        <div className={cls.page}>
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

            <Header/>
            <Hz/>
            <Colors/>

            <div className={cls.whiteContainer}>
                <div className={cls.whiteBack}/>
                <Sync/>
                <Border/>
            </div>

            <Care/>
            <Connect/>
            <Osd/>
            <Step/>

            <Image width={1271} height={1133} className={cls.vector}
                   src={'../../images/monitors/vivance32/vector.png'} alt={''}/>

            <HomeAbout blackText={true} boxClassName={cls.boxClassName}/>
        </div>
    );
};
