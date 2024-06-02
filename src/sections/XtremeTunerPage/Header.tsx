import cls from './Header.module.scss'
import text from './XtremeTunerPage.module.scss'

export const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.textContainer}>
                <p className={text.text}>
                    Широкие возможности для мониторинга и&nbsp;кастомизации устройств KFA2
                </p>
            </div>

            <div className={cls.titleContainer}>
                <h1 className={cls.titleGradient}>
                    XTREME TUNER
                </h1>
                <h1 className={cls.title}>
                    Твой стиль игры
                </h1>
            </div>

            <svg className={cls.gradient} width="1913" height="2066" viewBox="0 0 1913 2066" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_4497_5887)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1066.54 1765.26C884.67 1753.42 791.663 1557.36 660.678 1430.56C525.674 1299.88 317.96 1211.7 301.305 1024.5C284.094 831.04 440.306 672.509 581.365 539.076C717.475 410.324 879.517 290.245 1066.54 300.627C1247.06 310.648 1392.13 445.476 1500.71 590.11C1593.88 714.219 1605.08 869.356 1609.96 1024.5C1615.07 1187.16 1625.16 1355.89 1528.91 1487.09C1418.29 1637.89 1253.11 1777.41 1066.54 1765.26Z"
                          fill="url(#paint0_linear_4497_5887)"/>
                </g>
                <defs>
                    <filter id="filter0_f_4497_5887" x="0" y="0" width="1913" height="2066" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4497_5887"/>
                    </filter>
                    <linearGradient id="paint0_linear_4497_5887" x1="1613" y1="1766" x2="111.127" y2="1536.61"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#272BB6"/>
                        <stop offset="1" stopColor="#8294FF"/>
                    </linearGradient>
                </defs>
            </svg>
        </header>
    );
};
