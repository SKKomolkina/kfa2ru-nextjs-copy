import styles from './Choice.module.scss'
import Image from "next/image"

const Choice = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Image width={762} height={1004} alt='' className={styles.gradient} src={'../images/slider3/choice/Vector.svg'}/>
                <Image width={715} height={762} alt='' className={styles.image} src={'../images/slider3/choice/image.png'}/>

                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Компьютерная мышка проста
                        в уходе. Достаточно протирать ее мягкой тряпочкой или специальными салфетками
                        для техники.
                    </p>

                    <p className={styles.text}>
                        <span className={styles.textSpan}>Остановите свой выбор </span> на компьютерной мышке SLIDER-03 и получите удовольствие от игр на долгие годы.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Choice;
