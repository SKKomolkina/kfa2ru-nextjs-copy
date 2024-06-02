import styles from './HofPage13.module.scss';
import textStyles from '../HofPage.module.scss';
import image from './images/image.png';

const HofPage13 = () => {
    return (
        <div className={styles.section}>
            <div className={styles.titleContainer}>
                <p className={textStyles.title}>НАДЁЖНАЯ ОПОРА</p>
                <p className={textStyles.text}>
                    Держатель для видеокарты в комплекте.
                </p>
            </div>

            <p className={styles.textAbsolute}>Держатель</p>
            <img width={695} height={1234} className={styles.image} alt='' src={'../images/hof-page/13/image.png'}/>
            <div className={styles.ellipse}/>
        </div>
    );
};

export default HofPage13;
