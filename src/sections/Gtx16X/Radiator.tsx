import styles from './Radiator.module.scss';
import ellipse from './Gtx1630Radiator/images/Ellipse.svg';
import image from './Gtx1630Radiator/images/image.png';
import group from './Gtx1630Radiator/images/Group .svg';
import line from './Gtx1630Radiator/images/line.svg';
import Image from "next/image"

const Gtx1630Radiator = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <Image width={335} height={336} src={'../../images/gtx16x/radiator/Ellipse.svg'}
                           className={styles.ellipse} alt=''/>

                    <h4 className={styles.title}>
                        <span> </span>
                        Радиатор отводит тепло от всех ключевых точек нагрева:
                    </h4>
                    <p className={styles.text}>
                        Графического процессора
                        Микросхем видеопамяти
                        Модуль регулятора напряжения
                    </p>
                </div>

                <Image width={1540} height={938} src={'../../images/gtx16x/radiator/image.png'} className={styles.image}
                       alt=''/>
                <Image width={1435} height={1322} src={'../../images/gtx16x/radiator/line.svg'} className={styles.line}
                       alt=''/>
                <Image width={363} height={632} src={'../../images/gtx16x/radiator/Group.svg'} className={styles.group}
                       alt=''/>
            </div>
        </section>
    )
}

export default Gtx1630Radiator;
