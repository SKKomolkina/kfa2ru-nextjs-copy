import styles from './Simple.module.scss'
import Image from "next/image"

const Simple = () => {
    return (
        <div className={styles.main}>
            <div className={styles.dark}/>

            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        <span className={styles.textSpan}>RGB подсветка </span>
                        Мышка от KFA 2 имеет исключительный дизайн — рисунок по бокам с RGB подсветкой.
                    </p>
                    <p className={styles.text}>
                        Цвета подсветки «мягкие», не раздражают глаз. И даже
                        в темной комнате свечение будет приятным и приглушённым.
                    </p>
                </div>

                <Image width={845} height={918} alt='' className={styles.image} src={'../images/slider3/simple/image.png'}/>
            </div>
        </div>
    )
}

export default Simple;
