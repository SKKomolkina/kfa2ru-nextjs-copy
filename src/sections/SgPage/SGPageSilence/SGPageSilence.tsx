import styles from './SGPageSilence.module.scss';

import SGPageSubtitle from "../SGPageSubtitle";

const SGPageSilence = () => {
    return (
        <section className={styles.section}>
            <div className={styles.textContainer}>
                <SGPageSubtitle underline={'_'} title={'Тишина'}/>
            </div>
        </section>
    )
}

export default SGPageSilence;
