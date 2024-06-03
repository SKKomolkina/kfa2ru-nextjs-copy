import cls from './HomeCards.module.scss';
import Image from "next/legacy/image";
import {BlackButton} from "@/shared/ui/blackButton/BlackButton";
import {Line} from "@/shared/ui/Line/Line";
import Link from "next/link";
import {Card1} from "./Card1";
import {Card2} from "./Card2";
import {Card3} from "./Card3";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, Mousewheel, EffectCoverflow, Parallax} from 'swiper';
import swiper from "@/sections/Gtx16X/Swiper";

interface HomeCardsProps {
    className?: string;
}

export const HomeCards = () => {
    return (
        <div className={cls.HomeCards}>
            <div className={cls.titleContainer}>
                <p className={cls.title}>Большой ассортимент игровой периферии и девайсов для геймеров</p>
                <BlackButton link='/accessories' buttonText={'Подробнее'}/>
                <Line className={cls.line}/>
            </div>

            <div className={cls.box}>
                <Swiper
                    direction={'vertical'}
                    speed={600}
                    parallax={true}
                    mousewheel={true}
                    // grabCursor={true}
                    modules={[Parallax, Mousewheel]}
                    className={cls.swiperContainer}>
                    <div slot="container-start" className={cls.parallax} data-swiper-parallax="-23%"/>
                    <SwiperSlide className={`${cls.slide} `}><Card1/></SwiperSlide>
                    <SwiperSlide className={cls.slide}><Card2/></SwiperSlide>
                    <SwiperSlide className={cls.slide}><Card3/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
