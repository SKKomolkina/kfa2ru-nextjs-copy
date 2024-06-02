import styles from './Download.module.scss';

import Image from "next/image";

const Gtx1630Download = () => {
    return (
        <section className={styles.section}>
            <ul className={styles.container}>

                <Image width={729} height={739} alt='' src={'../../images/gtx16x/download/line.svg'}
                       className={styles.line}/>

                <li className={styles.top}>
                    <div className={styles.titleContainer}>
                        <Image width={135} height={130} alt='' src={'../../images/gtx16x/download/star.svg'}
                               className={styles.star}/>
                        <h5 className={styles.title}>XTREME TUNER </h5>
                        <h5 className={styles.titleSpan}>КОГДА НУЖНО БОЛЬШЕ </h5>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            Фирменная утилита позволит контролировать параметры
                            системы в реальном времени и у правлять работой
                            видеокарты с десктопа или смартфона.
                        </p>

                        <a href='https://old.kfa2.ru/xtplus' className={styles.button}>
                            Подробнее
                            <Image width={128} height={29} alt='' src={'../../images/gtx16x/download/button.svg'}
                                   className={styles.buttonImage}/>
                        </a>
                    </div>
                </li>
                <li className={styles.mid}>
                    <div className={styles.titleContainer}>
                        <Image width={135} height={130} alt='' src={'../../images/gtx16x/download/star.svg'}
                               className={styles.star}/>
                        <h5 className={styles.title}>OC SCANNER</h5>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            Сканирование компонентов системы со встроенным тестированием применяет
                            оптимальные настройки разгона и даёт приятный прирост игровой производительности.
                        </p>

                        <a href='https://old.kfa2.ru/xtreme-tuner-plus' className={styles.button}>
                            Подробнее
                            <Image width={128} height={29} alt='' src={'../../images/gtx16x/download/button.svg'}
                                   className={styles.buttonImage}/>
                        </a>
                    </div>
                </li>
                <li className={styles.bot}>
                    <div className={styles.titleContainer}>
                        <Image width={135} height={130} alt='' src={'../../images/gtx16x/download/star.svg'}
                               className={styles.star}/>
                        <h5 className={styles.title}>1-CLICK OC</h5>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            + ФПС в один клик мыши
                        </p>

                        <p className={styles.text}>
                            Функция 1-Click OC автоматически разгоняет видеокарту в безопасных пределах в одно нажатие.
                        </p>

                        <a href='https://old.kfa2.ru/xtreme-tuner-plus' className={styles.button}>
                            Подробнее
                            <Image width={128} height={29} alt='' src={'../../images/gtx16x/download/button.svg'}
                                   className={styles.buttonImage}/>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Gtx1630Download;
