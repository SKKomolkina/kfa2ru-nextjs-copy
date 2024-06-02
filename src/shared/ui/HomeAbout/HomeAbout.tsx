import cls from './HomeAbout.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {BoxContainer} from "@/shared/ui/BoxContainer/BoxContainer";
import Image from "next/image";
import Link from "next/link";

interface HomeAboutProps {
    className?: string;
    boxClassName?: string;
    blackText?: boolean;
}

export const HomeAbout = ({className, boxClassName, blackText}: HomeAboutProps) => {
    return (
        <article className={classNames(cls.HomeAbout, {}, [className])}>
            <BoxContainer className={classNames((cls.HomeAboutBox), {}, [boxClassName])}>
                <>
                    <div className={cls.titleContainer}>
                        <p className={!blackText ? cls.blackText : cls.whiteText}>
                            Узнай о <span className={cls.gradientText}> нас</span>
                        </p>
                        <p className={!blackText ? cls.blackTextRight : cls.whiteTextRight}>
                            больше
                        </p>

                        <Link href={'/about-us'} className={cls.gradientButton}>
                            {blackText ? (
                                <svg className={cls.gradientButtonLine} width="130" height="130" viewBox="0 0 130 130" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="65" cy="65" r="65" fill="#1B1B1B"/>
                                    <path
                                        d="M91.1213 67.1213C92.2929 65.9497 92.2929 64.0503 91.1213 62.8787L72.0294 43.7868C70.8579 42.6152 68.9584 42.6152 67.7868 43.7868C66.6152 44.9584 66.6152 46.8579 67.7868 48.0294L84.7574 65L67.7868 81.9706C66.6152 83.1421 66.6152 85.0416 67.7868 86.2132C68.9584 87.3848 70.8579 87.3848 72.0294 86.2132L91.1213 67.1213ZM42 68H89V62H42V68Z"
                                        fill="url(#paint0_linear_4214_922)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_4214_922" x1="42" y1="65" x2="42.3165"
                                                        y2="69.3765" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#44FC8E"/>
                                            <stop offset="1" stopColor="#4916DD"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ) : (
                                <svg className={cls.gradientButtonLine} width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="65" cy="65" r="65" fill="#ffffff"/>
                                    <path d="M91.1213 67.1213C92.2929 65.9497 92.2929 64.0503 91.1213 62.8787L72.0294 43.7868C70.8579 42.6152 68.9584 42.6152 67.7868 43.7868C66.6152 44.9584 66.6152 46.8579 67.7868 48.0294L84.7574 65L67.7868 81.9706C66.6152 83.1421 66.6152 85.0416 67.7868 86.2132C68.9584 87.3848 70.8579 87.3848 72.0294 86.2132L91.1213 67.1213ZM42 68H89V62H42V68Z" fill="url(#paint0_linear_4214_922)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_4214_922" x1="42" y1="65" x2="42.3165" y2="69.3765" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#44FC8E"/>
                                            <stop offset="1" stopColor="#4916DD"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ) }

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
