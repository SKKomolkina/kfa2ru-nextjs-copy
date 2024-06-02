import cls from './CatalogPage.module.scss'
import Head from "next/head"
import List from './List'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import {Archive} from "./Archive";

import {catalogItems} from '@/utils/catalog'

const CatalogPage = () => {
    return (
        <div className={cls.main}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/catalog'/>
                <title>KFA2 - Каталог видеокарт</title>
                <meta name="keywords" content="каталог kfa2, ассортимент kfa2, купить kfa2" />
                <meta name="description" content="Каталог изделий KFA2 для геймеров." />
            </Head>

            <h1 className={cls.title}>Каталог<span className={cls.titleSpan}> видеокарт</span></h1>
            <List list={catalogItems}/>

            <Archive />

            <HomeAbout boxClassName={cls.box}/>
        </div>
    );
};

export default CatalogPage
