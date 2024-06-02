import cls from './Use.module.scss'
import styles from './LogoPage.module.scss'
import imageStyles from './Position.module.scss'

import Image from "next/image";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const Position = () => {
    const size640 = useMediaQuery(640)

    return (
        <div className={cls.section}>
            <h3 className={`${styles.title} ${cls.title}`}>
                Свободное <span
                className={styles.titleGradient}>пространство</span></h3>

            <div>
                <div>
                    <p className={styles.subtitle}>Требование к&nbsp;позиционированию логотипа</p>
                    <p className={styles.text}>
                        Свободное поле вокруг логотипа должно составлять не&nbsp;менее высоты одной
                        цифры &laquo;два&raquo;.
                        <br/><br/>
                        По&nbsp;возможности размещайте логотип KFA2 по&nbsp;краям.
                    </p>
                </div>

                <div className={`${cls.imagesContainer}`}>
                    <div className={`${cls.imageBox} ${imageStyles.image}`}>
                        <Image width={390} height={214} className={cls.image} src={'../images/logo/position/1.svg'}
                               alt={''}/>

                        <p className={styles.text}>Свободное поле вокруг логотипа должно составлять не&nbsp;менее высоты
                            одной
                            цифры &laquo;два&raquo;.
                        </p>
                    </div>

                    <div className={`${cls.imageBox} ${imageStyles.image}`}>
                        <Image width={390} height={214} className={`${cls.imageWithoutBorder}`}
                               src={size640 ? '../images/logo/position/2.svg' : '../images/logo/position/2-640.svg'}
                               alt={''}/>

                        <p className={styles.text}>Примеры позиционирования логотипа</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
