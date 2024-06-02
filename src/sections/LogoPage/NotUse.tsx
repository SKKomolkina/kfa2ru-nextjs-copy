import cls from './Use.module.scss'
import styles from './LogoPage.module.scss'
import containerStyles from './NotUse.module.scss'

import Image from "next/image";

export const NotUse = () => {
    return (
        <div className={cls.section}>
            <h3 className={`${styles.title} ${cls.title}`}>Недопустимое <span
                className={styles.titleGradient}>использование</span></h3>

            <div>
                <div>
                    <p className={styles.text}>
                        Пожалуйста, используйте предоставленные выше макеты логотипов. Изменение оригинальных макетов
                        без
                        согласования недопустимо.
                    </p>
                </div>

                <div className={cls.imagesContainer}>
                    <div className={`${cls.imageBox} ${containerStyles.container}`}>
                        <Image width={390} height={143} className={cls.image} src={'../images/logo/not-use/1.svg'}
                               alt={''}/>

                        <p className={styles.text}>
                            Не&nbsp;используйте письменное написание логотипа
                        </p>
                    </div>

                    <div className={`${cls.imageBox} ${containerStyles.container}`}>
                        <Image width={390} height={143} className={cls.image} src={'../images/logo/not-use/2.svg'}
                               alt={''}/>

                        <p className={styles.text}>
                            Не&nbsp;изменяйте размер отдельных элементов
                        </p>
                    </div>

                    <div className={`${cls.imageBox} ${containerStyles.container}`}>
                        <Image width={390} height={143} className={cls.image} src={'../images/logo/not-use/3.svg'}
                               alt={''}/>

                        <p className={styles.text}>
                            Вокруг логотипа должно быть достаточно свободного пространства
                        </p>
                    </div>

                    <div className={`${cls.imageBox} ${containerStyles.container}`}>
                        <Image width={390} height={143} className={cls.image} src={'../images/logo/not-use/4.svg'}
                               alt={''}/>

                        <p className={styles.text}>
                            Не&nbsp;нарушайте и&nbsp;не&nbsp;искажайте пропорции логотипа
                        </p>
                    </div>

                    <div className={`${cls.imageBox} ${containerStyles.container}`}>
                        <Image width={390} height={143} className={cls.image} src={'../images/logo/not-use/5.svg'}
                               alt={''}/>

                        <p className={styles.text}>
                            Используйте только фирменные цвета логотипа
                        </p>
                    </div>

                    <div className={`${cls.imageBox} ${containerStyles.container}`}>
                        <Image width={390} height={143} className={cls.image} src={'../images/logo/not-use/6.svg'}
                               alt={''}/>

                        <p className={styles.text}>
                            Соблюдайте рекомендованные пропорции логотипа относительно контентной части
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
