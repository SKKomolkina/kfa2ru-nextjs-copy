import cls from './Item.module.scss'
import listCls from './List.module.scss'
import {useEffect, useState} from "react"
import titleCls from "@/sections/ManualPage/ManualPage.module.scss"
import Image from "next/image"

import image1 from './1/1.png'
import image2 from './1/2.png'
import image3 from './1/3.png'

import image4 from './2/4.png'
import image5 from './2/5.png'
import image6 from './2/6.png'
import image7 from './2/7.png'
import image8 from './2/8.png'

import image9 from './3/1.png'
import image9400 from './3/1-400.png'
import image10 from './3/2.png'
import image10400 from './3/2-400.png'
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const ItemStep = () => {
    return (
        <div className={listCls.list}>
            <h3 className={titleCls.title}>Серия s 40</h3>

            <Item1/>
            <Item2/>
            <Item3/>
        </div>
    );
};

const Item1 = () => {
    const [open, setOpen] = useState(false)

    return (
        <div onClick={() => setOpen(!open)} className={cls.item}>
            <div className={cls.titleContainer}>
                <p className={cls.num}>01</p>

                <h4 className={titleCls.itemTitle}>1-clip booster</h4>

                <svg className={cls.buttonArrow} width="26" height="26" viewBox="0 0 26 26" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1V25H1" stroke="#1B1B1B" strokeLinecap="round"/>
                    <path d="M1 1L24.4667 24.4667" stroke="#1B1B1B" strokeLinecap="round"/>
                </svg>
            </div>

            <div className={open ? cls.container : cls.containerHidden}>
                <p className={titleCls.text}>В комплекте к видеокарте прилагается дополнительный вентилятор 1-Clip
                    Booster, который устанавливается на бэкплейт (укрепительную пластину) и способствует эффективному
                    отводу тепла. Ниже приведены инструкции по установке. Следуйте им.</p>
                <p className={titleCls.text}><br/>Для установки дополнительного вентилятора требуется свободное
                    пространство над областью бэкплейта.
                    1-Clip Booster может быть не совместим с рядом материнских плат.</p>

                <div className={cls.step}>
                    <p className={titleCls.stepTitle}>Шаг 1:</p>
                    <p className={titleCls.text}>Установите вентилятор сверху решётчатой области бэкплейта в
                        соответствии с расположением и размером крепёжных отверстий.</p>

                    <Image className={titleCls.image} src={image1} width={565} height={337} alt={''}/>
                </div>

                <div className={cls.step}>
                    <p className={titleCls.stepTitle}>Шаг 2:</p>
                    <p className={titleCls.text}>Установите 1-Clip Booster плавным скользящим движением сначала в одну
                        сторону, затем в другую. При правильной установке раздастся характерный щелчок.
                        <br/>
                        <br/>
                        Кабель вентилятора должен быть выведен наружу.
                    </p>

                    <Image className={titleCls.image} src={image2} width={565} height={337} alt={''}/>
                </div>

                <div className={cls.step}>
                    <p className={titleCls.stepTitle}>Шаг 3:</p>
                    <p className={titleCls.text}>Подключите кабель вентилятора в 5-контактный разъём, который расположен
                        на торце защитного кожуха видеокарты, как показано ниже.
                        <br/>
                        <br/>
                        Для снятия вентилятора повторите данные шаги в обратной последовательности.
                    </p>

                    <Image className={titleCls.image} src={image3} width={565} height={337} alt={''}/>
                </div>
            </div>

            <div className={titleCls.line}/>
        </div>
    )
}

