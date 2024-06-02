import cls from './ManualPage.module.scss'
import {List} from './List'
import {ItemStep} from './ItemFirstStep'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";

const video1 = <iframe className={cls.video}
                       src="https://www.youtube.com/embed/SYSePNPEwgM?si=T5gsLGHbrWhya_rl&amp;controls=0"
                       title="LED подсветка на видеокарте KFA2 GeForce RTX 4060 Ti CORE" frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen></iframe>

const video2 = <iframe className={cls.video}
                       src="https://www.youtube.com/embed/rY64tcnnhmo?si=2eBLqmsyYz62BQ7T&amp;controls=0"
                       title="KFA2 GeForce RTX 4060 Ti X" frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen></iframe>

const video3 = <iframe className={cls.video}
                       src="https://www.youtube.com/embed/OVEz6pG9CLs?si=11VyYpRLjUArOI86&amp;controls=0"
                       title="KFA2 GeForce RTX 4070 X 3FAN" frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen></iframe>

const POList = [
    {
        link: '/xtreme-tuner',
        title: 'Утилита Xtreme Tuner',
        text: 'Xtreme Tuner - утилита № 1 для видеокарт KFA2. Позволяет в реальном времени изменять и мониторить показатели видеокарты, настраивать кривую вентиляторов и управлять режимами подсветки.'
    }
]

const POTitle = 'Программное обеспечение'

const core40 = [
    {
        video: [video1],
        title: 'LED подсветка',
        text: 'Xtreme Tuner - утилита № 1 для видеокарт KFA2. Позволяет в реальном времени изменять и мониторить показатели видеокарты, настраивать кривую вентиляторов и управлять режимами подсветки.',
    }
]

const core40Title = 'Серия CORE 40'

const x40 = [
    {
        link: '/xtreme-tuner',
        title: 'RGB подсветка',
        text: 'Видеокарты X GeForce RTX 40 оснащены ARGB подсветкой элементов. Настройка и отключение подсветки производится в фирменной утилите Xtreme Tuner. ',
        text2: 'Большинство моделей видеокарт данной серии поддерживают синхронизацию подсветки с остальными элементами системы с помощью комплектного кабеля 1-Click Sync.'
    },
    {
        video: [video2, video3],
        title: '1-Click Sync',
        text: 'С помощью технологии 1-Click Sync возможно синхронизировать ARGB эффекты видеокарты с другими деталями вашего компьютера. ',
        text2: 'После подключения комплектного кабеля к видеокарте и 3-контактному 5V ARGB разъёму на материнской плате или внешнему RGB контроллере, управление настройками подсветки передаётся сторонней утилите.'
    },
]

const x40Title = 'Серия X 40'

const s40 = [
    {
        title: '1-clip booster',
        text: 'В комплекте к видеокарте прилагается дополнительный вентилятор 1-Clip Booster, который устанавливается на бэкплейт (укрепительную пластину) и способствует эффективному отводу тепла.  Ниже приведены инструкции по установке. Следуйте им.',
        text2: 'Для установки дополнительного вентилятора требуется свободное пространство над областью бэкплейта.\n' +
            '1-Clip Booster может быть не совместим с рядом материнских плат.'
    }
]

const s40Title = 'Серия S 40'

export const ManualPage = () => {
    return (
        <div className={cls.main}>
            <h1 className={cls.mainTitle}>
                Руководства
            </h1>

            <div className={cls.blueBox}>
                <h2 className={cls.blueBoxTitle}>
                    Внимание!
                </h2>
                <p className={cls.blueBoxText}>
                    Все дальнейшие действия должны выполняться при отключенном питании.
                </p>

                <TopBlur/>
            </div>

            <List list={POList} title={POTitle}/>

            <List list={core40} title={core40Title}/>

            <List list={x40} title={x40Title}/>

            {/*<List list={s40} title={s40Title}/>*/}

            <ItemStep/>

            <HomeAbout />
        </div>
    );
};

const TopBlur = () => {
    return (
        <svg className={cls.topBlur} width="588" height="672" viewBox="0 0 588 672" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_4729_1097)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M285.631 118.128C348.517 101.814 430.538 81.8478 472.635 131.389C514.791 181.002 456.937 253.497 456 318.63C455.091 381.786 502.564 448.165 467.324 500.553C429.544 556.717 353.242 573.479 285.631 571.9C219.539 570.356 146.602 548.798 112.219 492.261C80.7724 440.551 118.414 377.713 131.606 318.63C140.565 278.504 150.553 241.04 175.589 208.449C205.651 169.317 237.9 130.51 285.631 118.128Z" fill="url(#paint0_linear_4729_1097)"/>
            </g>
            <defs>
                <filter id="filter0_f_4729_1097" x="0" y="0" width="588" height="672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_4729_1097"/>
                </filter>
                <linearGradient id="paint0_linear_4729_1097" x1="100" y1="100" x2="574.397" y2="214.717" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#44FC8E"/>
                    <stop offset="1" stop-color="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
