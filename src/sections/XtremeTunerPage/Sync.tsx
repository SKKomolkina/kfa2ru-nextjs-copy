import cls from './Sync.module.scss'
import styles from './XtremeTunerPage.module.scss'
import Image from "next/image";
import Link from "next/link";

export const Sync = ({scrollRef}: any) => {
    const scroll = () => scrollRef.current.scrollIntoView()

    return (
        <section className={cls.section}>
            <div className={cls.container}>
                <Image width={1177} height={707} className={cls.image}
                       src={'./images/extreme-tuner-page/sync/image.png'} alt={''}/>
                <div className={cls.shadow}/>

                <h3 className={`${styles.title} ${cls.title}`}>1-CLICK SYNC</h3>
                <p className={styles.subText}>
                    Синхронизация работы подсветки видеокарты
                    с&nbsp;остальными элементами системы вне зависимости
                    от&nbsp;производителя с&nbsp;помощью специального кабеля, подключаемого к&nbsp;разъёму
                    JLED материнской платы или иному RGB контроллеру.
                    <br/><br/>
                    Функция доступна для видеокарт с&nbsp;поддержкой настраиваемой подсветки.
                </p>

                <Link href={'/instructions'} className={cls.button}>Инструкция по подключению</Link>
            </div>

        </section>
    );
};
