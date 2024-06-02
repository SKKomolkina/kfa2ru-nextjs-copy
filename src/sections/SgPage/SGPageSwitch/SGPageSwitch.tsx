import styles from './SGPageSwitch.module.scss';

import {useState} from "react";

const SGPageSwitch = () => {
    const [whiteCard, setWhiteCard] = useState(false);

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img className={styles.light} alt='' src={'../images/sg-page/switch/light.png'}/>
                    <img className={styles.noise} alt='' src={'../images/sg-page/switch/noise.svg'}/>
                    <img className={!whiteCard ? styles.image : styles.hidden} alt=''
                         src={'../images/sg-page/switch/imageBlack.png'}/>
                    <img className={whiteCard ? styles.image : styles.hidden} alt=''
                         src={'../images/sg-page/switch/imageWhite.png'}/>
                </div>


                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Обновлённая линейка для бескомпромиссного гейминга.
                        Выверенные формы. Сдержанный дизайн.
                    </p>

                    <img className={styles.video} alt='' src={'../images/sg-page/switch/video.svg'}/>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setWhiteCard(false)}>
                        <p className={styles.buttonText}>Чёрная</p>
                        <div className={!whiteCard ? styles.buttonLine : styles.hidden}/>
                        <div className={!whiteCard ? styles.buttonImage : styles.hidden}/>
                    </button>

                    <button className={styles.button} onClick={() => setWhiteCard(true)}>
                        <p className={styles.buttonText}>Белая</p>
                        <div className={whiteCard ? styles.buttonLine : styles.hidden}/>
                        <div className={whiteCard ? styles.buttonImage : styles.hidden}/>
                    </button>
                </div>

                <div className={styles.line}/>
            </div>
        </div>
    )
}

export default SGPageSwitch;
