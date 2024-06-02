import styles from './SGPageImages.module.scss';

const SGPageImages = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <img className={styles.image} src={'../images/sg-page/images/image1.png'} alt=''/>

                <div className={styles.textContainer}>
                    <h3 className={styles.title}>12VHPWR</h3>
                    <p className={styles.subtitle}>разъём питания</p>
                </div>
            </div>
        </div>
    )
}

export default SGPageImages;
