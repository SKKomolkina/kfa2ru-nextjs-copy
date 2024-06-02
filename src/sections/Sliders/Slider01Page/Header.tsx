import styles from './Header.module.scss';
import Image from "next/image";

const Slider1Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Image width={1087} height={1036} className={styles.gradient} src={'../images/slider1/header/bg.svg'} alt=''/>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Игровая</h1>
                    <h1 className={styles.titleSpan}>мышь</h1>
                    <h2 className={styles.subtitle}>SLIDER-01</h2>

                    <Image width={1085} height={605} className={styles.image} src={'../images/slider1/header/image.png'}
                           alt=''/>
                </div>
            </div>

            <div className={styles.dark}/>
        </div>
    )
}

export default Slider1Header;
