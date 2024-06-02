import styles from './Ergonomic.module.scss'
import Image from "next/image"

const Ergonomic = () => {
    return (
        <div className={styles.main}>
            <div className={styles.dark}/>

            <div className={styles.container}>
                <h3 className={styles.title}>Эргономичность</h3>
                <p className={styles.text}>
                    Мышь, которая идеально подобрана под форму запястья. Позволяет держать руку без лишнего
                    напряжения и давления на кисть. Вы не ощутите дискомфорта спустя несколько часов игр.
                </p>

                <Image width={1450} height={728} className={styles.image} src={'../images/slider3/ergonomic/image.png'} alt=''/>
            </div>
        </div>
    )
}

export default Ergonomic
