import styles from './HofPage8.module.scss';
import titleStyles from '../HofPage.module.scss';
import image from './images/image.png';

const HofPage8 = ({manrope}: any) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className={titleStyles.title}>DUAL BIOS</h2>
                    <p className={`${styles.subtitle}`}>
                        Переключение режимов работы микро-кода BIOS
                    </p>
                </div>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p className={styles.itemSubtitle}>S-MOD</p>
                        <p className={`${manrope.className} ${styles.text}`}>
                            Стандартный режим работы видеокарты.
                        </p>
                    </li>

                    <li className={styles.item}>
                        <p className={styles.itemSubtitle}>P-MOD</p>
                        <p className={`${manrope.className} ${styles.text}`}>
                            Режим повышенной производительности для профессионалов.
                        </p>
                    </li>
                </ul>
            </div>

            <img width={1920} height={1082} className={styles.image} src={'../images/hof-page/8/image.png'} alt=''/>
        </section>
    );
};

export default HofPage8;
