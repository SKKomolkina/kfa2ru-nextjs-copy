import cls from './Colors.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {useMediaQuery} from "@/features/lib/useMediaQuery";
import {useState} from "react";

export const Colors = () => {
    const mediaQuery = useMediaQuery(640)
    const [white, setWhite] = useState(false)

    return (
        <div className={cls.section}>
            <p className={cls.title}>
                Классика жанра
            </p>
            <div className={cls.textContainer}>
                <p>Чёрное и белое</p>
                <p>исполнение</p>
            </div>

            {mediaQuery ? (
                <Swiper spaceBetween={20} className={cls.swiperContainer}>
                    <SwiperSlide className={cls.slideBlack}/>
                    <SwiperSlide className={cls.slideWhite}/>
                </Swiper>
            ) : (
                <>
                    <div className={cls.swiperContainer}>
                        <div className={white ? cls.slideHidden : cls.slideBlack}/>
                        <div className={white ? cls.slideWhite : cls.slideHidden}/>
                    </div>

                    <div className={cls.buttonsContainer}>
                        <button onClick={() => setWhite(false)} className={cls.buttonBlack}>Чёрная</button>
                        <button onClick={() => setWhite(true)} className={cls.buttonWhite}>Белая</button>
                    </div>
                </>
            )}

            <p className={cls.text}>
                Видеокарты серии CORE обладают стильным и&nbsp;строгим дизайном кожуха, выполненным в&nbsp;едином цвете.
                Защитный кожух украшен вставками под карбон, гармонично завершающими его облик
            </p>
        </div>
    );
};
