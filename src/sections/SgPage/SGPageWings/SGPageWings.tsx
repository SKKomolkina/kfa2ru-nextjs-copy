import styles from './SGPageWings.module.scss';

import num1 from './images/1.svg';
import num2 from './images/2.svg';

import SGPageSubtitle from "../SGPageSubtitle";

interface lineProps {
    width?: string;
    color?: string;
}

const Line = ({width, color}: lineProps) => {
    return (
        <div className={styles.linesLine} style={{width: width, background: `#${color}`}}/>
    )
}

const LinesGroup = () => {
    return (
        <ul className={styles.linesList}>
            <li className={styles.linesItem}>
                <p className={styles.linesText}>Максимальная подача воздуха</p>
                <div className={styles.linesTop}>
                    <Line width={'88%'}/>
                    <p className={styles.linesNum}>+25%</p>
                </div>
                <Line width={'61%'} color={'FFFFFF'}/>
            </li>

            <li className={styles.linesItem}>
                <p className={styles.linesText}>Максимальное давление воздуха</p>
                <div className={styles.linesTop}>
                    <Line width={'73%'}/>
                    <p className={styles.linesNum}>+15%</p>
                </div>
                <Line width={'61%'} color={'FFFFFF'}/>
            </li>

            <li className={styles.linesItem}>
                <p className={styles.linesText}>Площадь перекрытия воздуха</p>
                <div className={styles.linesTop}>
                    <Line width={'30%'}/>
                    <p className={styles.linesNum}>-50%</p>
                </div>
                <Line width={'61%'} color={'FFFFFF'}/>
            </li>
        </ul>
    )
}

const SGPageWings = () => {
    return (
        <section className={styles.section}>

            {/*ABSOLUTE ELEMENTS*/}
            {/*<div className={styles.blur}/>*/}
            {/*<div className={styles.lineAbsoluteTop}/>*/}
            {/*<div className={styles.lineAbsoluteBot}/>*/}
            {/*ABSOLUTE ELEMENTS*/}

            {/*<div className={styles.about}>*/}
            {/*    <p className={styles.aboutText}>*/}
            {/*        Усовершенствованные вентиляторы WINGS 2.0 c&nbsp;11&nbsp;лопастями особой формы помогают*/}
            {/*        поддерживать комфортный температурный режим видеокарты и&nbsp;низкий уровень шума в&nbsp;нагрузке.*/}
            {/*    </p>*/}
            {/*</div>*/}

            <div className={styles.textContainer}>
                <div className={styles.title}>
                    <SGPageSubtitle title={'WINGS 2.0'} underline={'_'}/>
                </div>

                <div className={styles.numbers}>
                    <img className={styles.number} alt='' src={num1}/>
                    <img className={styles.number} alt='' src={num2}/>
                </div>

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div className={styles.listSpan}/>
                        <p className={styles.listText}>
                            Увеличили высоту вентилятора до 20мм.
                        </p>
                    </li>

                    <li className={styles.listItem}>
                        <div className={styles.listSpan}/>
                        <p className={styles.listText}>
                            Двойные подшипники качения.
                        </p>
                    </li>
                </ul>
            </div>

            <LinesGroup/>

            <p className={styles.textSpan}>
                *В сравнении с WINGS 1.0 по результатам внутренних тестирований отдела разработки (R&D)
            </p>
        </section>
    )
}

export default SGPageWings;
