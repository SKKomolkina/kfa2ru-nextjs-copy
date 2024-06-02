import styles from './HofPage14.module.scss';
import titleStyles from '../HofPage.module.scss';
import buttonStyles from '../About.module.scss';

interface HofPage14Props {
    color?: boolean;
}

const HofPage14 = ({color}: HofPage14Props) => {

    return (
        <section className={styles.section}>
            <div className={styles.textContainer}>
                <h2 className={titleStyles.title}>HOF AI </h2>
                <p className={styles.text}>
                    Специальная утилита для настройки видеокарт серии HOF. Поддерживается детальная настройка HOF PANEL
                    III.
                </p>

                <a
                    href={'/hof-ai'}
                    className={color ? buttonStyles.buttonColor : buttonStyles.button}
                >
                    <p className={buttonStyles.buttonText}>Подробнее</p>
                </a>
            </div>

            <img width={1085} height={837} className={styles.imageWhite} src={'../images/hof-page/14/white.png'} alt=''/>
            <img width={1061} height={494} className={styles.imageBlack} src={'../images/hof-page/14/black.png'} alt=''/>
        </section>
    );
};

export default HofPage14;
