import styles from './HofPage2Static.module.scss';

const HofPage2Static = ({manrope}: any) => {
    return (
        <div className={styles.container}>
            <ul className={styles.titleContainer}>
                <li className={styles.title}>
                    <div className={styles.titleEllipse}/>
                    <p className={styles.titleText}>wings 2.0</p>
                </li>

                <li className={styles.title}>
                    <div className={styles.titleEllipse}/>
                    <p className={styles.titleText}>wings 1.0</p>
                </li>
            </ul>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <p className={styles.num}>+25%</p>

                    <div className={styles.itemContainer}>
                        <div className={styles.gradientLine} style={{width: '100%'}}/>
                        <div className={styles.grayLine} style={{width: '62%'}}/>
                        <p className={`${manrope.className}  ${styles.itemText}`}>Максимальная подача воздуха</p>
                    </div>
                </li>

                <li className={styles.item}>
                    <p className={styles.num}>+15%</p>

                    <div className={styles.itemContainer}>
                        <div className={styles.gradientLine} style={{width: '85%'}}/>
                        <div className={styles.grayLine} style={{width: '62%'}}/>
                        <p className={`${manrope.className} ${styles.itemText}`}>Максимальное давление воздуха</p>
                    </div>
                </li>

                <li className={styles.item}>
                    <p className={styles.num}>-50%</p>

                    <div className={styles.itemContainer}>
                        <div className={styles.gradientLine} style={{width: '33%'}}/>
                        <div className={styles.grayLine} style={{width: '62%'}}/>
                        <p className={`${manrope.className} }${styles.itemText}`}>Площадь перекрытия воздуха</p>
                    </div>
                </li>
            </ul>

            <p className={`${manrope.className} ${styles.span}`}>
                *В сравнении с WINGS 1.0 по результатам внутренних тестирований отдела разработки (R&D)
            </p>
        </div>
    );
};

export default HofPage2Static;
