import styles from './HofPage10.module.scss';

const HofPage10 = ({manrope}: any) => {
    return (
        <div className={styles.section}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>ДВОЙНОЕ НАЗНАЧЕНИЕ</p>
                <p className={`${manrope.className} ${styles.subtitle}`}>
                    Магнитная корона легко отсоединяется и&nbsp;может быть прикреплена к&nbsp;любой подходящей
                    поверхности*. <br/>
                    <br/>
                    Корона служит индикатором состояния правильности подключения коннекторов видеокарты.
                </p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.textContainerItem}>
                    <p className={styles.textColor}>Жёлтый</p>
                    <p className={styles.text}>
                        Коннектор питания 12VHPWR подключен некорректно.
                    </p>
                </div>

                <div className={styles.textContainerItem}>
                    <p className={styles.textColorRed}>Красный</p>
                    <p className={styles.text}>
                        Коннекторы питания системной платы подключены некорректно.
                    </p>
                </div>
            </div>

            <img width={2582} height={1146} className={styles.image} alt='' src={'../images/hof-page/10/image.png'}/>
        </div>
    );
};

export default HofPage10;
