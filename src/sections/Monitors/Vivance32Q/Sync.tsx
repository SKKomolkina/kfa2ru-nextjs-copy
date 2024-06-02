import cls from './Sync.module.scss'
import styles from './Vivance32QPage.module.scss'

import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import Image from "next/image"

import imageLeft from './left.png'

const FIRST_IMAGE = {
    imageUrl: 'https://kfa2.ru/downloads/vivance/left.png'
}

const SECOND_IMAGE = {
    imageUrl: 'https://kfa2.ru/downloads/vivance/right.png'
}

export const Sync = () => {
    // const imageLeft = <Image width={1222} height={500} src={'../../images/monitors/vivance32/sync/left.png'} alt={''}/>

    return (
        <section className={`${cls.section} ${styles.box}`}>
            <p className={cls.subtitle}>Адаптивная синхронизация</p>
            <h3 className={styles.title}>G-Sync, Freesync</h3>

            <p className={styles.text}>
                Функция адаптивной синхронизации позволяет подстраивать частоту обновления монитора к&nbsp;частоте
                кадров, выдаваемой графической картой.
            </p>
            <p className={styles.text}>
                В&nbsp;играх адаптивная оптимизация используется для минимизации разрыва изображения и&nbsp;задержки
                отклика дисплея. Поддерживаются устройства NVIDIA (G-Sync Compatible) и&nbsp;AMD (FreeSync Premium).
            </p>

            <div className={cls.imageContainer}>
                <ReactBeforeSliderComponent
                    className={cls.image}
                    firstImage={SECOND_IMAGE}
                    secondImage={FIRST_IMAGE}
                />
            </div>
        </section>
    );
};
