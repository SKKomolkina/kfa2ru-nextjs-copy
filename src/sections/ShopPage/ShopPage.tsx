import cls from './ShopPage.module.scss'
import {LinkUnderline} from "@/shared/ui/LinkUnderline/LinkUnderline";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import Image from "next/image";
import Head from "next/head";

const items = [
    {title: 'dns', link: 'https://www.dns-shop.ru/brand/kfa2/'},
    {title: 'Онлайн трейд.ру', link: 'https://www.onlinetrade.ru/sitesearch.html?query=kfa2'},
    {title: 'Реgард', link: 'https://www.regard.ru/brand/kfa2'},
    {title: 'Elko', link: 'https://www.elko.ru/'},
    {title: '3Logic distribution', link: 'https://3logic.ru/search/?q=kfa2'}
]

export const ShopPage = () => {
    return (
        <div className={cls.main}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/shop'/>
                <title>KFA2 - Где купить</title>
                <meta name="keywords" content="kfa2 купить, где купить kfa2, магазины kfa2"
                />
                <meta name="description" content="Официальные партнёры KFA2 с широким ассортиментом продукции."
                />
            </Head>

            <Image width={847} height={955} className={cls.top} src={'./images/shop/top.svg'} alt={''}/>

            {/*<h1 className={cls.title}>Россия</h1>*/}
            <h1 className={cls.subtitle}>Где <span className={cls.subtitleSpan}>купить</span></h1>

            <LinkUnderline items={items}/>

            <HomeAbout boxClassName={cls.box}/>

            <Image width={955} height={1214} className={cls.bot} src={'./images/shop/bot.svg'} alt={''}/>
        </div>
    );
};
