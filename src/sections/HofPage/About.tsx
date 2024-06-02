import styles from './About.module.scss';
import Link from "next/link";

interface AboutProps {
    color?: boolean;
}

const About = ({color}: AboutProps) => {

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p className={styles.text}>
                    <span className={styles.textSpan}>KFA2</span>&nbsp; - зарегистрированная торговая
                    марка производственной группы Galaxy Microsystems Limited (Гонконг).
                </p>

                <a
                    href={'/about-us'}
                    className={color ? styles.buttonColor : styles.button}
                >
                    <p className={styles.buttonText}>Подробнее</p>
                </a>
            </div>
        </div>
    )
}

export default About;
