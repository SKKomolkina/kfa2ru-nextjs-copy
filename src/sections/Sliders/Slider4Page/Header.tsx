import styles from './Header.module.scss'

import Image from "next/image"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Игровая</h1>
                    <h1 className={styles.titleGradient}>мышь</h1>
                </div>
                <p className={styles.subtitle}>slider-04</p>

                <Image width={1050} height={1001} alt='' src={'../images/slider4/header/bg.svg'} className={styles.back}/>
                <Image width={627} height={498} alt='' src={'../images/slider4/header/image.png'} className={styles.image}/>
            </div>

            <div className={styles.dark}/>
        </header>
    )
}

export default Header;
