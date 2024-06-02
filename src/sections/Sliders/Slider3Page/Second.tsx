import styles from './Second.module.scss'
import Image from "next/image";

const Second = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Image width={635} height={841} className={styles.vector} src={'../images/slider3/2/Vector.svg'} alt=''/>
                <Image width={565} height={678} className={styles.image} src={'../images/slider3/2/image.png'} alt=''/>

                <p className={styles.text}>
                    <span className={styles.textSpan}>Главное орудие геймера, </span>
                    его волшебная палочка-выручалочка — компьютерная мышь SLIDER-03.
                    Мышка стильно смотрится
                    на рабочем столе геймера. Классический чёрный матовый цвет и аккуратная RGB подсветка, но обо всем
                    по порядку.
                </p>
            </div>
        </div>
    )
}

export default Second