const Item2 = () => {
    const [open, setOpen] = useState(false)

    return (
        <div onClick={() => setOpen(!open)} className={cls.item}>
            <div className={cls.titleContainer}>
                <p className={cls.num}>02</p>

                <h4 className={titleCls.itemTitle}>1-clik cync pro</h4>

                <svg className={cls.buttonArrow} width="26" height="26" viewBox="0 0 26 26" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1V25H1" stroke="#1B1B1B" strokeLinecap="round"/>
                    <path d="M1 1L24.4667 24.4667" stroke="#1B1B1B" strokeLinecap="round"/>
                </svg>
            </div>

            <div className={open ? cls.container : cls.containerHidden}>
                <p className={titleCls.text}>
                    С помощью технологии 1-Click Sync возможно синхронизировать ARGB эффекты видеокарты с другими
                    деталями вашего компьютера. Управление ARGB настройками видеокарты производится через фирменную
                    утилиту Xtreme Tuner.


                    <br/><br/>Если хотите передать управление другой системе, например утилите управления подсветкой
                    системной платы или периферии — следуйте инструкции ниже.
                </p>

                <div className={cls.step}>
                    <p className={titleCls.stepTitle}>Шаг 1:</p>
                    <p className={titleCls.text}>Найдите внешний 4-контактный разъём ARGB на вашей видеокарте. Он может
                        быть расположен на торце защитного кожуха видеокарты или на печатной плате рядом с PCIe разъёмом
                        питания.</p>

                    <Image className={titleCls.image} src={image4} width={565} height={337} alt={''}/>
                    <Image className={titleCls.image} src={image5} width={565} height={337} alt={''}/>
                </div>

                <div className={cls.step}>
                    <p className={titleCls.stepTitle}>Шаг 2:</p>
                    <p className={titleCls.text}>
                        Подключите идущий в комплекте поставки кабель к 4-контактному разъёму ARGB на видеокарте.
                    </p>

                    <Image className={titleCls.image} src={image6} width={565} height={337} alt={''}/>
                </div>

                <div className={cls.step}>
                    <p className={titleCls.stepTitle}>Шаг 3:</p>
                    <p className={titleCls.text}>
                        Подключите свободный 3-контактный 5V ARGB конец кабеля к соответствующему разъёму на материнской
                        плате или другой системе управления ARGB подсветкой.
                    </p>

                    <Image className={titleCls.image} src={image7} width={565} height={337} alt={''}/>
                </div>

                <div className={cls.step}>
                    <p className={titleCls.stepTitle}>Шаг 4:</p>
                    <p className={titleCls.text}>
                        После подключения кабеля контроль над подсветкой видеокарты автоматически передаётся внешней̆
                        системе управления.
                        <br/><br/>
                        Для возвращения функции настройки ARGB подсветки в утилите Xtreme Tuner без отключения кабеля,
                        нажмите кнопку MBSYNC
                        в утилите Xtreme Tuner.
                    </p>

                    <Image className={titleCls.image} src={image8} width={565} height={337} alt={''}/>
                </div>
            </div>

            <div className={titleCls.line}/>
        </div>
    )
}

const Item3 = () => {
    const [open, setOpen] = useState(false)
    // const [image9, setImage9] = useState(image9)
    // const [image10, setImage10] = useState(image10)

    const query400 = useMediaQuery(400)
    const query640 = useMediaQuery(640)

    return (
        <div onClick={() => setOpen(!open)} className={cls.item}>
            <div className={cls.titleContainer}>
                <p className={cls.num}>03</p>

                <h4 className={titleCls.itemTitle}>Держатель &laquo;Тёмный&nbsp;обелиск&raquo;</h4>

                <svg className={cls.buttonArrow} width="26" height="26" viewBox="0 0 26 26" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1V25H1" stroke="#1B1B1B" strokeLinecap="round"/>
                    <path d="M1 1L24.4667 24.4667" stroke="#1B1B1B" strokeLinecap="round"/>
                </svg>
            </div>

            <div className={open ? cls.container : cls.containerHidden}>
                <p className={titleCls.text}>
                    В комплекте с видеокартой KFA2 GeForce RTX 4090 SG поставляется держатель с регулируемой высотой и
                    ARGB эффектом.
                    <br/><br/>
                    <span
                        className={cls.textSpan}>*Наличие и&nbsp;дизайн держателя зависят от&nbsp;модели видеокарты.</span>
                </p>

                <Image className={`${cls.handlerImage} ${titleCls.image}`} src={query400 ? image9400 : image9} width={565} height={337}
                       alt={''}/>

                <p style={{textAlign: 'center'}} className={`${cls.textSpan} ${titleCls.text}`}>
                    Для синхронизации ARGB эффектов подсветки видеокарты и держателя с остальными элементами системы
                    используйте комплектный кабель 2-в-1. Подключите его к внешней системе управления ARGB подсветкой.
                </p>

                <Image className={`${cls.handlerImage} ${titleCls.image}`} src={query400 ? image10400 : image10} width={565} height={337}
                       alt={''}/>

            </div>

            <div className={titleCls.line}/>
        </div>
    )
}
