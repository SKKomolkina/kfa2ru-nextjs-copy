import styles from './Simple.module.scss'
import Image from "next/image"

const Slider4Simple = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Image width={700} height={922} alt='' src={'../images/slider4/simple/Vector.svg'} className={styles.vector}/>
                <Image width={780} height={620} alt='' src={'../images/slider4/simple/image.png'} className={styles.image}/>

                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Компьютерная мышка проста
                        в уходе. Достаточно протирать ее мягкой тряпочкой или специальными салфетками
                        для техники.
                    </p>

                    <p className={styles.text}>
                        <span className={styles.textSpan}>Остановите свой выбор </span>
                        на компьютерной мышке SLIDER-04 и получите удовольствие от игр на долгие годы.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Slider4Simple;
