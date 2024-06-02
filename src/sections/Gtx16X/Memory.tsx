import styles from './Memory.module.scss'
import Image from "next/image"

const Gtx1630Memory = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Image width={887} height={363} alt='' src={'../../images/gtx16x/memory/line.svg'}
                       className={styles.line}/>
                <Image width={595} height={595} alt='' src={'../../images/gtx16x/memory/Ellipse.svg'}
                       className={styles.ellipse}/>
                <div className={styles.titleContainer}>
                    <Image width={871} height={225} alt='Скоростная видеопамять'
                           src={'../../images/gtx16x/memory/title.svg'} className={styles.title}/>
                </div>

                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        нового поколения для быстрой отрисовки текстур
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Gtx1630Memory;
