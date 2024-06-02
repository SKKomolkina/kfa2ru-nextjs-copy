import cls from './Speed.module.scss'
import styles from './HofAi.module.scss'
import Image from "next/image";

export const Speed = () => {
    return (
        <>
            <div className={`${styles.box} ${cls.box1}`}>
                <h3 className={styles.title}>Разгон</h3>

                <p className={styles.text}>
                    Утилита предлагает 3&nbsp;варианта разгона: в&nbsp;один клик с&nbsp;функцией 1-Click OC,
                    OC&nbsp;Scanner
                    с&nbsp;предложением оптимальных настроек и&nbsp;ручной режим.
                </p>

                <Image className={cls.image} width={789} height={198} src={'../images/hof-ai/speed/image.svg'}
                       alt={''}/>
            </div>

            <div className={`${styles.box} ${cls.box2}`}>
                <div className={cls.linksContainer}>
                    <a className={cls.link}>
                        <svg className={cls.arrow} width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="#D8D8D8"/>
                        </svg>
                        <p className={styles.link}>1-Click OC</p>
                    </a>

                    <a className={cls.link}>
                        <svg className={cls.arrow} width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="#D8D8D8"/>
                        </svg>
                        <p className={styles.link}>OC Scanner</p>
                    </a>

                    <a className={cls.link}>
                        <svg className={cls.arrow} width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="#D8D8D8"/>
                        </svg>
                        <p className={styles.link}>Ручной режим</p>
                    </a>
                </div>

                <Image className={cls.image2} width={789} height={198} src={'../images/hof-ai/speed/image.svg'}
                       alt={''}/>
            </div>
        </>
    );
};
