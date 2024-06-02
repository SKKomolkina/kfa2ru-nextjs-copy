import cls from './CoolingBot.module.scss'
import styles from './Rtx30Core.module.scss'
import Image from "next/image";

export const CoolingBot = () => {
    return (
        <div className={cls.section}>
            <div className={`${styles.textContainer} ${cls.textContainer}`}>
                <h3 className={cls.subtitle}>
                    Медный теплосъемник
                </h3>
                <p className={styles.text}>
                    Медный теплосъемник с&nbsp;большой площадью покрытия и&nbsp;гладкой подошвой отводит тепло
                    от&nbsp;графического процессора.
                </p>
            </div>

            <div className={`${styles.box} ${cls.backContainer}`}>
                <div className={styles.noise}/>

                <Image width={1165} height={568} className={cls.backImage}
                       src={'../../images/rtx30core/cooling-bot/back.png'}
                       alt={'Медный теплосъемник'}/>
            </div>

            <div className={`${styles.box} ${cls.imageContainer}`}>
                <div className={styles.noise}/>
                <Image width={1560} height={1348} className={cls.blur}
                       src={'../../images/rtx30core/cooling/blur.svg'}
                       alt={''}/>

                <Image width={1877} height={1760} className={cls.image}
                       src={'../../images/rtx30core/cooling-bot/image.png'}
                       alt={'Бэкплейт'}/>

                <h3 className={cls.subtitle}>
                    Бэкплейт
                </h3>
                <p className={styles.text}>
                    Металлический бэкплейт с&nbsp;вентиляционными отверстиями защищает элементы печатной платы
                    и&nbsp;гармонично завершает образ сборки.
                </p>
            </div>
        </div>
    );
};
