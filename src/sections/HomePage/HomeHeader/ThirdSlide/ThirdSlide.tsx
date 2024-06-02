import cls from './ThirdSlide.module.scss';
import btncls from '../HomeHeader.module.scss';

import Image from "next/legacy/image";
import {ButtonArrow} from "@/features/ui/ButtonArrow/ButtonArrow";
import {classNames} from "@/shared/lib/classNames/classNames";

interface ThirdSlideProps {
    className?: string;
    active?: boolean;
}

export const ThirdSlide = ({className, active}: ThirdSlideProps) => {
    return (
        <div className={classNames(cls.slide, {[cls.hidden]: !active}, [className])}>
            <ButtonArrow link={'https://old.kfa2.ru/extreme/gtx1650-1630x'} className={btncls.button}
                         classNameLine={btncls.line}
            />

            <div className={cls.titleContainer}>
                <p className={cls.gradientText}>Начни своё</p>
                <p className={cls.gradientTextLeft}>приключение</p>
                <p className={cls.blackText}>с kfa2</p>
            </div>

            <div className={cls.imagesContainer}>
                <div className={cls.image}>
                    <Image layout='intrinsic' width={955} height={659} src={'/images/home-page/header-image3.png'}
                           alt={'Gtx 16 x'}
                    />
                </div>

                <div className={cls.textContainer}>
                    <h1 className={cls.title}>GTX 16 X</h1>
                    <p className={cls.textHidden}>
                        Вступай в игру.
                    </p>
                    <p className={cls.textAbsolute}>
                        Серия GTX 16&nbsp;X позволяет познакомиться
                        с&nbsp;широким спектром различных игровых проектов.
                    </p>
                </div>
            </div>
        </div>
    );
};
