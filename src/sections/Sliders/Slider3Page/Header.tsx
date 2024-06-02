import styles from './Header.module.scss';

import Image from "next/image";

const Slider2Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.dark}/>

            <div className={styles.container}>
                <Image width={1031} height={899} className={styles.gradient} src={'../images/slider3/header/bg_1.png'} alt=''/>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Игровая</h1>
                    <h1 className={styles.titleSpan}>мышь</h1>
                    <h2 className={styles.subtitle}>SLIDER-03</h2>

                    <Image width={1150} height={470} className={styles.image} src={'../images/slider3/header/image.png'} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Slider2Header;
