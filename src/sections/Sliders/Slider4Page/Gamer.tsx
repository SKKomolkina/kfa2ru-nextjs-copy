import styles from './Gamer.module.scss'
import Image from "next/image"

const Gamer = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Image width={635} height={841} alt='' src={'../images/slider4/gamer/Vector.svg'} className={styles.vector}/>
                <Image width={435} height={622} alt='' src={'../images/slider4/gamer/image.png'} className={styles.image}/>

                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        <span className={styles.textSpan}>Главное орудие геймера, </span>
                        его волшебная палочка-выручалочка — компьютерная мышь SLIDER-04.
                        Материал корпуса, кнопок, подсветка, быстрота движения, скорость
                        нажатия — все это влияет на качество игрового процесса.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Gamer;
