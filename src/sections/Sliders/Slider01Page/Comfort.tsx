import styles from './Comfort.module.scss';
import image1 from './Slider1Comfort/images/1.png';
import image2 from './Slider1Comfort/images/2.png';
import image3 from './Slider1Comfort/images/3.png';
import image4 from './Slider1Comfort/images/4.png';
import Image from "next/image";

const Slider1Comfort = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p className={styles.text}>
                    <span className={styles.textSpan}>Удобная и функциональная компьютерная мышь </span>
                    с плавными линиями, обтекаемой формы. В ней нет ничего лишнего.
                </p>

                <div className={styles.imagesContainer}>
                    <div className={styles.imagesContainerFirst}>
                        <div className={styles.itemImageRight}>
                            <p className={styles.about}>
                                <span className={styles.aboutSpan}>Настраиваются под себя: </span>
                                «колесико» или скролл для перематывания страницы, левая и правая кнопки,
                                боковые «вперёд» и «назад» для веб-навигации.
                            </p>
                            <Image width={240} height={240} alt='' className={styles.image} src={'../images/slider1/comfort/1.png'}/>
                        </div>

                        <div className={styles.itemImageRight}>
                            <p className={styles.about}>
                                <span className={styles.aboutSpan}>Тканевая оплётка кабеля </span>
                                сохранит его первоначальный вид на несколько лет. «Заломы» на таком кабеле невозможны.
                            </p>
                            <Image width={240} height={240} alt='' className={styles.image} src={'../images/slider1/comfort/2.png'}/>
                        </div>
                    </div>

                    <div className={styles.imagesContainerSecond}>
                        <div className={styles.itemImageLeft}>
                            <Image width={240} height={240} alt='' className={styles.image} src={'../images/slider1/comfort/3.png'}/>

                            <p className={styles.about}>
                                <span className={styles.aboutSpan}>8 </span>
                                удобно расположенных программируемых кнопок.
                            </p>
                        </div>

                        <div className={styles.itemImageLeft}>
                            <Image width={240} height={240} alt='' className={styles.image} src={'../images/slider1/comfort/4.png'}/>

                            <p className={styles.about}>
                                Кнопка для максимального значения
                                <span className={styles.aboutSpan}> DPI.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider1Comfort;
