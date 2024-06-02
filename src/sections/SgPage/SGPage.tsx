import cls from './SGPage.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Head from "next/head";


import SGPageSilence from "@/sections/SgPage/SGPageSilence/SGPageSilence";
import SGPageWings from "@/sections/SgPage/SGPageWings/SGPageWings";
import SGPageImages from "@/sections/SgPage/SGPageImages/SGPageImages";
import {SgPageHeader} from "@/sections/SgPage/SgPageHeader/SgPageHeader";
import SgPageSerious from "@/sections/SgPage/SgPageSerios/SgPageSerious";
import SgPageSwitch from "@/sections/SgPage/SGPageSwitch/SGPageSwitch";
import SGPageCoolerTitle from "@/sections/SgPage/SgPageCoolerTitle/SGPageCoolerTitle";
import SGPageAboutPromo from "@/sections/SgPage/SGPageAboutPromo/SGPageAboutPromo";
import SGPageBackplate from "@/sections/SgPage/SGPageBackplate/SGPageBackplate";
import SGPageFanStop from "@/sections/SgPage/SGPageFanStop/SGPageFanStop";
import SGPageClassic from "@/sections/SgPage/SGPageClassic/SGPageClassic";
import SGPageBooster from "@/sections/SgPage/SGPageBooster/SGPageBooster";
import SGPageHandler from "@/sections/SgPage/SGPageHandler/SGPageHandler";
import SGPageConnect from "@/sections/SgPage/SGPageConnect/SGPageConnect";
import {NextFont} from "next/dist/compiled/@next/font";
import SGPageSlider from "@/sections/SgPage/SGPageSlider/SGPageSlider";
import SGPageGeforce from "@/sections/SgPage/SGPageGeforce/SGPageGeforce";
import SGPageScan from "@/sections/SgPage/SGPageScan/SGPageScan";

import {Header} from './Header'
import {Switch} from "./Switch"
import {Fans} from './Fans'
import {Radiator} from './Radiator'
import {Cam} from './Cam'
import {Booster} from "./Booster"
import {Performance} from './Performance/Performance'
import {SGPageFooter} from "./SGPageFooter/SGPageFooter";

interface SgPageProps {
    className?: string;
    font?: NextFont;
}

export const SGPage = ({className, font}: SgPageProps) => {
    return (
        <div className={`${font.className} ${cls.SgPage}`}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/s'/>
                <title>Серия S - Видеокарты KFA2</title>
                <meta name="keywords" content="GeForce RTX, GeForce GTX, Nvidia Ampere, Nvidia Turing,
                        видеокарта geforce, видеокарта nvidia, видеокарты kfa2, лучшие видеокарты, rtx 3050,
                        rtx 3060, rtx 3070, rtx 3060 Ti"
                />
                <meta name="description" content="Игровые видеокарты KFA2 серии SG GeForce RTX 40
                        созданы для ценителей высокой производительности и дизайна с широкими возможностями
                        кастомизации, в том числе установке водяной системы охлаждения."
                />
            </Head>

            {/*<div className={cls.mainWrapper}>*/}
            {/*    <SgPageHeader/>*/}
            {/*</div>*/}

            <div className={cls.mainWrapper}>
                <div className={cls.lines}>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                </div>

                <Header/>
                <SgPageSerious/>
            </div>

            <div style={{marginTop: '0'}} className={cls.mainWrapper}>
                <div className={cls.lines}>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                </div>

                <Switch/>
                <SGPageCoolerTitle/>
                <Fans/>
            </div>

            {/*<div className={cls.relativeWrapper}>*/}
            {/*    <div className={cls.lineAbsolute}/>*/}
            {/*    /!*<SGPageAb outPromo/>*!/*/}
            {/*    <div className={cls.lineAbsolute} style={{top: 'auto', bottom: '0'}}/>*/}
            {/*</div>*/}

            {/*<div className={cls.relativeWrapper}>*/}
            {/*    <div className={cls.lineAbsolute}/>*/}
            {/*    <SGPageSilence/>*/}
            {/*    <div className={cls.lineAbsolute} style={{top: 'auto', bottom: '0'}}/>*/}
            {/*</div>*/}

            <div style={{marginTop: '0'}} className={cls.mainWrapper}>
                <div className={cls.lines}>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                </div>

                <SGPageWings/>
                <Radiator/>
                <Cam/>
            </div>

            <div className={cls.relativeWrapper} style={{background: `#855BFF`}}>
                <div className={cls.background}/>
                <div style={{marginTop: '0'}} className={cls.mainWrapper}>
                    {/*<div className={cls.lines}>*/}
                    {/*    <div className={cls.line}/>*/}
                    {/*    <div className={cls.line}/>*/}
                    {/*    <div className={cls.line}/>*/}
                    {/*    <div className={cls.line}/>*/}
                    {/*    <div className={cls.line}/>*/}
                    {/*</div>*/}

                    <SGPageBackplate/>
                    <SGPageFanStop/>
                </div>
            </div>

            <div className={cls.mainWrapper} style={{marginTop: '0'}}>
                <div className={cls.lines}>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                </div>

                <SGPageClassic/>
                <Booster/>
                <SGPageHandler/>
                <Performance/>
                <SGPageConnect/>
            </div>

            <div className={cls.relativeWrapper}>
                <SGPageSlider/>
            </div>

            <div className={cls.mainWrapper} style={{margin: '0'}}>
                <div className={cls.lines}>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                    <div className={cls.line}/>
                </div>

                <SGPageFooter color={cls.boxColor} classNameFill={false} classNameBox={cls.boxColor}/>
            </div>
        </div>
    );
};
