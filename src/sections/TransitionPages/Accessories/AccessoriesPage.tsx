import cls from './AccessoriesPage.module.scss'
import {List} from './List'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import {Utils} from "./Utils";
import Head from "next/head";

export const AccessoriesPage = () => {
    return (
        <div className={cls.main}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/accessories'/>
                <title>KFA2 - Аксессуары</title>
                <meta name="description"
                      content="Периферия для геймеров KFA2. Игровые мышки, компьютерные кресла."/>
                <meta name="keywords" content="kfa2, видеокарты kfa2, kfa2 core, kfa2 x, xtreme tuner,"/>
            </Head>

            <List/>

            <Utils/>
            <HomeAbout boxClassName={cls.boxClassName}/>
        </div>
    );
};
