import styles from './HofPage1.module.scss';
import titleStyles from '../HofPage.module.scss';

import image from './images/image.png';
import {NextFont} from "@next/font";

const HofPage1 = ({manrope}: any) => {
    return (
        <section className={styles.section}>
            <div className={styles.textContainer}>
                <h2 className={titleStyles.title}>ЧИСТАЯ МОЩЬ</h2>

                <p className={`${manrope.className} ${styles.text}`}>
                    Всё, что нужно для рекордов. <br/>
                    <br/>
                    Уникальная печатная плата с отборными компонентами и 28+4 фазами питания.
                    Для подключения используются два разъёма 12VHPWR.
                </p>
            </div>

            <img width={1540} height={450} className={styles.image} src={'../images/hof-page/1/image.png'} alt=''/>
        </section>
    );
};

export default HofPage1;
