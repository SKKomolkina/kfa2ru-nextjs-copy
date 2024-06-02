import cls from './Care.module.scss'
import styles from './Vivance32QPage.module.scss'
import Image from "next/image";

export const Care = () => {
    return (
        <section className={`${styles.box} ${cls.section}`}>
            <Image width={1829} height={1030} className={cls.image}
                   src={'../../images/monitors/vivance32/care/image.png'} alt={''}/>

            <h3 className={styles.title}>Eye Care</h3>
            <p className={styles.text}>
                Монитор с&nbsp;фильтрацией синего цвета позволяет более комфортно работать в&nbsp;темное время суток,
                минимизируя нагрузку на&nbsp;глаза.
            </p>
        </section>
    );
};
