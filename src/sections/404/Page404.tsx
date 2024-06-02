import cls from './404.module.scss'
import Image from "next/image";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import Head from "next/head";

export const Page404 = () => {
    return (
        <>
            <div className={cls.page}>
                <Image width={715} height={325} className={cls.image} src={'../images/404/icon.svg'}
                       alt={'Страница не найдена.'}/>

                <h1 className={cls.title}>Микросхемы в процессе пайки</h1>
                <p className={cls.text}>
                    Такой страницы нет, но&nbsp;вы&nbsp;можете найти много других интересных страниц!
                </p>

                <TopBlur/>
                <BotBlur/>
            </div>

            <HomeAbout blackText={true} boxClassName={cls.boxClassName}/>
        </>
    );
};

const TopBlur = () => {
    return (
        <svg className={cls.topBlur} width="461" height="391" viewBox="0 0 461 391" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_4654_1494)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M246.943 114.492C271.475 120.256 296.197 118.866 315.959 134.495C345.368 157.755 382.703 182.51 380.239 219.912C377.545 260.801 343.903 297.683 304.468 308.893C269.458 318.846 242.692 281.938 208.81 268.646C167.773 252.546 110.338 264.647 90.8925 225.103C69.2698 181.132 80.2415 116.85 120.228 88.5071C157.231 62.2785 202.782 104.116 246.943 114.492Z"
                      fill="url(#paint0_linear_4654_1494)"/>
            </g>
            <defs>
                <filter id="filter0_f_4654_1494" x="0" y="0" width="460.352" height="390.574"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4654_1494"/>
                </filter>
                <linearGradient id="paint0_linear_4654_1494" x1="80" y1="80" x2="418.94" y2="209.88"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#44FC8E"/>
                    <stop offset="1" stop-color="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

const BotBlur = () => {
    return (
        <svg className={cls.botBlur} width="1310" height="1185" viewBox="0 0 1310 1185" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_4654_1493)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M698.026 89.9959C799.85 55.9094 917.562 114.374 999.227 184.24C1077.19 250.939 1087.86 362.759 1127.58 457.49C1165.88 548.832 1242.27 632.554 1228.32 730.648C1214.37 828.759 1132.96 903.261 1055.44 964.74C986.974 1019.04 900.17 1033.84 816.139 1057.55C733.133 1080.97 652.17 1114.16 566.709 1102.64C472.795 1089.97 388.251 1046.03 312.039 989.566C219.81 921.234 95.4912 857.209 81.4199 743.091C67.3174 628.72 160.899 525.215 245.112 446.792C313.791 382.836 429.537 408.337 503.24 350.275C590.062 281.878 593.295 125.055 698.026 89.9959Z"
                      fill="url(#paint0_linear_4654_1493)"/>
            </g>
            <defs>
                <filter id="filter0_f_4654_1493" x="0" y="0" width="1310" height="1185" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4654_1493"/>
                </filter>
                <linearGradient id="paint0_linear_4654_1493" x1="80" y1="80" x2="1422.1" y2="522.951"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#44FC8E"/>
                    <stop offset="1" stop-color="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
