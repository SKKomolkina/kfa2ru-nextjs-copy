import styles from './SGPageSlider.module.scss';

const SGPageSlider = () => {
    return (
        <div className={styles.section}>
            <div className={styles.horizontalLine}/>
            <div className={styles.margin}/>
            <div className={styles.horizontalLine}/>
            <div className={styles.margin}/>
            <div className={styles.horizontalLine}/>

            <div className={styles.backgroundTop}/>
            <div className={styles.horizontalLine}/>
            <div className={styles.backgroundBot}/>

            <div className={styles.horizontalLine}/>
            <div className={styles.margin}/>
            <div className={styles.horizontalLine}/>
            <div className={styles.margin}/>
            <div className={styles.horizontalLine}/>
        </div>
    )
}

export default SGPageSlider;
