import cls from './Title.module.scss'
import styles from './HofAi.module.scss'

export const Title = () => {
    return (
        <section className={`${styles.box} ${cls.section}`}>
            <h1 className={styles.pageTitle}>
                HOF AI
            </h1>
            <h2 className={styles.subtitle}>
                Ворвись в зал славы
            </h2>

            <p className={styles.text}>
                Утилита HOF AI&nbsp;разработана специально для управления видеокартами серии Hall Of&nbsp;Fame
                и&nbsp;поддерживает широкой спектр возможностей по&nbsp;настройке.
            </p>
        </section>
    );
};
