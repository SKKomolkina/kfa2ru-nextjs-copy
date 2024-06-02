import cls from './Handle.module.scss'
import title from './XtremeTunerPage.module.scss'
import Image from "next/image";

export const Handle = () => {
    return (
        <section className={cls.section}>
            <h3 className={title.title}>Ручной РАЗГОН</h3>

            <div className={cls.containerTop}>
                <p className={title.subText}>
                    Ручной разгон позволяет изменять частоты графического адаптера, предел энергопотребления
                    и&nbsp;температурную границу срабатывания защиты, напряжение графического процессора.
                    <br/><br/>
                    Продвинутым моделям открывается доступ по регулировке напряжения памяти и оффсет для ядра
                    графического
                    процессора.
                </p>
            </div>

            <div className={cls.containerBot}>
                <Image width={325} height={701} className={cls.image}
                       src={'./images/extreme-tuner-page/handle/image.png'} alt={''}/>

                <svg className={cls.blur} width="1362" height="1422" viewBox="0 0 1362 1422" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_4508_516)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1096.32 362.079C1171.1 467.802 1104.44 606.809 1093 735.822C1081.2 868.792 1125.39 1022.91 1029.48 1115.8C930.364 1211.78 772.992 1196.4 636.253 1178.16C504.311 1160.55 365.563 1124.76 287.674 1016.84C212.495 912.68 222.073 772.298 253.381 647.683C280.247 540.754 360.894 465.216 444.368 393.168C531.892 317.626 620.544 236.625 736.013 231.118C868.728 224.79 1019.62 253.631 1096.32 362.079Z"
                              fill="url(#paint0_linear_4508_516)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_4508_516" x="0.10675" y="0.352844" width="1361.13" height="1421.35"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="114.97" result="effect1_foregroundBlur_4508_516"/>
                        </filter>
                        <linearGradient id="paint0_linear_4508_516" x1="852.406" y1="60" x2="1397.22" y2="991.892"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#272BB6"/>
                            <stop offset="1" stopColor="#8294FF"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};
