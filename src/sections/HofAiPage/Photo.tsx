import cls from './Photo.module.scss'
import styles from './HofAi.module.scss'

export const Photo = () => {
    return (
        <div className={`${styles.box} ${cls.box}`}>
            <h3 className={`${styles.title}`}>Фото-режим</h3>
            <p className={styles.text}>
                Поддерживает все основные форматы изображений (.bmp, .png, .jpg, .jpeg), конвертирую их&nbsp;в .bmp
                и&nbsp;подгоняя под размер дисплея.
            </p>

            <div className={cls.shadow}/>
        </div>
    );
};
