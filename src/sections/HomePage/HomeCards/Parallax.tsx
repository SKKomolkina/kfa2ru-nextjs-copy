import cls from "./Parallax.module.scss";
import {BlackButton} from "@/shared/ui/blackButton/BlackButton";
import {Line} from "@/shared/ui/Line/Line";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper";
import {Card1} from "@/sections/HomePage/HomeCards/Card1";
import {Card2} from "@/sections/HomePage/HomeCards/Card2";
import {Card3} from "@/sections/HomePage/HomeCards/Card3";
import {useRef} from "react";
import {Parallax} from "react-scroll-parallax";

export const ParallaxBox = () => {
    return (
        <div className={cls.HomeCards}>
            <div className={cls.titleContainer}>
                <p className={cls.title}>Большой ассортимент игровой периферии и девайсов для геймеров</p>
                <BlackButton link='/accessories' buttonText={'Подробнее'}/>
                <Line className={cls.line}/>
            </div>

            <div className={cls.box}>
                <Card1/>
                <Card2/>
                <Card3/>
            </div>
        </div>
    );
};
