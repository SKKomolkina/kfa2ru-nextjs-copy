import styles from './SGPageGeforce.module.scss';

import {Swiper, SwiperSlide} from "swiper/react";
import Items from "./Items";

const SGPageGeforce = () => {
    return (
        <Swiper className={styles.section}>
            <SwiperSlide className={styles.card}>
                <div className={styles.cardTitle}>
                    <h5 className={styles.title}>
                        KFA2 <span className={styles.titleSpan}> GEFORCE RTX</span>
                    </h5>

                    <p className={styles.num}>1/3</p>
                </div>

                <div className={styles.firstSlide}>
                    <div>
                        <p className={styles.subtitle}>Игровые возможности</p>
                        <p className={styles.firstText}>
                            RayTracing <br/>
                            DLSS 3.0 <br/>
                            Reflex
                        </p>
                    </div>

                    <div>
                        <p className={styles.subtitle}>Общение без границ</p>
                        <p className={styles.firstText}>
                            Студия в домашних условиях
                            ИИ заменит фон и избавит то лишних шумов.
                        </p>
                    </div>

                    <div>
                        <p className={styles.subtitle}>Хобби
                            и творчество</p>
                        <p className={styles.firstText}>
                            Ускорение рендеринга и стабильность работы приложений для творчества.
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className={styles.card}>
                <div className={styles.cardTitle}>
                    <h5 className={styles.title}>
                        KFA2 <span className={styles.titleSpan}> GEFORCE RTX</span>
                    </h5>

                    <p className={styles.num}>2/3</p>
                </div>

                <div className={styles.secondSlide}>
                    <p className={styles.subtitle}>Реалистичная графика RayTracing</p>
                    <p className={styles.subtitle}>Технология сглаживания DLSS 3.0</p>
                    <p className={styles.subtitle}>Быстрый отклик системы Reflex</p>
                </div>
            </SwiperSlide>

            <SwiperSlide className={styles.card}>
                <div className={styles.cardTitle}>
                    <h5 className={styles.title}>
                        KFA2 <span className={styles.titleSpan}> GEFORCE RTX</span>
                    </h5>

                    <p className={styles.num}>3/3</p>
                </div>

                <Items/>
            </SwiperSlide>
        </Swiper>
    )
}

export default SGPageGeforce;
