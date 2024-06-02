import styles from './HofPage9.module.scss';

const HofPage9 = () => {
    return (
        <section className={styles.section}>

            <h3 className={styles.title}>
                ARGB ЭФФЕКТ
            </h3>
            <p className={styles.subtitle}>
                Стильный и ненавязчивый. <br/>
                Приятная адресуемая 12V подсветка
                с возможностью синхронизации.
            </p>

            <img width={3041} height={2000} className={styles.image} alt='' src={'../images/hof-page/9/image.png'}/>
        </section>
    );
};

export default HofPage9;
