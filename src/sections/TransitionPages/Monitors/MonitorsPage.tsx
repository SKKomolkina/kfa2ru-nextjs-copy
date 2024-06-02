import cls from './MonitorsPage.module.scss'
import {ArrowRotate, ArrowRotateBlack} from "@/shared/ui/ArrowRotate/ArrowRotate";
import Image from "next/image";
import {Slider} from './Slider'
import {LinkUnderline} from "@/shared/ui/LinkUnderline/LinkUnderline";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import Head from "next/head";
import Link from "next/link";

const item = [{
    title: 'Руководства',
    text: 'Руководства по установке и использованию',
    link: '/manual'
}]

export const MonitorsPage = () => {
    return (
        <div className={cls.main}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/monitors'/>
                <title>KFA2 - Мониторы</title>
                <meta name="description"
                      content="Игровые мониторы KFA2."/>
                <meta name="keywords" content="kfa2, видеокарты kfa2, kfa2 core, kfa2 x, xtreme tuner, kfa2 vivance"/>
            </Head>

            <TopBlob/>

            <div className={cls.titleContainer}>
                <h1 className={cls.title}>Серия VIVANCE</h1>
                <p className={cls.subtitle}>Игры и 3D</p>
            </div>

            <div className={cls.boxContainer}>
                <BoxGradient/>
                <Box2/>
            </div>

            <Slider/>

            <div className={cls.titleContainer}>
                <h1 className={cls.title}>Серия PRISMA</h1>
                <p className={cls.subtitle}>Работа и учёба</p>
            </div>

            <Box3/>

            <LinkUnderline items={item}/>

            <HomeAbout boxClassName={cls.boxClassName}/>

            <BotBlob/>
        </div>
    );
};

const BoxGradient = () => {
    return (
        <Link href={'/monitors/vivance32q'} className={cls.boxGradient}>
            <svg className={cls.gradient} width="2202" height="1973" viewBox="0 0 2202 1973" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_4257_3502)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1080.67 347.24C864.166 292.166 603.957 256.989 438.868 407.655C271.24 560.637 295.959 823.619 310.342 1050.26C323.553 1258.44 346.514 1494.16 515.556 1616.08C674.472 1730.7 884.82 1603.91 1080.67 1605.86C1280.56 1607.86 1492.14 1740.45 1657.14 1627.46C1835.2 1505.54 1935.03 1261.92 1892.08 1050.26C1852.41 854.839 1613.02 798.517 1462.42 668.029C1331.82 554.881 1248.05 389.819 1080.67 347.24Z"
                          fill="url(#paint0_linear_4257_3502)"/>
                </g>
                <defs>
                    <filter id="filter0_f_4257_3502" x="0" y="0" width="2202" height="1973" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4257_3502"/>
                    </filter>
                    <linearGradient id="paint0_linear_4257_3502" x1="1902" y1="300" x2="47.2475" y2="936.611"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#44FC8E"/>
                        <stop offset="1" stopColor="#4916DD"/>
                    </linearGradient>
                </defs>
            </svg>

            <Image width={781} height={781} className={cls.image1} src={'./images/transition/monitors/1.png'}
                   alt={'Серия VIVANCE 32\'\''}/>

            <ArrowRotate className={cls.arrow}/>

            <p className={cls.num}>32&rsquo;&rsquo;</p>
        </Link>
    )
}

const Box2 = () => {
    return (
        <a className={cls.box2}>
            <Image width={585} height={586} className={cls.image2} src={'./images/transition/monitors/2.png'}
                   alt={'Серия VIVANCE 24-27\'\''}/>

            <ArrowRotateBlack className={cls.arrow}/>

            <p className={cls.num}>24-27&rsquo;&rsquo;</p>
        </a>
    )
}

const Box3 = () => {
    return (
        <div className={cls.box3}>
            <Image width={845} height={848} className={cls.image3} src={'./images/transition/monitors/3.png'}
                   alt={'Серия PRISMA 24-27\'\''}/>

            <div className={cls.textContainer}>
                <p className={cls.gradientText}>скоро</p>
                <ArrowRotateBlack className={cls.arrow}/>
            </div>

            <p className={cls.num}>24-27&rsquo;&rsquo;</p>
        </div>
    )
}

const TopBlob = () => {
    return (
        <svg className={cls.topBlob} width="2157" height="1751" viewBox="0 0 2157 1751" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_4265_959)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1176.57 402.098C1320.08 435.871 1464.7 427.726 1580.3 519.303C1752.34 655.584 1970.74 800.635 1956.32 1019.78C1940.56 1259.36 1743.77 1475.46 1513.08 1541.15C1308.28 1599.46 1151.71 1383.21 953.506 1305.32C713.448 1210.99 377.47 1281.9 263.718 1050.2C137.231 792.557 201.413 415.914 435.323 249.846C651.783 96.1652 918.244 341.303 1176.57 402.098Z"
                      fill="url(#paint0_linear_4265_959)"/>
            </g>
            <defs>
                <filter id="filter0_f_4265_959" x="0" y="0" width="2157" height="1751" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4265_959"/>
                </filter>
                <linearGradient id="paint0_linear_4265_959" x1="200" y1="200" x2="2183.54" y2="958.846"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#44FC8E"/>
                    <stop offset="1" stopColor="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

const BotBlob = () => {
    return (
        <svg className={cls.botBlob} width="1926" height="1759" viewBox="0 0 1926 1759" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_4265_960)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1020.09 213.253C1155.21 168.059 1311.41 245.575 1419.77 338.207C1523.23 426.64 1537.39 574.898 1590.09 700.497C1640.91 821.603 1742.28 932.606 1723.77 1062.66C1705.26 1192.74 1597.23 1291.52 1494.37 1373.04C1403.52 1445.03 1288.33 1464.65 1176.83 1496.09C1066.68 1527.14 959.244 1571.15 845.841 1555.87C721.223 1539.08 609.035 1480.82 507.906 1405.95C385.522 1315.35 220.556 1230.47 201.884 1079.16C183.171 927.522 307.349 790.291 419.097 686.313C510.23 601.516 663.82 635.327 761.621 558.346C876.831 467.661 881.121 259.737 1020.09 213.253Z"
                      fill="url(#paint0_linear_4265_960)"/>
            </g>
            <defs>
                <filter id="filter0_f_4265_960" x="0" y="0" width="1926" height="1759" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4265_960"/>
                </filter>
                <linearGradient id="paint0_linear_4265_960" x1="200" y1="200" x2="1980.62" y2="788.169"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#44FC8E"/>
                    <stop offset="1" stopColor="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
