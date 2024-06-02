import styles from './HofPage3.module.scss';

const HofPage3 = () => {
    return (
        <div className={styles.section}>
            <p className={styles.title}>
                Испарительная камера
            </p>
            <p className={styles.title}>
                9 тепловых трубок
            </p>

            <div className={styles.ellipse}/>
            <img width={1280} height={856} className={styles.image} src={'../images/hof-page/3/image.png'} alt=''/>
        </div>
    );
};

export default HofPage3;
