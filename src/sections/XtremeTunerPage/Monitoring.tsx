import cls from './Monitoring.module.scss'
import styles from './XtremeTunerPage.module.scss'
import Image from "next/image";

export const Monitoring = () => {
    return (
        <section className={cls.section}>
            <div className={cls.imageContainer}>
                <svg className={cls.blur} width="1362" height="1422" viewBox="0 0 1362 1422" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_4517_649)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M265.137 362.079C190.358 467.802 257.022 606.809 268.464 735.822C280.257 868.792 236.07 1022.91 331.982 1115.8C431.097 1211.78 588.469 1196.4 725.208 1178.16C857.15 1160.55 995.898 1124.76 1073.79 1016.84C1148.97 912.68 1139.39 772.298 1108.08 647.683C1081.21 540.754 1000.57 465.216 917.093 393.168C829.569 317.626 740.917 236.625 625.448 231.118C492.733 224.79 341.844 253.631 265.137 362.079Z"
                              fill="url(#paint0_linear_4517_649)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_4517_649" x="0.223938" y="0.352844" width="1361.13" height="1421.35"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="114.97" result="effect1_foregroundBlur_4517_649"/>
                        </filter>
                        <linearGradient id="paint0_linear_4517_649" x1="509.055" y1="60" x2="-35.7593" y2="991.892"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#272BB6"/>
                            <stop offset="1" stopColor="#8294FF"/>
                        </linearGradient>
                    </defs>
                </svg>

                <Image width={259} height={559} className={cls.image}
                       src={'./images/extreme-tuner-page/monitors/image.png'} alt={'/'}/>
            </div>

            <h3 className={`${cls.title} ${styles.title}`}>Мониторинг</h3>
            <p className={styles.subText}>
                Отслеживание параметров системы с&nbsp;десктопа или мобильного устройства позволяет точно определить
                и&nbsp;зафиксировать показатели в&nbsp;конкретный момент времени без необходимости свертывания активных
                приложений.
            </p>

            {/*<button className={cls.button}>*/}
            {/*    Скачать сейчас*/}
            {/*</button>*/}

            {/*<div className={cls.black}/>*/}
        </section>
    );
};
