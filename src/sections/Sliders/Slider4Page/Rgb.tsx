import styles from './Rgb.module.scss'

import Image from "next/image"

const Slider4Rgb = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        <span className={styles.textSpan}>RGB подсветка </span>
                        Мышка от KFA 2 имеет исключительный дизайн — рисунок по бокам с RGB подсветкой.
                    </p>

                    <p className={styles.text}>
                        Цвета подсветки «мягкие», не раздражают глаз. И даже
                        в темной комнате свечение будет приятным и приглушённым.
                    </p>
                </div>

                <Image width={715} height={766} alt='' src={'../images/slider4/rgb/image.png'} className={styles.image}/>
            </div>

            <div className={styles.dark}/>
        </section>
    )
}

export default Slider4Rgb;
