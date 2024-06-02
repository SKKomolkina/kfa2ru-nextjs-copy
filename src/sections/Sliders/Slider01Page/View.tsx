import styles from './View.module.scss'
import Image from "next/image"

const Slider1View = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Image width={650} height={541} className={styles.image} src={'../images/slider1/view/image.png'}
                       alt=''/>
                <div className={styles.textContainer}>
                    <p className={styles.textSpan}>
                        Внешний вид тоже имеет значение.
                    </p>

                    <p className={styles.text}>
                        Мышка стильно смотрится
                        на рабочем столе геймера. Классический чёрный матовый цвет и аккуратная RGB подсветка,
                        но обо всем по порядку.
                    </p>
                </div>

                <Image width={1123} height={774} className={styles.back} src={'../images/slider1/view/Vector.svg'}
                       alt=''/>
            </div>
        </div>
    )
}

export default Slider1View;
