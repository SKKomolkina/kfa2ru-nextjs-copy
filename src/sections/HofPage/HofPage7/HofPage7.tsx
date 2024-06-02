import styles from './HofPage7.module.scss';
import titleStyles from '../HofPage.module.scss';

import image from './images/images.png';

const HofPage7 = () => {
    return (
        <section className={styles.section}>
            <h2 className={titleStyles.title}>
                Металлический бэкплейт
            </h2>

            <img width={1540} height={1084} className={styles.image} src={'../images/hof-page/7/images.png'} alt=''/>
        </section>
    );
};

export default HofPage7;
