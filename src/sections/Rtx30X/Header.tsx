import cls from './Header.module.scss'
import Image from "next/image";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const Header = () => {
    const query640 = useMediaQuery(640)

    return (
        <div className={cls.header}>
            <div className={cls.topContainer}>
                <div className={cls.light}/>
                <p className={cls.textAbsolute}>Твоя игра</p>

                <ul className={cls.textContainer}>
                    <li className={cls.item}>
                        <div className={cls.span}/>
                        <p className={cls.text}>Стильный внешний облик</p>
                    </li>
                    <li className={cls.item}>
                        <div className={cls.span}/>
                        <p className={cls.text}>Мощная система охлаждения</p>
                    </li>
                    <li className={cls.item}>
                        <div className={cls.span}/>
                        <p className={cls.text}>Поддержка всех современных технологий</p>
                    </li>
                </ul>

                {query640 ? (
                    <Image width={540} height={343} className={cls.image}
                           src={'../../images/rtx30x/header/image400.png'}
                           alt={'Твоя игра'}/>
                ) : (
                    <Image width={1388} height={604} className={cls.image} src={'../../images/rtx30x/header/image.png'}
                           alt={'Твоя игра'}/>
                )}
            </div>

            <div className={cls.textBox}>
                <p className={cls.textBlack}>
                    Видеокарты KFA2 серии&nbsp;Х разработаны специально для заядлых энтузиастов, требовательных
                    к&nbsp;игровой производительности и&nbsp;качеству визуальных эффектов.
                </p>
            </div>

            <div className={cls.imageContainer}/>
        </div>
    );
};
