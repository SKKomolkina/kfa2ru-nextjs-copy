import styles from './Gamers.module.scss'
import Image from "next/image"

const Gamers = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p className={styles.text}>
                    <span className={styles.textSpan}>Игроки оценят по достоинству: </span>
                    удобная форма корпуса, мгновенная реакция и исполнение команд.
                </p>

                <div className={styles.imagesContainer}>
                    <Image width={390} height={266} className={styles.imageMini} src={'../images/slider1/game/imageMini.png'} alt={''}/>
                    <Image width={885} height={561} className={styles.image} src={'../images/slider1/game/image.png'} alt={''}/>

                    <p className={styles.subtitle}>
                        Матовое покрытие создаёт приятные тактильные ощущения и не даёт руке «соскальзывать»
                        с поверхности. Проблема мышечной усталости кисти и ее дискомфорта будет решена.
                    </p>

                    <p className={styles.subtitle}>
                        Отлично скользит на любых поверхностях.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gamers;
