import cls from './Light.module.scss'
import title from './XtremeTunerPage.module.scss'
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export const Light = () => {
    const [num, setNum] = useState(1)

    useEffect(() => {
        setNum(1)
    }, [])

    const videoRef = useRef(null)
    const handlePlayVideo = () => {
        videoRef.current.play()
    }

    return (
        <div className={cls.section}>
            <h3 className={title.title}>Подсветка</h3>

            {/*<div className={cls.shadow}/>*/}
            <svg onClick={() => handlePlayVideo()} className={cls.button} width="58" height="58" viewBox="0 0 58 58"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28.7688" cy="29.0169" r="28.0921" stroke="white" strokeWidth="0.478321"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M30.5553 33.9212C34.3354 31.7448 34.3354 26.2902 30.5553 24.1138C26.783 21.9419 22.0735 24.6647 22.0735 29.0175C22.0735 33.3704 26.783 36.0932 30.5553 33.9212Z"
                      fill="white"/>
            </svg>

            <video ref={videoRef} className={cls.video}>
                <source src={'./videos/extreme-tuner/video.mp4'} type={'video/mp4'}/>
            </video>

            <div className={cls.lightContainer}>
                <svg className={cls.blur} width="1776" height="1855" viewBox="0 0 1776 1855" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_4509_532)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1430.26 472.119C1527.82 610.054 1440.85 791.415 1425.92 959.736C1410.53 1133.22 1468.18 1334.3 1343.05 1455.48C1213.73 1580.72 1008.41 1560.64 830.011 1536.84C657.867 1513.88 476.845 1467.18 375.224 1326.38C277.139 1190.48 289.635 1007.33 330.483 844.743C365.534 705.233 470.753 606.68 579.662 512.68C693.852 414.121 809.515 308.44 960.167 301.256C1133.32 292.999 1330.18 330.628 1430.26 472.119Z"
                              fill="url(#paint0_linear_4509_532)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_4509_532" x="0.03125" y="0.179688" width="1775.85" height="1854.41"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4509_532"/>
                        </filter>
                        <linearGradient id="paint0_linear_4509_532" x1="1112.02" y1="78" x2="1822.84" y2="1293.83"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#272BB6"/>
                            <stop offset="1" stopColor="#8294FF"/>
                        </linearGradient>
                    </defs>
                </svg>

                <div className={cls.list}>
                    <button onClick={() => setNum(1)} className={(num === 1) ? cls.item1Active : cls.item1}/>
                    <button onClick={() => setNum(2)} className={(num === 2) ? cls.item2Active : cls.item2}/>
                    <button onClick={() => setNum(3)} className={(num === 3) ? cls.item3Active : cls.item3}/>
                    <button onClick={() => setNum(4)} className={(num === 4) ? cls.item4Active : cls.item4}/>
                    <button onClick={() => setNum(5)} className={(num === 5) ? cls.item5Active : cls.item5}/>
                </div>

                <Image className={num === 1 ? cls.imageActive : cls.image} width={1363} height={767}
                       src={'./images/extreme-tuner-page/light/1.png'}
                       alt={''}/>
                <Image className={num === 2 ? cls.imageActive : cls.image} width={1363} height={767}
                       src={'./images/extreme-tuner-page/light/2.png'}
                       alt={''}/>
                <Image className={num === 3 ? cls.imageActive : cls.image} width={1363} height={767}
                       src={'./images/extreme-tuner-page/light/3.png'}
                       alt={''}/>
                <Image className={num === 4 ? cls.imageActive : cls.image} width={1363} height={767}
                       src={'./images/extreme-tuner-page/light/4.png'}
                       alt={''}/>
                <Image className={num === 5 ? cls.imageActive : cls.image} width={1363} height={767}
                       src={'./images/extreme-tuner-page/light/5.png'}
                       alt={''}/>

            </div>

            <div className={cls.containerBot}>
                <div className={cls.line}/>

                <p className={title.subText}>
                    Настройка системы под себя&nbsp;&mdash; управление режимами и&nbsp;цветовыми схемами подсветки
                    вентиляторов и&nbsp;прочих зон
                    с&nbsp;RGB элементами
                    (в&nbsp;зависимости от&nbsp;модели видеокарты), синхронизация режимов подсветки с&nbsp;другими
                    продуктами KFA2 и&nbsp;фирменным маскотом HOF Links.
                </p>
            </div>
        </div>
    );
};
