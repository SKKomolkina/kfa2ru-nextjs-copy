import cls from './Compact.module.scss'
import styles from './Rtx30Core.module.scss'
import Image from "next/image";

export const Compact = () => {
    return (
        <section className={cls.section}>
            <div className={`${styles.box} ${cls.titleContainer}`}>
                <div className={styles.noise}/>
                <Image width={995} height={995} className={cls.blurTop} src={'../../images/rtx30core/compact/blur.svg'}
                       alt={''}/>
                <h1 className={styles.title}>Компактные и&nbsp;мощные</h1>
            </div>

            <div className={`${styles.box} ${cls.imageContainerTop}`}>
                <div className={styles.noise}/>
                <Image width={995} height={995} className={cls.blurMid} src={'../../images/rtx30core/compact/blur.svg'}
                       alt={''}/>
                <Image width={1835} height={1363} className={cls.imageTop}
                       src={'../../images/rtx30core/compact/image.png'}
                       alt={'3060 Ti / 3060 Kfa2 Core'}/>

                <h2 className={styles.subtitle}>3060 Ti / 3060</h2>
            </div>

            <div className={`${styles.textContainer} ${cls.textContainerTop}`}>
                <p className={styles.text}>
                    Видеокарты серии CORE с&nbsp;одним вентилятором не&nbsp;уступают в&nbsp;производительности своим
                    двух вентиляторным версиям.
                </p>
            </div>

            <div className={`${styles.box} ${cls.imageContainerBot}`}>
                <div className={styles.noise}/>
                <Image width={995} height={995} className={cls.blurBot} src={'../../images/rtx30core/compact/blur.svg'}
                       alt={''}/>
                <h2 className={styles.subtitle}>3050</h2>
                <Image width={1255} height={1129} className={cls.imageBot}
                       src={'../../images/rtx30core/compact/image2.png'}
                       alt={'3050 Kfa2 Core'}/>
            </div>

            <div className={`${styles.textContainer} ${cls.textContainerBot}`}>
                <p className={styles.text}>
                    Отличное решение для тех, кто хочет насладиться превосходной производительностью без необходимости
                    жертвовать свободным пространством, отдавая предпочтение стильным компактным корпусам.
                </p>
            </div>
        </section>
    );
};
