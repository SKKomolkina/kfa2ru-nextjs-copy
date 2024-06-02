import cls from './Colors.module.scss'
import styles from './Vivance32QPage.module.scss'
import Image from "next/image"

export const Colors = () => {
    return (
        <section className={`${styles.box} ${cls.section}`}>
            <h3 className={`${cls.title} ${styles.title}`}>Цветопередача</h3>
            <p className={styles.text}>
                Яркие краски, сочные оттенки.
                16,7 миллионов цветов.
            </p>

            <Image width={1280} height={800} className={cls.image}
                   src={'../../images/monitors/vivance32/colors/image.png'} alt={''}/>
        </section>
    );
};
