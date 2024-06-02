import cls from './Panel.module.scss'
import styles from './HofAi.module.scss'
import Image from "next/image";

export const Panel = () => {
    return (
        <>
            <div className={`${styles.box} ${cls.box1}`}>
                <div className={cls.vector}/>
                <Image className={cls.image} width={1025} height={579} src={'../images/hof-ai/panel/image.png'}
                       alt={''}/>

                <h3 className={styles.title}>HOF PANEL III</h3>
                <p className={styles.text}>
                    Настраиваемый дисплей, который поддерживает два режима работы:
                </p>
            </div>

            <div className={`${styles.box} ${cls.box2}`}>
                <h4 className={cls.subtitle}>
                    Информативный
                </h4>

                <p className={styles.text}>
                    При включенной утилите HOF AI&nbsp;выводит на&nbsp;экран текущие показатели работы системы.
                </p>
            </div>

            <div className={`${styles.box} ${cls.box3}`}>
                <h4 className={cls.subtitle}>
                    Фото и видео
                </h4>

                <p className={styles.text}>
                    При выгруженном приложении на&nbsp;дисплее отображается ранее предзагруженное фото или
                    видеоряд. </p>
            </div>
        </>
    );
};
