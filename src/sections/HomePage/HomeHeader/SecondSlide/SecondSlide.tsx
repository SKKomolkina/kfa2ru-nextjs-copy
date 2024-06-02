import cls from './SecondSlide.module.scss';
import btncls from '../HomeHeader.module.scss';

import Image from "next/legacy/image";
import {ButtonArrow} from "@/features/ui/ButtonArrow/ButtonArrow";
import {classNames} from "@/shared/lib/classNames/classNames";

interface SecondSlideProps {
    className?: string;
    active?: boolean;
}

export const SecondSlide = ({className, active}: SecondSlideProps) => {
    return (
        <div className={classNames(cls.slide, {[cls.hidden]: !active}, [className])}>
            <ButtonArrow link={'https://old.kfa2.ru/hof'} className={btncls.button} classNameLine={btncls.line}/>

            <div className={cls.titleContainer}>
                <p className={cls.gradientText}>Легенда</p>
                <p className={cls.gradientTextLeft}>экстремального</p>
                <p className={cls.blackText}>разгона</p>
            </div>

            <div className={cls.imagesContainer}>
                <div className={cls.image}>
                    <Image layout='intrinsic' width={955} height={659} src={'/images/home-page/header-image2.png'}
                           alt={'Rtx 40 Hof'}
                    />
                </div>

                <div className={cls.textContainer}>
                    <h1 className={cls.title}>RTX 40 HOF</h1>
                    <p className={cls.textHidden}>
                        Всё, что нужно для рекордов.
                    </p>
                    <p className={cls.textAbsolute}>
                        Тандем производительности и&nbsp;стиля в&nbsp;сочетании
                        с&nbsp;передовыми технологиями. Уникальная видеокарта
                        с&nbsp;тщательно отобранной компонентной базой для искушенных геймеров и&nbsp;энтузиастов
                        экстремального разгона.
                    </p>
                </div>
            </div>
        </div>
    );
};
