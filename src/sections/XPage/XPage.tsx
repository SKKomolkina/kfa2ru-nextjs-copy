import cls from './XPage.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {XPageHeader} from "@/sections/XPage/XPageHeader/XPageHeader";
import {NextFont} from "@next/font";
import {SliderBlack} from "@/sections/XPage/Slider/SliderBlack";
import {XPageComfort} from "@/sections/XPage/XPageComfort/XPageComfort";
import {XPageColors} from "@/sections/XPage/XPageColors/XPageColors";
import {XPageSolutions} from "@/sections/XPage/XPageSolutions/XPageSolutions";
import {SliderBlue} from "@/sections/XPage/Slider/SliderBlue";
import {XPageCooling} from "@/sections/XPage/XPageCooling/XPageCooling";
import {XPageFans} from "@/sections/XPage/XPageFans/XPageFans";
import {XPageWings} from "@/sections/XPage/XPageWings/XPageWings";
import {XPageDesign} from "@/sections/XPage/XPageDesign/XPageDesign";
import {XPageWays} from "@/sections/XPage/XPageWays/XPageWays";
import Head from "next/head";
import {XPageBacklight} from "@/sections/XPage/XPageBacklight/XPageBacklight";
import {XPagePerformance} from "@/sections/XPage/XPagePerformance/XPagePerformance";
import {XPageFooter} from "@/sections/XPage/XPageFooter/XPageFooter";

interface XPageProps {
    className?: string;
    font: NextFont;
}

export const XPage = ({className, font}: XPageProps) => {
    return (
        <div className={`${font.className} ${classNames(cls.XPage, {}, [])}`}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/x'/>
                <title>Серия X - Видеокарты KFA2</title>
                <meta name="keywords"
                      content="geforce rtx, видеокарта geforce, видеокарта nvidia, видеокарты kfa2, лучшие видеокарты, geforce rtx 4060 ti x black, rtx 4070 super, white, pink, 3fan"
                />
                <meta name="description"
                      content="Игровые видеокарты KFA2 серии X разработаны для самых требовательных и искушённых геймеров. К данной серии относятся видеокарты: KFA2 GeForce RTX 4070 Ti SUPER X 3 FAN Black [47UZM6MD7JDK], KFA2 GeForce RTX 4070 SUPER X 3 FAN Black [47UOM7MD7JKK],  KFA2 GeForce RTX 4070 X 3FAN White [47NOM7MD7KWK], KFA2 GeForce RTX 4070 Ti X 3FAN RGB Black [47IOM7MD7ADK], KFA2 GeForce RTX 4070 X 3FAN Black [47NOM7MD7JEK], KFA2 GeForce RTX 4070 X 3FAN Pink [47NOM7MD7LKK], KFA2 GeForce RTX 4060 Ti X White [46ISL8MD8BWK], KFA2 GeForce RTX 4060 Ti X Black [46ISL8MD8AEK], KFA2 GeForce RTX 4060 Ti X Black [46IZL8MD8YSK], KFA2 GeForce RTX 4060 Ti X Black [46IZL8MD8YEK], KFA2 GeForce RTX 4060 X Black [46NSL8MD8MEK] и KFA2 GeForce RTX 4060 X White [46NSL8MD8NWK]."
                />
            </Head>

            <div className={cls.backgroundPurple}/>
            <XPageHeader/>
            <SliderBlack/>
            <XPageComfort/>
            <XPageColors/>
            <XPageSolutions className={cls.text}/>
            <SliderBlue/>
            <XPageCooling className={cls.text}/>
            <XPageFans/>
            <XPageWings/>
            <XPageDesign/>
            <XPageWays/>
            <XPageBacklight/>
            <XPagePerformance/>
            <XPageFooter classNameFill={true}/>
        </div>
    );
};
