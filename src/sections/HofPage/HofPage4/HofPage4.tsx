import styles from './HofPage4.module.scss';
import titleStyles from '../HofPage.module.scss';

import image from './images/image.png';
import imageL from './images/imageL.png';
import imageR from './images/imageR.png';

const HofPage4 = ({manrope}: any) => {
    return (
        <section className={styles.section}>
            <img width={1145} height={1145} className={styles.image} src={'../images/hof-page/4/image.png'} alt=''/>

            <div className={styles.textContainer}>
                <h2 className={titleStyles.title}>HYPER BOOST</h2>
                <p className={`${styles.text}`}>
                    Два режима работы вентиляторов
                </p>
            </div>

            <ul className={`${manrope.className} ${styles.list}`}>
                <li className={styles.item}>
                    <img width={240} height={216} src={'../images/hof-page/4/imageL.png'} alt=''/>

                    <p className={styles.itemTitle}>Активный</p>
                    <p className={styles.itemText}>
                        Вентиляторы работают на&nbsp;100%, снижая температуру GPU
                        в&nbsp;пределах 10&deg;&nbsp;C.
                    </p>
                </li>

                <li className={styles.item}>
                    <img width={240} height={216} src={'../images/hof-page/4/imageR.png'} alt=''/>

                    <p className={styles.itemTitle}>Автоматический</p>
                    <p className={styles.itemText}>
                        Базовый режим работы вентиляторов.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default HofPage4;
