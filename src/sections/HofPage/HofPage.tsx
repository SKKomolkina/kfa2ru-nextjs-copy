import cls from './HofPage.module.scss';
import Head from "next/head";

import {HofPageHeader} from "./HofPageHeader/HofPageHeader";
import {NextFont} from "@next/font";
import HofPage1 from "./HofPage1/HofPage1";
import HofPage2 from "./HofPage2/HofPage2";
import HofPage3 from "./HofPage3/HofPage3";
import HofPage4 from "./HofPage4/HofPage4";
import HofPage5 from "./HofPage5/HofPage5";
import HofPage6 from "./HofPage6/HofPage6";
import HofPage7 from "./HofPage7/HofPage7";
import HofPage8 from "./HofPage8/HofPage8";
import HofPage9 from "./HofPage9/HofPage9";
import HofPage10 from "./HofPage10/HofPage10";
import HofPage11 from "./HofPage11/HofPage11";
import HofPage12 from "./HofPage12/HofPage12";
import HofPage13 from "./HofPage13/HofPage13";
import About from "./About";
import HofPage14 from "./HofPage14/HofPage14";
import Tuner from "./Tuner";

interface HofProps {
    className?: string;
    font: NextFont;
    manropeFont: NextFont;
}

export const HofPage = ({className, font, manropeFont}: HofProps) => {
    return (
        <div className={`${font.className} ${cls.HofPage}`}>
            <Head>
                <title>Серия HOF - Видеокарты KFA2</title>
                <meta name="keywords" content="GeForce RTX 30, HOF, Hall Of Fame, RTX 3090 Ti,
                        RTX 3090, RTX 3080 Ti, RTX 3080, лучшие видеокарты, топовые видеокарты"
                />
                <meta name="description" content="Непревзойдённый тандем производительности,
                        надёжности и стиля: отборные компоненты, уникальная печатная плата, высокий потенциал разгона."
                />
            </Head>

            <HofPageHeader/>

            <div className={cls.main}>
                <div className={cls.mainBackground}/>
                <HofPage1 manrope={manropeFont}/>
                <HofPage2 manrope={manropeFont}/>

                <section className={cls.section}>
                    <div className={cls.textContainer}>
                        <h2 className={cls.title}>
                            ОХЛАЖДЕНИЕ В СТИЛЕ HOF
                        </h2>

                        <div className={cls.list}>
                            <p>112мм</p>
                            <p>92мм</p>
                            <p>112мм</p>
                        </div>
                    </div>

                    <HofPage3/>

                    <div className={cls.sectionBack}/>
                    <div className={cls.gradientBack}/>
                </section>

                <HofPage4 manrope={manropeFont}/>
                <HofPage5/>
                <HofPage6/>
                <HofPage7/>
                <HofPage8 manrope={manropeFont}/>
                <div className={cls.mainBlack}>
                    <div className={cls.sectionBlack}/>

                    <div className={cls.line}/>
                    <HofPage9/>
                    <HofPage10 manrope={manropeFont}/>
                    <div className={cls.lineReverse}/>
                </div>

                <HofPage11/>
                <HofPage12 manrope={manropeFont}/>
                <HofPage13/>

                <div className={cls.wrapper}>
                    <About/>
                    <HofPage14 color={false}/>
                    <Tuner/>

                    <p className={cls.textSpan}>
                        *Для синхронизации в отсоединённом состоянии необходим внешний контроллер.
                    </p>
                </div>
            </div>
        </div>
    );
};
