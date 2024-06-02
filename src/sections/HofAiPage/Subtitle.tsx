import cls from './Subtitle.module.scss'
import styles from './HofAi.module.scss'

export const Subtitle = () => {
    return (
        <section className={`${styles.box} ${cls.section}`}>
            <div className={cls.shadow}/>
            <h3 className={styles.title}>Выбери свой вариант подключения</h3>
            <p className={styles.text}>Десктоп и мобильное приложение</p>

            <a href={'/instructions'} className={styles.button}>Подробнее</a>
        </section>
    );
};
