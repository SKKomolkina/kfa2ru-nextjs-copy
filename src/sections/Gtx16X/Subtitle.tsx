import styles from './Subtitle.module.scss'
import Image from "next/image"

const Subtitle = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Image width={1041} height={651} alt='' src={'../../images/gtx16x/subtitle/image.png'}
                       className={styles.image}/>
                <Image width={1375} height={711} alt='' src={'../../images/gtx16x/subtitle/lines.svg'}
                       className={styles.lines}/>

                <div className={styles.titleContainer}>
                    <Image width={911} height={158} alt='GeForce' src={'../../images/gtx16x/subtitle/GeForce.svg'}
                           className={styles.titleBorder}/>

                    <h2 className={styles.title}>
                        GTX 16
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Subtitle;
