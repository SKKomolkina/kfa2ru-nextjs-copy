import cls from './Connect.module.scss'
import styles from './Vivance32QPage.module.scss'
import Image from "next/image";


export const Connect = () => {
    return (
        <section className={`${cls.section} ${styles.box}`}>
            <h3 className={styles.title}>Разъёмы</h3>
            <p className={styles.text}>Широкие возможности подключения.</p>

            <Image width={669} height={102} className={cls.image}
                   src={'../../images/monitors/vivance32/connect/icon.svg'} alt={''}/>

            <Image width={825} height={825} className={cls.blur}
                   src={'../../images/monitors/vivance32/osd/blur.png'} alt={''}/>
        </section>
    );
};
