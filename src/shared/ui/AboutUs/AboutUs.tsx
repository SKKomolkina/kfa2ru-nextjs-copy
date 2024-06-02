import cls from './AboutUs.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {BoxContainer} from "@/shared/ui/BoxContainer/BoxContainer";
import Link from "next/link";
import Image from "next/image";

interface AboutUsProps {
    className?: string;
    classNameButton?: string;
    classNameFill?: boolean;
}

export const AboutUs = ({className, classNameButton, classNameFill}: AboutUsProps) => {
    return (
        <article className={classNames(cls.about, {}, [className])}>
            <BoxContainer className={classNameFill ? cls.aboutBox : cls.aboutBoxWhite}>
                <>
                    <div className={cls.titleContainer}>
                        <p className={cls.title}>
                             Узнай о <span className={cls.gradientText}> нас</span>
                        </p>
                        <p className={cls.titleRight}>
                            больше
                        </p>

                        <Link href={'/about-us'}
                              className={classNameFill ? cls.gradientButton : cls.gradientButton}>
                            <div className={cls.gradientButtonLine}>
                                <Image fill src={'/images/ui/gradientButton.svg'} alt={'->'}/>
                            </div>
                        </Link>
                    </div>

                    <p className={cls.text}>
                        KFA2&nbsp;&mdash; зарегистрированная торговая марка производственной группы Galaxy Microsystems
                        Limited (Гонконг).
                    </p>
                </>
            </BoxContainer>
        </article>
    );
};
