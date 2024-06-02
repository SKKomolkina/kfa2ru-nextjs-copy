import styles from './HofPage6.module.scss';
import titleStyles from '../HofPage.module.scss';

const HofPage6 = () => {
    return (
        <section className={styles.section}>
            <h2 className={titleStyles.title}>эЛЕМЕНТНАЯ БАЗА</h2>
            <p className={styles.subtitle}>
                Печатная плата собственного дизайна с отборными копмонентами
            </p>

            <img width={1540} height={812} className={styles.image} src={'../images/hof-page/6/image.png'} alt=''/>
        </section>
    );
};

export default HofPage6;
