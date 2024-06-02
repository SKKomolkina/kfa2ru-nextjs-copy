import cls from './SupportPage.module.scss'
import {LinkUnderline} from "@/shared/ui/LinkUnderline/LinkUnderline";
import Head from "next/head";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";

const items = [
    {title: 'Где купить', text: 'Найти магазин', link: '/shop'},
    {title: 'Драйвер', text: 'Самые свежие версии', link: 'https://www.nvidia.ru/Download/index.aspx?lang=ru'},
    {title: 'Обратиться', text: 'Нужна помощь?', link: '/support'},
    {title: 'Руководства', text: 'Руководства по установке', link: '/manual'},
    {title: 'История', text: 'Узнай больше о KFA2', link: '/about-us'},
    {title: 'Каталог', text: 'Продукция KFA2', link: '/catalog'},
    {title: 'Лого-кит', text: 'Логотип и правила его использования', link: '/logo'}
]

export const SupportPage = () => {
    return (
        <div className={cls.main}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/support'/>
                <title>KFA2 - Поддержка</title>
                <meta name="description"
                      content="Поддержка, инструкции и руководства пользователя. Драйвера видеокар KFA2."/>
                <meta name="keywords" content="kfa2, поддержка kfa2, драйвер kfa2, kfa2 где купить"/>
            </Head>

            <svg className={cls.blurTop} width="1398" height="1255" viewBox="0 0 1398 1255" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7" filter="url(#filter0_f_4255_3052)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M711.668 229.418C846.541 195.122 1008.64 173.216 1111.49 267.039C1215.92 362.305 1200.52 526.07 1191.56 667.205C1183.33 796.842 1169.02 943.63 1063.71 1019.55C964.715 1090.93 833.674 1011.98 711.668 1013.19C587.141 1014.43 455.334 1097 352.54 1026.64C241.616 950.717 179.421 799.01 206.183 667.205C230.891 545.512 380.025 510.438 473.848 429.181C555.204 358.72 607.394 255.933 711.668 229.418Z"
                          fill="url(#paint0_linear_4255_3052)"/>
                </g>
                <defs>
                    <filter id="filter0_f_4255_3052" x="0" y="0" width="1398" height="1255" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4255_3052"/>
                    </filter>
                    <linearGradient id="paint0_linear_4255_3052" x1="200" y1="200" x2="1355.36" y2="596.714"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#44FC8E"/>
                        <stop offset="1" stopColor="#4916DD"/>
                    </linearGradient>
                </defs>
            </svg>

            <h1 className={cls.title}>Поддержка</h1>
            <LinkUnderline items={items}/>

            <HomeAbout boxClassName={cls.boxClassName}/>

            <svg className={cls.blurBot} width="1550" height="1424" viewBox="0 0 1550 1424" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7" filter="url(#filter0_f_4255_3053)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M818.026 209.986C919.851 175.933 1037.56 234.341 1119.23 304.139C1197.19 370.772 1207.86 482.484 1247.58 577.122C1285.88 668.375 1362.27 752.015 1348.32 850.013C1334.37 948.028 1252.96 1022.46 1175.44 1083.88C1106.97 1138.12 1020.17 1152.91 936.14 1176.6C853.133 1199.99 772.17 1233.16 686.709 1221.64C592.796 1208.99 508.251 1165.09 432.039 1108.68C339.81 1040.41 215.491 976.45 201.42 862.444C187.317 748.184 280.899 644.781 365.112 566.435C433.791 502.54 549.537 528.017 623.24 470.012C710.062 401.681 713.295 245.011 818.026 209.986Z"
                          fill="url(#paint0_linear_4255_3053)"/>
                </g>
                <defs>
                    <filter id="filter0_f_4255_3053" x="0" y="0" width="1550" height="1424" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4255_3053"/>
                    </filter>
                    <linearGradient id="paint0_linear_4255_3053" x1="200" y1="200" x2="1541.84" y2="643.298"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#44FC8E"/>
                        <stop offset="1" stopColor="#4916DD"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};
