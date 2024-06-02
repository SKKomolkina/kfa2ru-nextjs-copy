import cls from './HomeHeader.module.scss';

import {classNames} from "@/shared/lib/classNames/classNames";
import {FirstSlide} from "./FirstSlide/FirstSlide";
import {SecondSlide} from "./SecondSlide/SecondSlide";
import {ThirdSlide} from "@/sections/HomePage/HomeHeader/ThirdSlide/ThirdSlide";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import {useRef} from "react";

// import 'swiper/css/pagination';

interface HomeHeaderProps {
    className?: string;
}

export const HomeHeader = ({className}: HomeHeaderProps) => {
    const progressCircle = useRef(null);

    return (
        <div className={classNames(cls.HomeHeader, {}, [className])}>
            <ul
                className={cls.list}
            >
                <FirstSlide/>
            </ul>

            <div className={cls.blur}/>

            {/*<div className={`${cls.paginationContainer} swiper-pagination`}>*/}
            {/*    <div className={cls.pagination}/>*/}
            {/*    <div className={cls.pagination}/>*/}
            {/*    <div className={cls.pagination}/>*/}
            {/*</div>*/}
            {/*<ButtonArrow func={handleClick} className={cls.button} classNameLine={cls.line}/>*/}
        </div>
    );
};
