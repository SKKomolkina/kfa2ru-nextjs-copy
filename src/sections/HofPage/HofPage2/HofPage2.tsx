import styles from './HofPage2.module.scss';
import image from './images/image.png';

import HofPage2Static from "./HofPage2Static";

const HofPage2 = ({manrope}: any) => {
    return (
        <div className={`${styles.section}`}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>WINGS 2.0</h3>
                <p className={styles.subtitle}>
                    вентиляторы с двойным подшипником качения
                </p>
            </div>

            <div className={styles.ellipse}/>
            <img width={1800} height={1104} className={styles.image} alt='' src={'../images/hof-page/2/image.png'}/>

            <HofPage2Static manrope={manrope}/>
        </div>
    );
};

export default HofPage2;
