import styles from './Ergonomic.module.scss'
import Image from "next/image"

const Ergonomic = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Эргономичность</h2>

                    <p className={styles.text}>
                        Мышь, которая идеально подобрана под форму запястья. Позволяет держать руку без лишнего
                        напряжения и давления на кисть. Вы не ощутите дискомфорта спустя несколько часов игр.
                    </p>
                </div>

                <Image width={1450} height={698} alt='' src={'../images/slider4/ergonomic/image.png'} className={styles.image}/>
            </div>

            <div className={styles.dark}/>
        </section>
    )
}

export default Ergonomic;
