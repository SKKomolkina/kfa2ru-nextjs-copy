import styles from './HofPage5.module.scss';
import titleStyles from '../HofPage.module.scss';

const HofPage5 = () => {
    return (
        <div className={styles.section}>
            <h2 className={titleStyles.title}>FAN-STOP</h2>
            <p className={styles.text}>
                Вентиляторы стартуют при температуре GPU 60&deg; c
            </p>
        </div>
    );
};

export default HofPage5;
