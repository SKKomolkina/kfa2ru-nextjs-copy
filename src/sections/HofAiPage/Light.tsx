import cls from './Light.module.scss'
import styles from './HofAi.module.scss'
import Image from "next/image";

export const Light = () => {
    return (
        <div className={cls.container}>
            <div className={`${styles.box} ${cls.box1}`}>
                <svg className={cls.vector2} width="1409" height="798" viewBox="0 0 1409 798" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26 157.132C31 147.132 379.5 -39.3663 706.5 56.1313C869.21 103.649 1071 276.655 976.5 440.133C908 558.632 683.105 583.186 609 532.633C544.5 488.632 531.5 450.633 531.5 390.133C531.5 301.838 618.832 262.633 711.5 262.633C837 262.633 1144 280.134 1382.5 785.633"
                        stroke="#E0E0E0" strokeWidth="57"/>
                </svg>

                <h3 className={styles.title}>Подсветка</h3>

                <p className={styles.text}>
                    Вы&nbsp;можете легко менять цвета и&nbsp;режимы подсветки RGB элементов видеокарты. Количество
                    и&nbsp;тип элементов зависят от&nbsp;конкретной модели: от&nbsp;вентиляторов и&nbsp;логотипа
                    на&nbsp;бэкплейте, до&nbsp;декоративной короны на&nbsp;информационном дисплее.
                </p>
            </div>

            <div className={`${styles.box} ${cls.box2}`}>
                <svg className={cls.vector1} width="1409" height="798" viewBox="0 0 1409 798" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26 157.132C31 147.132 379.5 -39.3663 706.5 56.1313C869.21 103.649 1071 276.655 976.5 440.133C908 558.632 683.105 583.186 609 532.633C544.5 488.632 531.5 450.633 531.5 390.133C531.5 301.838 618.832 262.633 711.5 262.633C837 262.633 1144 280.134 1382.5 785.633"
                        stroke="#E0E0E0" strokeWidth="57"/>
                </svg>

                <Image width={680} height={317} className={cls.image} src={'../images/hof-ai/light/image.png'} alt={''}/>
            </div>
        </div>
    );
};
