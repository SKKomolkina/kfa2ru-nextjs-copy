import styles from './SGPageScan.module.scss';

const SGPageScan = () => {

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>KFA2</h1>
            <div className={styles.textContainer}>
                <p className={styles.text}>
                    Зарегистрированная торговая марка производственной группы Galaxy Microsystems Limited (Гонконг).
                </p>

                <button className={styles.button}>
                    <a href={'https://old.kfa2.ru/about'} target={'_blank'} className={styles.buttonText}>
                        Подробнее
                    </a>
                </button>
            </div>

            <div className={styles.imageContainer}>
                <div className={styles.noise}/>

                <button className={styles.button}>
                    <a href={'/xtreme-tuner'} target={'_blank'} className={styles.buttonText}>
                        Подробнее
                    </a>
                </button>
            </div>

            <div className={styles.lightPurple}/>
            <div className={styles.lightBlue}/>
        </section>
    )
}

export default SGPageScan;
