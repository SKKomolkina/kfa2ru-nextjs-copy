import cls from './TunerGearPage.module.scss'
import styles from './Item.module.scss'
import Image from "next/image"

import {Info} from './Info'
import {List} from "./List"
import {Download} from './Download'
import clspage from "@/sections/HofAiPage/HofAi.module.scss";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";

const list = [
    {name: 'SLIDER-01'},
    {name: 'SLIDER-02'}
]

const slider01 = {name: 'SLIDER-01', num: '01'}

const slider02 = {name: 'SLIDER-03', num: '02'}

export const TunerGearPage = () => {
    return (
        <div className={cls.page}>
            <div className={cls.container}>
                <p className={cls.subtitle}>Всё под контролем</p>
                <h1 className={cls.title}>XTREME <span className={cls.titleGradient}>TUNER Gear</span></h1>

                <p className={cls.text}>
                    Утилита Xtreme Tuner Gear позволяет настраивать периферийные устройства KFA2&nbsp;&mdash; мышки,
                    клавиатуры и&nbsp;гарнитуры.
                </p>

                <Image width={1456} height={1308} className={cls.blurTop} src={'../images/gear/blur-top.png'} alt={''}/>
            </div>

            <Info/>

            <div className={cls.infoContainer}>
                <h2 className={cls.infoTitle}>МЫШКИ <span className={cls.titleGradient}>SLIDER</span></h2>
                <p className={cls.text}>
                    Опции для настройки зависят от&nbsp;конкретной модели игровой мышки KFA2. SLIDER
                    01&nbsp;и&nbsp;SLIDER
                    03&nbsp;обладают широким спектром настраиваемых элементов.
                </p>
            </div>

            <div className={cls.list}>
                <List item={slider01}>
                    <Image width={890} height={642} className={styles.image} src={'../images/gear/01/1.png'} alt={''}/>
                    <h3 className={styles.title}>Настройка активных кнопок</h3>
                    <p className={cls.text}>
                        Опции по&nbsp;умолчанию с&nbsp;возможностью выбора дополнительных функций из&nbsp;выпадающего
                        списка. Синхронизация подсветки Music-lighting позволяет синхронизировать подсветку в&nbsp;такт
                        проигрываемым аудиофайлам.
                    </p>

                    <Image width={890} height={642} className={styles.image} src={'../images/gear/01/2.png'} alt={''}/>
                    <h3 className={styles.title}>Запись и сохранение макросов</h3>
                    <p className={cls.text}>
                        Режим записи и&nbsp;сохранения переключаемых макросов и&nbsp;их&nbsp;групп. Сохранённые макросы
                        добавляются в&nbsp;выпадающий список и&nbsp;доступны к&nbsp;назначению активным кнопкам.
                    </p>

                    <Image width={890} height={642} className={styles.image} src={'../images/gear/01/3.png'} alt={''}/>
                    <h3 className={styles.title}>Управление чувствительностью и скоростью отклика</h3>
                    <p className={cls.text}>
                        Настройка чувствительность мышки, скорости двойного клика, DPI.
                    </p>

                    <Image width={890} height={642} className={styles.image} src={'../images/gear/01/4.png'} alt={''}/>
                    <h3 className={styles.title}>Детальная настройка эффектов подсветки</h3>
                    <p className={cls.text}>
                        Большой выбор разнообразных эффектов.
                    </p>
                </List>

                <List item={slider02}>
                    <Image width={890} height={642} className={styles.image} src={'../images/gear/02/1.png'} alt={''}/>
                    <h3 className={styles.title}>Настройка активных кнопок</h3>
                    <p className={cls.text}>
                        Опции по&nbsp;умолчанию с&nbsp;возможностью выбора дополнительных функций из&nbsp;выпадающего
                        списка. Синхронизация подсветки Music-lighting позволяет синхронизировать подсветку в&nbsp;такт
                        проигрываемым аудиофайлам.
                    </p>

                    <Image width={890} height={642} className={styles.image} src={'../images/gear/02/2.png'} alt={''}/>
                    <h3 className={styles.title}>Запись и сохранение макросов</h3>
                    <p className={cls.text}>
                        Режим записи и&nbsp;сохранения переключаемых макросов и&nbsp;их&nbsp;групп. Сохранённые макросы
                        добавляются в&nbsp;выпадающий список и&nbsp;доступны к&nbsp;назначению активным кнопкам.
                    </p>

                    <Image width={890} height={642} className={styles.image} src={'../images/gear/02/3.png'} alt={''}/>
                    <h3 className={styles.title}>Управление чувствительностью и скоростью отклика</h3>
                    <p className={cls.text}>
                        Настройка чувствительность мышки, скорости двойного клика, DPI.
                    </p>

                    <Image width={890} height={642} className={styles.image} src={'../images/gear/02/4.png'} alt={''}/>
                    <h3 className={styles.title}>Детальная настройка эффектов подсветки</h3>
                    <p className={cls.text}>
                        Большой выбор разнообразных эффектов.
                    </p>
                </List>
            </div>

            <Download/>

            <HomeAbout boxClassName={cls.back}/>
        </div>
    );
};
