import cls from './List.module.scss';
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {useEffect} from "react";

const Arrow = () => {
    return (
        <svg className={cls.arrow} width="18" height="18" viewBox="0 0 18 18" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M17 17V1H1" stroke="white" strokeWidth="0.623388" strokeLinecap="round"/>
            <path d="M1 17L16.6444 1.35556" stroke="white" strokeWidth="0.623388" strokeLinecap="round"/>
        </svg>
    )
}

const ArrowBlack = () => {
    return (
        <svg className={cls.arrow} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 31V0.999998H1" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
            <path d="M1 31L30.3333 1.66667" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
        </svg>
    )
}

export const List = () => {
    const pathname = usePathname()

    return (
        <ul className={cls.section}>
            <a href={`${pathname}/chairs-gc-01`} className={cls.chair1}>
                <svg className={cls.chairGradient} width="1747" height="1583" viewBox="0 0 1747 1583" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_4195_7506)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M858.941 333.822C703.932 294.391 517.627 269.207 399.427 377.076C279.408 486.603 297.107 674.885 307.405 837.149C316.864 986.193 333.303 1154.96 454.334 1242.25C568.115 1324.31 718.72 1233.54 858.941 1234.93C1002.06 1236.36 1153.55 1331.29 1271.69 1250.4C1399.17 1163.11 1470.65 988.686 1439.89 837.149C1411.5 697.237 1240.1 656.913 1132.27 563.491C1038.76 482.482 978.783 364.306 858.941 333.822Z"
                              fill="url(#paint0_linear_4195_7506)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_4195_7506" x="0" y="0" width="1747" height="1583"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4195_7506"/>
                        </filter>
                        <linearGradient id="paint0_linear_4195_7506" x1="1447" y1="300" x2="119.046" y2="755.815"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#44FC8E"/>
                            <stop offset="1" stopColor="#4916DD"/>
                        </linearGradient>
                    </defs>
                </svg>

                <Arrow/>

                <div className={cls.textContainer}>
                    <h1 className={`${cls.textRight} ${cls.titleWhite}`}>01 RGB SE</h1>
                    <p className={`${cls.textRight} ${cls.textWhite}`}>
                        Стильные и&nbsp;комфортные игровые кресла с&nbsp;настраиваемой RGB подсветкой
                    </p>

                    <Image width={670} height={1016} className={cls.chair1Image}
                           src={'../images/transition/acc/chair1.png'} alt={'01 rgb se'}/>
                </div>
            </a>

            <a href={`${pathname}/chairs-gc-04`} className={cls.chair}>
                <ArrowBlack/>

                <div className={cls.textContainer}>
                    <h1 className={`${cls.textRight} ${cls.titleBlack}`}>
                        04 l
                    </h1>
                    <p className={`${cls.textRight} ${cls.textBlack}`}>
                        Эргономичный дизайн и&nbsp;дышащие материалы обеспечивают комфорт, поддерживают тело
                        в&nbsp;состоянии расслабленности и&nbsp;комфорта
                    </p>
                </div>

                <Image width={305} height={512} className={cls.chair2Image}
                       src={'../images/transition/acc/chair2.png'} alt={'04 l'}/>
            </a>

            <a href={`${pathname}/chairs-gc-03`} className={cls.chair}>
                <ArrowBlack/>

                <div className={cls.textContainer}>
                    <h1 className={`${cls.textRight} ${cls.titleBlack}`}>
                        03 set
                    </h1>
                    <p className={`${cls.textRight} ${cls.textBlack}`}>
                        Функциональное и&nbsp;стильное
                        кресло с&nbsp;большими возможностями настройки. Играйте, работайте и&nbsp;отдыхайте
                        с&nbsp;комфортом
                    </p>
                </div>

                <Image width={305} height={521} className={cls.chair3Image}
                       src={'../images/transition/acc/chair3.png'} alt={'04 l'}/>
            </a>

            <a href={`${pathname}/slider-03`} className={cls.slider1}>
                <svg className={cls.sliderGradient} width="1747" height="1583" viewBox="0 0 1747 1583" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_4197_7515)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M858.941 333.822C703.932 294.391 517.627 269.207 399.427 377.076C279.408 486.603 297.107 674.885 307.405 837.149C316.864 986.193 333.303 1154.96 454.334 1242.25C568.115 1324.31 718.72 1233.54 858.941 1234.93C1002.06 1236.36 1153.55 1331.29 1271.69 1250.4C1399.17 1163.11 1470.65 988.686 1439.89 837.149C1411.5 697.237 1240.1 656.913 1132.27 563.491C1038.76 482.482 978.783 364.306 858.941 333.822Z"
                              fill="url(#paint0_linear_4197_7515)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_4197_7515" x="0" y="0" width="1747" height="1583"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4197_7515"/>
                        </filter>
                        <linearGradient id="paint0_linear_4197_7515" x1="1447" y1="300" x2="119.046" y2="755.815"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#44FC8E"/>
                            <stop offset="1" stopColor="#4916DD"/>
                        </linearGradient>
                    </defs>
                </svg>

                <div className={cls.textContainerLeft}>
                    <h1 className={cls.titleWhite}>slider 03</h1>
                    <p className={cls.textWhite}>
                        Стильная игровая мышка с&nbsp;широкими возможностями настройки и&nbsp;RGB подсветки
                    </p>
                </div>

                <Arrow/>

                <Image width={774} height={800} className={cls.slider1Image}
                       src={'../images/transition/acc/slider1.png'} alt={'slider 03'}/>
            </a>

            <a href={`${pathname}/slider-01`} className={cls.slider}>
                <div className={cls.textContainerLeft}>
                    <h1 className={cls.titleBlack}>Slider 01</h1>
                    <p className={cls.textBlack}>
                        Удобная форма корпуса, мгновенная реакция
                    </p>
                </div>

                <ArrowBlack/>

                <Image width={766} height={448} className={cls.slider2Image}
                       src={'../images/transition/acc/slider2.png'} alt={'slider 01'}/>
            </a>

            <a href={`${pathname}/slider-04`} className={cls.slider}>
                <div className={cls.textContainerLeft}>
                    <h1 className={cls.titleBlack}>Slider 04</h1>
                    <p className={cls.textBlack}>
                        Стильная игровая мышка
                        с&nbsp;широкими возможностями настройки и&nbsp;RGB подсветки
                    </p>
                </div>

                <ArrowBlack/>

                <Image width={581} height={620} className={cls.slider3Image}
                       src={'../images/transition/acc/slider3.png'} alt={'slider 01'}/>
            </a>
        </ul>
    );
};
