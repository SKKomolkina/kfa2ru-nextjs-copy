import styles from './Tuner.module.scss';

interface TunerProps {
    color?: boolean;
}

const Tuner = ({color}: TunerProps) => {

    return (
        <div className={color ? styles.mainColor : styles.main}>

            <img width={565} height={627} className={styles.image} src={'../images/hof-page/tuner/image.png'} alt=''/>

            <div className={styles.textContainer}>
                <h3 className={styles.title}>Xtreme Tuner</h3>
                <p className={styles.text}>
                    <span className={styles.textUnderline}>Управляй системой</span>
                    &nbsp;в&nbsp;режиме онлайн простым щелчком
                    мыши с&nbsp;фирменной утилитой.
                    <br/>
                    Приложение позволяет легко мониторить и&nbsp;изменять&nbsp;
                    <span className={styles.textUnderline}>работу видеокарты и&nbsp;режим подсветки</span>
                    &nbsp;с&nbsp;ПК и&nbsp;мобильного устройства.
                </p>
            </div>

            <a href={'/xtreme-tuner'} className={styles.button}>
                <svg className={styles.buttonArrow} width="49" height="50" viewBox="0 0 49 50" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M47 2.49609V47.4961H2" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M2 2.49609L46 46.4961" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </a>
        </div>
    )
}

export default Tuner;
