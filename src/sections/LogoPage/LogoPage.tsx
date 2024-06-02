import cls from './LogoPage.module.scss'

import {Subtitle} from './Subtitle'
import {Use} from './Use'
import {Position} from './Position'
import {NotUse} from './NotUse'
import {Online} from './Online'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import Head from "next/head";

export const LogoPage = () => {
    return (
        <div className={cls.page}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/logo'/>
                <title>KFA2 - Лого-кит</title>
                <meta name="keywords" content="Логотип торговой марки KFA2 и правила его использования."
                />
                <meta name="description"
                      content="скачать логотип kfa2, правила использования"
                />
            </Head>

            <div className={cls.titleContainer}>
                <Blur/>

                <p className={cls.pageText}>Наш логотип</p>

                <h1 className={cls.pageTitle}><span className={cls.pageTitleGradient}>Лого</span> кит</h1>
                <h2 className={cls.pageSubtitle}>
                    Логотип KFA2 является неотъемлемой частью коммуникации бренда, поэтому необходимо соблюдать правила
                    его использования.
                </h2>
            </div>

            <Subtitle/>
            <Use/>
            <Position/>
            <NotUse/>
            <Online/>

            <HomeAbout/>
        </div>
    );
};

const Blur = () => {
    return (
        <svg className={cls.blur} width="1425" height="1308" viewBox="0 0 1425 1308" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_4828_455)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M722.972 324.36C834.465 295.96 968.468 277.821 1053.49 355.513C1139.81 434.4 1127.08 570.009 1119.67 686.878C1112.87 794.227 1101.05 915.778 1013.99 978.649C932.154 1037.75 823.828 972.374 722.972 973.38C620.032 974.408 511.073 1042.78 426.098 984.517C334.402 921.646 282.988 796.022 305.111 686.878C325.536 586.108 448.818 557.065 526.377 489.778C593.63 431.432 636.774 346.316 722.972 324.36Z"
                      fill="url(#paint0_linear_4828_455)"/>
            </g>
            <defs>
                <filter id="filter0_f_4828_455" x="0" y="0" width="1425" height="1308" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4828_455"/>
                </filter>
                <linearGradient id="paint0_linear_4828_455" x1="300" y1="300" x2="1255.43" y2="627.502"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#44FC8E"/>
                    <stop offset="1" stop-color="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
