import styles from './SGPageAboutPromo.module.scss';

const SGPageAboutPromo = () => {
    return (
        <div className={styles.section}>
            {/*<img className={styles.light} src={'./images/sg-page/promo/lights.png'} alt=''/>*/}
            {/*<img className={styles.noise} alt='' src={noise}/>*/}

            <div className={styles.container}>
                <img className={styles.image} src={'../images/sg-page/promo/image.png'} alt=''/>
                <ul className={styles.textContainer}>
                    <li className={styles.item}>
                        <p className={styles.text}>
                            ТРИ больших вентилятора WINGS 2.0
                        </p>
                    </li>

                    <li className={styles.item}>
                        <p className={styles.text}>
                            испарительная камера
                        </p>
                    </li>

                    <li className={styles.item}>
                        <p className={styles.text}>
                            высокий набранный радиатор
                        </p>
                    </li>

                    <li className={styles.item}>
                        <p className={styles.text}>
                            множество тепловых трубок
                        </p>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SGPageAboutPromo;
