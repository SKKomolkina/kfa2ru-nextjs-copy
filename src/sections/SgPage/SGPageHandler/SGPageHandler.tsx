import styles from './SGPageHandler.module.scss';

// import {Link, useHistory} from "react-router-dom";
import {useState} from "react";

const SGPageHandler = () => {
    const [metal, setMetal] = useState(true);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h4 className={styles.title}>ВСЕГДА ПОДДЕРЖИТ_</h4>

                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        В&nbsp;комплекте с&nbsp;KFA2 серии GeForce RTX 40&nbsp;SG/ST поставляется держатель для
                        видеокарты. Внешний вид и&nbsp;функционал держателя зависят от&nbsp;конкретной модели
                        видеокарты.¹
                    </p>

                    <div className={styles.textColor}>
                        <p onClick={() => setMetal(true)}
                           className={metal ? styles.textColor : styles.textColorSpan}>Тёмный Обелиск</p>
                        <p onClick={() => setMetal(false)} className={metal ? styles.textColorSpan : styles.textColor}>|
                            Метал</p>
                    </div>

                    {!metal ? (
                        <p className={styles.text}>
                            Компактный металлический держатель с регулируемой высотой.
                        </p>
                    ) : (
                        <p className={styles.text}>
                            Держатель с&nbsp;aRGB подсветкой и&nbsp;возможностью синхронизации с&nbsp;остальными
                            элементами
                            системы.
                        </p>
                    )}

                    <div className={styles.links}>
                        <a className={styles.link}>
                            <svg className={styles.arr} width="48" height="24" viewBox="0 0 48 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.8462 2L46 12L35.8462 22M44.5897 12H1" stroke="white" strokeWidth="2"
                                      strokeMiterlimit="10" strokeLinecap="square"/>
                            </svg>

                            <p className={styles.text}>
                                Подробнее
                            </p>
                        </a>

                        <a className={styles.link}>
                            <svg className={styles.arr} width="48" height="24" viewBox="0 0 48 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.8462 2L46 12L35.8462 22M44.5897 12H1" stroke="white" strokeWidth="2"
                                      strokeMiterlimit="10" strokeLinecap="square"/>
                            </svg>

                            <p className={styles.text}>
                                Инструкция
                            </p>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.imageContainer}>
                {!metal ? <img className={styles.image2} src={'../images/sg-page/handler/image2.png'} alt=''/> :
                    <img className={styles.image} src={'../images/sg-page/handler/image.png'} alt=''/>}

                <div className={styles.blueLight}/>
                <div className={styles.purpleLight}/>
            </div>
        </section>
    )
}

export default SGPageHandler;
