import styles from './SGPageFanStop.module.scss';

const Item = ({text}: any) => {
    return (
        <li className={styles.item}>
            <svg className={styles.itemArr} width="48" height="24" viewBox="0 0 48 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M35.8462 2L46 12L35.8462 22M44.5897 12H1" stroke="white" strokeWidth="2"
                      strokeMiterlimit="10" strokeLinecap="square"/>
            </svg>

            <p className={styles.itemText}>
                {text}
            </p>
        </li>
    )
}

const SGPageFanStop = () => {
    return (
        <section className={styles.section}>
            <div className={styles.aboutContainer}>
                <h4 className={styles.title}>
                    Система Fan-Stop
                </h4>
                <p className={styles.subtitle}>
                    ТОГДА, КОГДА НУЖНО_
                </p>
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Умная система мониторинга температурных точек запускает вентиляторы только при необходимости
                        и&nbsp;должной нагрузке на&nbsp;графический процессор.
                    </p>
                </div>
                <p className={styles.title} style={{alignSelf: 'flex-end', textAlign: 'end'}}>
                    Стартует при температуре GPU 60° C
                </p>
            </div>

            {/*<ul className={styles.list}>*/}
            {/*    <Item text='Разнесённые температурные точки.'/>*/}
            {/*    <Item*/}
            {/*        text='Плавный старт и остановка вентиляторов способствует акустическому комфорту и увеличению срока службы моторов вентилятора.'/>*/}
            {/*    <Item*/}
            {/*        text='Наслаждайтесь тишиной при просмотре фильмов, сериалов, работе в офисных приложениях и сёрфинге.'/>*/}
            {/*</ul>*/}
        </section>
    )
}

export default SGPageFanStop;
