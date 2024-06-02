import cls from './Cooling.module.scss'
import styles from './Rtx30Core.module.scss'
import Image from "next/image";
import {useMediaQuery} from "@/features/lib/useMediaQuery";
import {useState} from "react";

export const Cooling = () => {
    const query640 = useMediaQuery(640)
    const [active, setActive] = useState(false)

    return (
        <section className={cls.section}>
            <div className={`${styles.box} ${cls.titleContainer}`}>
                <div className={styles.noise}/>
                <Image width={1560} height={1348} className={cls.blurTop}
                       src={'../../images/rtx30core/cooling/blur.svg'}
                       alt={''}/>
                <h1 className={styles.title}>Система <br/> охлаждения</h1>
            </div>

            <div className={`${styles.textContainer} ${cls.textContainer}`}>
                <p className={styles.text}>
                    Охлаждаются все основные зоны нагрева&nbsp;&mdash; графический процессор, чипы памяти, подсистема
                    питания.
                </p>
            </div>

            {!query640 ? (
                <div className={`${cls.imageContainer} ${styles.box}`}>
                    <div className={cls.buttonsContainer}>
                        <button onClick={() => setActive(false)} className={!active ? cls.buttonActive : cls.button}>
                            RTX 3060 Ti / 3060
                        </button>
                        <button onClick={() => setActive(true)} className={active ? cls.buttonActive : cls.button}>
                            RTX 3050
                        </button>
                    </div>

                    <div className={styles.noise}/>
                    <Image width={1560} height={1348} className={cls.blurTop}
                           src={'../../images/rtx30core/cooling/blur.svg'}
                           alt={''}/>

                    <Image width={2104} height={1700} className={!active ? cls.image1 : cls.imageHidden}
                           src={'../../images/rtx30core/cooling/3060.png'}
                           alt={'Kfa2 Core 3060 Ti / 3060'}/>
                    <Image width={2257} height={1713} className={!active ? cls.imageHidden : cls.image2}
                           src={'../../images/rtx30core/cooling/3050.png'}
                           alt={'Kfa2 Core 3050'}/>

                    {!active ? (
                        <div className={cls.textContainerBox}>
                            <p className={styles.text}>
                                Два больших вентилятора с&nbsp;поддержкой технологии Fan-Stop активно охлаждают
                                компоненты
                                видеокарты, создавая мощный направленный поток воздуха.
                            </p>
                        </div>
                    ) : (
                        <div className={cls.textContainerBox}>
                            <p className={styles.text}>
                                90-мм вентилятор с&nbsp;поддержкой технологии FAN-STOP и&nbsp;двумя припаянными 6-мм
                                тепловыми трубками.
                                <br/><br/>
                                Подходит для компактных игровых и&nbsp;рабочих систем.
                            </p>
                        </div>
                    )}

                </div>
            ) : (
                <>
                    <div className={`${styles.box} ${cls.imageContainerTop}`}>
                        <Image width={1560} height={1348} className={cls.blurMid}
                               src={'../../images/rtx30core/cooling/blur.svg'}
                               alt={''}/>
                        <Image width={442} height={218} className={cls.imageTop}
                               src={'../../images/rtx30core/cooling/image.png'}
                               alt={''}/>

                        <div className={styles.noise}/>
                        <h2 className={styles.subtitle}>3060 Ti / 3060</h2>
                        <p className={`${styles.text} ${cls.text}`}>
                            Два больших вентилятора с&nbsp;поддержкой технологии Fan-Stop активно охлаждают компоненты
                            видеокарты, создавая мощный направленный поток воздуха.
                        </p>
                    </div>

                    <div className={`${styles.box} ${cls.imageContainerBot}`}>
                        <Image width={1560} height={1348} className={cls.blurBot}
                               src={'../../images/rtx30core/cooling/blur.svg'}
                               alt={''}/>
                        <Image width={356} height={222} className={cls.imageBot}
                               src={'../../images/rtx30core/cooling/image2.png'}
                               alt={''}/>

                        <div className={styles.noise}/>
                        <h2 className={styles.subtitle}>3050</h2>
                        <p className={`${styles.text} ${cls.text}`}>
                            90-мм вентилятор с&nbsp;поддержкой технологии FAN-STOP и&nbsp;двумя припаянными 6-мм
                            тепловыми
                            трубками. <br/> <br/>
                            Подходит для компактных игровых и&nbsp;рабочих систем.
                        </p>
                    </div>
                </>
            )}

        </section>
    );
};
