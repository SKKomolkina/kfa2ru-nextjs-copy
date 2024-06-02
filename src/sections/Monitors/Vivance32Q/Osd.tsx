import cls from './Osd.module.scss'
import styles from './Vivance32QPage.module.scss'
import Image from "next/image";

export const Osd = () => {
    return (
        <section className={`${styles.box} ${cls.section}`}>
            <h3 className={styles.title}>OSD</h3>
            <p className={styles.text}>
                Детальная настройка. Встроенное програмное обеспечение позволит максимально настроить монитор под
                различные ситуации и&nbsp;индивидуальные особенности. Простое меню и&nbsp;полная поддержка русского
                языка.
            </p>

            <Image width={631} height={407} className={cls.image}
                   src={'../../images/monitors/vivance32/osd/image.png'} alt={''}/>
        </section>
    );
};
