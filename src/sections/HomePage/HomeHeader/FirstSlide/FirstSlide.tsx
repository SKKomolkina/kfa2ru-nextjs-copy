import cls from './FirstSlide.module.scss';
import btncls from '../HomeHeader.module.scss';

import Image from "next/legacy/image";
import {ButtonArrow} from "@/features/ui/ButtonArrow/ButtonArrow";
import {classNames} from "@/shared/lib/classNames/classNames";

interface FirstSlideProps {
    className?: string;
    active?: boolean;
}

export const FirstSlide = ({className, active}: FirstSlideProps) => {
    return (
        <li className={classNames(cls.slide, {}, [className])}>
            <ButtonArrow link={'/graphics-cards/s'} className={btncls.button} classNameLine={btncls.line}/>

            <div className={cls.titleContainer}>
                <p className={cls.gradientText}>Новый</p>
                <p className={cls.gradientTextLeft}>Уровень</p>
                <p className={cls.blackText}>Игры</p>
            </div>

            <div className={cls.imagesContainer}>
                <div className={cls.image}>
                    <Image layout='intrinsic' width={995} height={574} src={'/images/home-page/header-image.png'}
                           alt={'Geforce Rtx'}
                    />
                </div>

                <div className={cls.textContainer}>
                    <h1 className={cls.title}>rtx 40 sg</h1>
                    <p className={cls.textHidden}>
                        Непревзойдённый тандем стиля и&nbsp;производительности.
                    </p>
                    <p className={cls.textAbsolute}>
                        <span className={cls.textAbsoluteSpan}>Высокое качество элементной базы, надежность и&nbsp;долговечность.</span>

                        <br/><br/>
                        Серия SG&nbsp;разработана
                        с&nbsp;учётом ежедневных потребностей современного геймера.
                    </p>
                </div>
            </div>
        </li>
    );
};
