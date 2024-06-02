import styles from './SGPageBooster.module.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";

const SGPageBooster = () => {
    return (
        <section className={styles.section}>
            <Swiper className={styles.container}>
                <SwiperSlide className={styles.card}>
                    <h4 className={styles.title}>1-Clip Booster</h4>
                    <p className={styles.text}>
                        Опциональный вентилятор для дополнительного охлаждения элементов радиатора.
                    </p>

                    <Image width={1542} height={912} className={styles.image} src={'../images/sg-page/booster/image.png'} alt=''/>
                    <p className={styles.num}>1/2</p>
                </SwiperSlide>

                <SwiperSlide className={styles.card}>
                    <h4 className={styles.title}>1-CLICK SYNC</h4>
                    <p className={styles.text}>
                        Синхронизация с остальными элементами системы.
                        Передача управления режимами подсветки системной плате либо иному внешнему контроллеру.
                    </p>

                    <p className={styles.num}>2/2</p>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default SGPageBooster;
