import styles from './Rgb.module.scss'
import Image from "next/image"

const Slider1Rgb = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>RGB подсветка</h3>
                    <p className={styles.text}>
                        Подсветка не агрессивна.
                        И при полной затемненности в комнате, ее цвета «мягкие».
                        Подсветка стильно смотрится по боковым краям компьютерной мышки.
                    </p>
                </div>

                <Image width={1040} height={581} className={styles.image} src={'../images/slider1/rgb/image.png'} alt=''/>
            </div>
        </div>
    )
}

export default Slider1Rgb;
