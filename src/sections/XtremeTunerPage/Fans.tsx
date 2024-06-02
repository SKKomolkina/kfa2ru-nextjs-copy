import cls from './Fans.module.scss'
import styles from './XtremeTunerPage.module.scss'
import Image from "next/image";

export const Fans = () => {
    return (
        <div className={cls.section}>
            <h3 className={styles.title}>Работа вентиляторов</h3>

            <div className={cls.containerTop}>
                <h4 className={cls.subtitle}>Скорость вращения</h4>

                <svg className={cls.blur} width="1362" height="1422" viewBox="0 0 1362 1422" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_4513_612)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M265.137 362.079C190.358 467.802 257.022 606.809 268.464 735.822C280.257 868.792 236.07 1022.91 331.982 1115.8C431.097 1211.78 588.469 1196.4 725.208 1178.16C857.15 1160.55 995.898 1124.76 1073.79 1016.84C1148.97 912.68 1139.39 772.298 1108.08 647.683C1081.21 540.754 1000.57 465.216 917.093 393.168C829.569 317.626 740.917 236.625 625.448 231.118C492.733 224.79 341.844 253.631 265.137 362.079Z"
                              fill="url(#paint0_linear_4513_612)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_4513_612" x="0.223938" y="0.352844" width="1361.13" height="1421.35"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="114.97" result="effect1_foregroundBlur_4513_612"/>
                        </filter>
                        <linearGradient id="paint0_linear_4513_612" x1="509.055" y1="60" x2="-35.7593" y2="991.892"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#272BB6"/>
                            <stop offset="1" stopColor="#8294FF"/>
                        </linearGradient>
                    </defs>
                </svg>

                <Image className={cls.image} src={'./images/extreme-tuner-page/fans/image.png'}
                       alt={'/'} width={410} height={886}
                />
            </div>

            <div className={cls.containerBot}>
                <h4 className={cls.subtitle}>Кривые вентиляторов</h4>

                <p className={styles.subText}>
                    Раздельное управление кривыми вентиляторов для продвинутых пользователей.
                </p>
            </div>
        </div>
    );
};
