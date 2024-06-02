import cls from './Hz.module.scss'
import styles from './Vivance32QPage.module.scss'
import Image from "next/image";

export const Hz = () => {
    return (
        <section className={`${styles.box} ${cls.section}`}>
            <div className={cls.imageContainer}>
                <Image className={cls.image} width={1200} height={200}
                       src={'../../images/monitors/vivance32/hz/image.svg'} alt={''}/>
            </div>

            <div className={cls.textContainer}>
                <div className={cls.titleContainer}>
                    <h3 className={styles.title}>Герцовка</h3>
                    <button className={cls.button}>165 Гц</button>
                </div>

                <p className={styles.text}>
                    Высокая частота смены кадров максимально раскрывает потенциал установленной видеокарты. Благодаря
                    высокой частоте обновления, вы&nbsp;будете видеть события на&nbsp;экране еще
                    до&nbsp;того, как они произойдут.
                </p>

                <p className={styles.text}>
                    Это дает преимущество
                    в&nbsp;многопользовательских играх, где скорость реакции определяет разницу между победой
                    и&nbsp;поражением.
                </p>
            </div>
        </section>
    );
};
