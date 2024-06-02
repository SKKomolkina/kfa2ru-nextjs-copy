import styles from './SGPageCoolerTitle.module.scss';

import SGPageSubtitle from "../SGPageSubtitle";

const SGPageCoolerTitle = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img className={styles.light} alt='' src={'../images/sg-page/cooler-title/light.png'}/>
                <SGPageSubtitle title={'Массивная система охлаждения'} underline={'_'}/>
            </div>

            <div className={styles.imageContainer}>

                <p className={styles.text}>
                    х3 больших вентилятора WINGS 2.0
                </p>

                <p className={styles.text}>
                    испарительная камера
                </p>

                <p className={styles.text}>
                    высокий набранный радиатор
                </p>

                <p className={styles.text}>
                    множество тепловых трубок
                </p>
            </div>

            <div className={styles.back}/>
        </section>
    )
}

export default SGPageCoolerTitle;
