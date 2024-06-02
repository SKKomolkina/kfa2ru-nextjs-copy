import styles from './Scope.module.scss';
import Image from "next/image";

const Gtx1630Scope = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Image width={595} height={595} alt='' src={'../../images/gtx16x/scope/Ellipse.png'}
                       className={styles.ellipse}/>
                <h5 className={styles.title}>KFA2 GeForce GTX </h5>
                <p className={styles.subtitle}>
                    Больше возможностей для геймеров
                </p>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.titleContainer}>
                            <h6 className={styles.itemTitle}>
                                GeForce Experience
                            </h6>

                            <Image width={153} height={28} alt='' src={'../../images/gtx16x/scope/line.svg'}
                                   className={styles.underline}/>
                        </div>

                        <div className={styles.textContainer}>
                            <p className={styles.itemText}>
                                Всегда свежие драйвера и оптимальные настройки графики.
                            </p>
                        </div>
                    </li>

                    <div className={styles.line}/>

                    <li className={styles.item}>
                        <div className={styles.titleContainer}>
                            <h6 className={styles.itemTitle}>
                                Shadowplay
                            </h6>
                            <Image width={153} height={28} alt='' src={'../../images/gtx16x/scope/line.svg'}
                                   className={styles.underlineMid}/>
                        </div>

                        <div className={styles.textContainer}>
                            <p className={styles.itemText}>
                                Запись игровых моментов без дополнительного софта
                                и потери производительности.
                            </p>
                        </div>
                    </li>

                    <div className={styles.line}/>

                    <li className={styles.item}>
                        <div className={styles.titleContainer}>
                            <h6 className={styles.itemTitle}>
                                Ansel
                            </h6>
                            <Image width={153} height={28} alt='' src={'../../images/gtx16x/scope/line.svg'}
                                   className={styles.underlineBot}/>
                        </div>

                        <div className={styles.textContainer}>
                            <p className={styles.itemText}>
                                Создание уникальных игровых скриншотов
                                в поддерживаемых играх.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Gtx1630Scope;
