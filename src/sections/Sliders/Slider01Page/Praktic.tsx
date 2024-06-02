import styles from './Praktic.module.scss'
import Image from "next/image"

const Slider1Praktic = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.imagesContainer}>
                    <Image width={885} height={591} className={styles.image} src={'../images/slider1/praktic/image.png'} alt=''/>
                    <Image width={390} height={261} className={styles.imageMini} src={'../images/slider1/praktic/imageMini.png'} alt=''/>

                </div>

                <p className={styles.text}>
                    <span className={styles.textSpan}>SLIDER-01 </span> - практичный функционал, качественное
                    оформление и удобство.
                    Подходит пользователям, которые каждый день проводят время за компьютером от 2-х до 10-и часов.
                </p>
            </div>
            <div className={styles.dark}/>
        </div>
    )
}

export default Slider1Praktic;
