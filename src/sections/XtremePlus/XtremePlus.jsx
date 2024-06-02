import styles from './XtremePlus.module.scss';

import subTitle from './images/line.svg';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';
import image8Mini from './images/8mini.png';

import image9 from './images/9.png';
import image10 from './images/10.png';
import image11 from './images/11.png';
import image12 from './images/12.png';
import image13 from './images/13.png';
import image14 from './images/14.png';
import image15 from './images/15.png';
import image16 from './images/16.png';
import image17 from './images/17.png';
import image18 from './images/18.png';

import image19 from './images/19.png';
import image20 from './images/20.png';

import XtremePlusMain from "./XtremePlusMain/XtremePlusMain";
import Head from "next/head";
import Image from "next/image";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";

const XtremePlus = () => {
    return (
        <main className={styles.main}>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/instructions'/>
                <title>Инструкция Xtreme Tuner - KFA2</title>
                <meta name="keywords" content="утилита xtreme tuner, инструкци xtreme tuner, xtreme tuner plus"
                />
                <meta name="description" content="Инструкция по работе и опциям утилиты Xtreme Tuner."
                />
            </Head>

            <div className={styles.header}>
                <p className={styles.subtitle}>Инструкция</p>

                <h1 className={styles.title}>Xtreme <span className={styles.titleColor}> tuner</span></h1>

                <p className={styles.subtitleText}>
                    Фирменная утилита Xtreme Tuner Plus предоставляет
                    широкие возможности для мониторинга показателей и
                    кастомизации устройств KFA2.
                </p>

                {/*<p className={styles.backgroundText}>Инструкции</p>*/}
            </div>

            <XtremePlusMain mainTitle='Xtreme Tuner Plus'>
                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image1} alt='' className={styles.imageTop}/>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            <span className={styles.textSpan}>Главные параметры </span> основного окна располагаются в
                            центре утилиты,
                            индикаторы и информационные поля размещены по бокам.
                        </p>
                        <p className={styles.text}>
                            <br/>
                            Вкладка <span className={styles.textSpan}>INFO </span> раскрывает детальные характеристики
                            графического ускорителя: <span className={styles.textSpan}> наименование
                            продукта, ID, количество ядер CUDA, тактовые частоты, ширину шипы памяти,
                            объем видеопамяти, версию BIOS.</span>
                        </p>
                    </div>
                </div>

                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image2} alt='' className={styles.image}/>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            Вторая вкладка позволяет изменять <span className={styles.textSpan}> частоты графического адаптера, Power Limit и температурную
                            границу срабатывания защиты, напряжение GPU.</span>
                        </p>

                        <p className={styles.text}>
                            Более продвинутым моделям открывается доступ
                            по регулировке напряжением памяти и оффсет для GPU Core.
                        </p>
                    </div>
                </div>

                <div className={styles.instructionContainer}>
                    <div className={styles.subtitleContainer}>
                        <p className={styles.subtitle}>Функция <span className={styles.subtitleSpan}> 1-Click OC</span>
                        </p>
                        <p className={styles.text}>
                            Видеокарты KFA2 поддерживают функцию 1-Click OC, которая позволяет произвести автоматический
                            разгон графического ускорителя в безопасных пределах без необходимости изучения тонкостей
                            оверклокинга.
                        </p>
                    </div>
                </div>

                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image3} alt='' className={styles.imageTop}/>

                    <div className={styles.textContainer}>
                        <p className={styles.textSpan}>
                            Для активации нужно кликнуть на «1-Click OC» в опциях одноимённой вкладки и нажать «Apply».
                        </p>
                    </div>

                    <Image width={760} height={372} src={image4} alt='' className={styles.image}/>
                </div>

                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image5} alt='' className={styles.image}/>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            <span className={styles.textSpan}>Функция OC Scanner </span>- автоматический разгон
                            видеокарты с постепенным наращиванием частоты,
                            при этом проводится её стресс-тест. В итоге определяется наиболее высокая частота, при
                            которой
                            система работает стабильно. Это аналог ручного разгона с безопасными автоматическими
                            действиями, отличающийся менее высоким итоговым показателем.
                        </p>
                    </div>
                </div>

                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image6} alt='' className={styles.image}/>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            Весь процесс занимает 5-30 минут в зависимости от графического адаптера.
                        </p>
                    </div>
                </div>

                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image7} alt='' className={styles.image}/>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            Вкладка <span className={styles.textSpan}> RGB</span> открывает доступ к кастомизации
                            внешнего вида видеокарты.
                            Управляемые элементы зависят от конкретной модели видеокарты.
                        </p>
                    </div>
                </div>

                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image8} alt='' className={styles.image}/>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            Во вкладке <span className={styles.textSpan}> FAN</span> происходит гибкая настройка
                            вентиляторов системы охлаждения.
                        </p>
                    </div>
                </div>

                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image9} alt='' className={styles.image}/>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            Помимо настройки <span className={styles.textSpan}> скорости вращения</span> можно задать
                            собственный <span className={styles.textSpan}> график кривой вентиляторов.</span>
                        </p>
                    </div>
                </div>

                <div className={styles.instructionContainer}>
                    <Image width={760} height={372} src={image19} alt='' className={styles.image}/>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            Вкладка <span className={styles.textSpan}> PERIPHERAL</span> даёт доступ к настройке и
                            управлению подключенными устройствами KFA2 -
                            клавиатурой, гарнитурой, мышкой. Меню автоматически определяет тип устройства и
                            предоставляет
                            доступ к расширенному функционалу настройки.
                        </p>
                    </div>
                </div>

                <Image width={1280} height={922} src={image20} alt='' className={styles.imageFull}/>

                {/**/}
                <div className={styles.instructionContainer}>
                    <div className={styles.subtitleContainer}>
                        <p className={styles.subtitle}>
                            Мобильное <span className={styles.subtitleSpan}> приложение</span>
                        </p>
                        <p className={styles.text}>
                            Для использования мобильного приложения необходимо синхронизировать его с десктоп-версией
                            утилиты. Открываем мобильное приложение и выбиваем тип подключения &laquo;QR&nbsp;code
                            Login&raquo;.
                            Сканируем
                            QR-код с экрана ПК.
                        </p>
                    </div>

                    <Image width={952} height={472} src={image5} alt='' className={styles.imageCenter}/>
                </div>

                <div className={styles.attentionContainer}>
                    <p className={styles.attentionTitle}>ВАЖНО!</p>

                    <div className={styles.attentionTextContainer}>
                        <p className={styles.attentionText}>
                            Для синхронизации мобильной
                            и десктопной версии оба устройства (ПК
                            и смартфон) должны находится в одной подсети, то есть подключены к одному
                            и тому же сегменту локальной сети.
                        </p>
                        <p className={styles.attentionText}>
                            <br/>QR-код может не считаться с первого раза.
                            Попробуйте отдалить камеру смартфона от экрана.
                        </p>
                    </div>
                </div>

                <div className={styles.rowContainer}>
                    <p className={styles.rowText}>
                        Основные вкладки и параметры Xtreme Tuner практически идентичны полноценной компьютерной версии.
                        <br/>
                        <br/>
                        <span className={styles.textSpan}>
                        Доступны информация о системе, тонкая
                        настройка, управление кулером и подсветкой.
                            </span>
                    </p>

                    <div className={styles.rowImagesContainer}>
                        <Image width={271} height={566} className={styles.rowImage} alt='' src={image11}/>
                        <Image width={271} height={566} className={styles.rowImage} alt='' src={image12}/>
                    </div>
                </div>

                <div className={styles.rowContainer}>
                    <p className={styles.rowText}>
                        <span className={styles.textSpan}>
                        Детальные характеристики графического адаптера.
                            </span>
                        <br/>
                        <br/>
                        С мобильного приложения Xtreme Tuner <span className={styles.textSpan}> имеется доступ изменения
                        тактовых частот ядра и памяти, повышение напряжение GPU, регулировка
                        Power Limit и Temt Target.</span>
                        <br/>
                        <br/>
                        Для удобной навигации и сохранения настроек
                        имеется четыре профиля.
                    </p>

                    <div className={styles.rowImagesContainer}>
                        <Image width={271} height={566} className={styles.rowImage} alt='' src={image13}/>
                        <Image width={271} height={566} className={styles.rowImage} alt='' src={image14}/>
                    </div>
                </div>

                <div className={styles.rowContainer}>
                    <p className={styles.rowText}>
                        Вкладки <span className={styles.textSpan}>
                         управления вентиляторами системы охлаждения и подсветкой.
                    </span>
                        <br/>
                        <br/>
                        Доступные
                        функции и области подсветки зависят от конкретной модели видеокарты.
                    </p>

                    <div className={styles.rowImagesContainer}>
                        <Image width={271} height={566} className={styles.rowImage} alt='' src={image15}/>
                        <Image width={271} height={566} className={styles.rowImage} alt='' src={image16}/>
                    </div>
                </div>

                <div className={styles.rowContainer}>
                    <p className={styles.rowText}>
                        Мониторинг отображает основную информацию о <span className={styles.textSpan}> температурных данных ускорителя,
                        скорости кулера, напряжении, скорости Wi-Fi соединения и графики температуры.
                    </span>
                    </p>

                    <div className={styles.rowImagesContainer}>
                        <Image width={271} height={566} className={styles.rowImage} alt='' src={image17}/>
                        <Image width={271} height={566} className={styles.rowImage} alt='' src={image18}/>
                    </div>
                </div>
            </XtremePlusMain>

            <HomeAbout/>
        </main>
    )
}

export default XtremePlus;
