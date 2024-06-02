import cls from './Use.module.scss'
import styles from './LogoPage.module.scss'
import imageStyles from './Online.module.scss'

import Image from "next/image"

export const Online = () => {
    return (
        <div className={cls.section}>
            <h3 className={`${styles.title} ${cls.title}`}>Использование <span
                className={styles.titleGradient}>онлайн</span></h3>

            <div>
                <div>
                    <p className={styles.subtitle}>Горизонтальный баннер</p>
                    <p className={styles.text}>
                        Логотип должен быть размещён в&nbsp;левом верхнем углу и&nbsp;быть не&nbsp;менее
                        15&nbsp;пикселей
                        высотой.
                    </p>
                </div>

                <div className={`${cls.imagesContainer} ${imageStyles.container}`}>
                    <div className={`${imageStyles.imageBox} ${imageStyles.imageBoxFull}`}>
                        <Image width={390} height={143} className={imageStyles.image1}
                               src={'../images/logo/online/1.svg'}
                               alt={''}/>
                    </div>

                    <div className={imageStyles.imageBox}>
                        <Image width={390} height={143} className={imageStyles.image2}
                               src={'../images/logo/online/2.svg'}
                               alt={''}/>

                        <p className={`${styles.text} ${imageStyles.text}`}>
                            1920&times;360&nbsp;px
                        </p>
                    </div>

                    <div className={imageStyles.imageBox}>
                        <Image width={419} height={155} className={imageStyles.image3}
                               src={'../images/logo/online/3.svg'}
                               alt={''}/>

                        <p className={`${styles.text} ${imageStyles.text}`}>
                            960&times;350&nbsp;px
                        </p>
                    </div>

                    <div className={imageStyles.imageBox}>
                        <Image width={142} height={284} className={imageStyles.image4}
                               src={'../images/logo/online/4.svg'}
                               alt={''}/>

                        <p className={`${styles.text} ${imageStyles.text}`}>
                            300&times;600&nbsp;px
                        </p>
                    </div>

                    <div className={imageStyles.imageBox}>
                        <Image width={335} height={41} className={imageStyles.image5}
                               src={'../images/logo/online/5.svg'}
                               alt={''}/>

                        <p className={`${styles.text} ${imageStyles.text}`}>
                            728&times;90&nbsp;px
                        </p>
                    </div>

                    <div className={`${imageStyles.imageBox} ${imageStyles.last}`}>
                        <Image width={168} height={124} className={imageStyles.image6}
                               src={'../images/logo/online/6.svg'}
                               alt={''}/>

                        <p className={`${styles.text} ${imageStyles.text}`}>
                            380&times;280&nbsp;px
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
