import cls from './HomePage.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {HomeHeader} from "./HomeHeader/HomeHeader";
import {HomeAbout} from "../../shared/ui/HomeAbout/HomeAbout";
import {HomeSeries} from "./HomeSeries/HomeSeries";
import {HomeUtils} from "./HomeUtils/HomeUtils";
import {HomeCards} from "@/sections/HomePage/HomeCards/HomeCards";
import {HomeSlider} from "@/sections/HomePage/HomeSlider/HomeSlider";
import Head from "next/head";
import {AboutUs} from "@/shared/ui/AboutUs/AboutUs";
import {HomeCards2} from './HomeCards/HomeCards2'

// import {ParallaxBox} from './HomeCards/Parallax'

interface HomeProps {
    className?: string;
}

export const HomePage = ({className}: HomeProps) => {
    return (
        <div className={classNames(cls.HomePage, {}, [className])}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru'/>
                <title>KFA2 - Официальный сайт</title>
                <meta name="description"
                      content="Официальный сайт KFA2 на русском языке. Видеокарты KFA2, мониторы, игровая периферия, игровые кресла, софт."/>
                <meta name="keywords" content="kfa2, видеокарты kfa2, kfa2 core, kfa2 x, xtreme tuner,"/>
            </Head>

            <HomeHeader/>
            <HomeAbout/>
            <HomeSeries/>
            <HomeUtils/>
            <HomeSlider/>
            <HomeCards/>
            {/*<HomeCards2/>*/}

            <Blur/>
            <AboutUs classNameFill={true} className={cls.aboutPage}/>
        </div>
    );
};

const Blur = () => {
    return (
        <svg className={cls.blur} width="1551" height="1580" viewBox="0 0 1551 1580" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_4964_3223)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M739.939 311.43C604.029 284.264 442.143 301.572 351.413 406.446C263.01 508.631 313.81 660.404 321.265 795.376C328.055 918.317 306.449 1055.2 392.124 1143.55C478.459 1232.58 616.774 1213.19 739.939 1227.1C890.191 1244.08 1064.47 1334.07 1176.26 1232.16C1288.46 1129.87 1250.95 942.581 1213.5 795.376C1184.74 682.309 1080.69 619.264 999.13 535.915C916.021 450.984 856.406 334.71 739.939 311.43Z" fill="url(#paint0_linear_4964_3223)"/>
            </g>
            <defs>
                <filter id="filter0_f_4964_3223" x="0" y="0" width="1551" height="1580" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4964_3223"/>
                </filter>
                <linearGradient id="paint0_linear_4964_3223" x1="1251" y1="300" x2="112.982" y2="624.862" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#44FC8E"/>
                    <stop offset="1" stop-color="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
