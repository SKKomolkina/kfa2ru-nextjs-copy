import cls from './Step.module.scss'
import styles from './Vivance32QPage.module.scss'
import Image from "next/image";

export const Step = () => {
    return (
        <div className={`${styles.box} ${cls.section}`}>
            <Image width={1750} height={984} className={cls.image}
                   src={'../../images/monitors/vivance32/step/image.png'} alt={''}/>

            <p className={cls.text}>
                <span className={cls.textSpan}>VIVANCE </span> Откройте новый уровень восприятия и&nbsp;получите все,
                что заслуживаете!
            </p>
        </div>
    );
};
