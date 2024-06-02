import styles from './View.module.scss';

import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import Image from "next/image";

const View = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p className={styles.text}>
                    <span className={styles.textSpan}>Согласитесь, <br/> приятно погрузиться в виртуальные игровые миры, </span>
                    когда внешнее и внутренее оформление устройства сделано качественно.
                </p>

                <div className={styles.imagesContainer}>
                    <div className={styles.imagesContainerFirst}>
                        <div className={styles.itemImageRight}>
                            <p className={styles.about}>
                                Кабель компьютерной мыши в специальной
                                <span className={styles.aboutSpan}> тканевой оплётке, </span> которая практична
                                в использовании.
                            </p>
                            <Image width={240} height={240} alt='' className={styles.image} src={'../images/slider4/view/1.png'}/>
                        </div>

                        <div className={styles.itemImageRight}>
                            <p className={styles.about}>
                                Компьютерная мышь имеет <br/>
                                <span className={styles.aboutSpan}> 7 кнопок. </span>
                                Мягкий и плавный скролл по центру, левая и правая кнопки управления,
                                «вперёд» и «назад» для веб-навигации, скорость перемещения курсора,
                                кнопка регулировки
                                подсветки.
                            </p>
                            <Image width={240} height={240} alt='' className={styles.image} src={'../images/slider4/view/2.png'}/>
                        </div>
                    </div>

                    <div className={styles.imagesContainerSecond}>
                        <div className={styles.itemImageLeft}>
                            <Image width={240} height={240} alt='' className={styles.image} src={'../images/slider4/view/3.png'}/>

                            <p className={styles.about}>
                                Стильный матовый чёрный корпус создаёт особую эстетическую привлекательность
                                на рабочем столе.
                            </p>
                        </div>

                        <div className={styles.itemImageLeft}>
                            <Image width={240} height={240} alt='' className={styles.image} src={'../images/slider4/view/4.png'}/>

                            <p className={styles.about}>
                                Не стоит волноваться, что провод «заломится». Тканевый кабель — гибкий,
                                <span className={styles.aboutSpan}> легко фиксируется </span>
                                в нужном положении и обладает высокими скользящими данными на любых поверхностях.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;
