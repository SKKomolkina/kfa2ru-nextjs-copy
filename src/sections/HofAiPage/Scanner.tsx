import cls from './Scanner.module.scss'
import styles from './HofAi.module.scss'

export const Scanner = () => {
    return (
        <section className={`${styles.box} ${cls.section}`}>
            <div className={cls.shadow}/>

            <h3 className={styles.title}>OC Scanner</h3>
            <p className={styles.text}>
                Утилита HOF AI&nbsp;обеспечивает возможность автоматического разгона с&nbsp;помощью OC&nbsp;Scanner.
                <br/>
                <br/>
                OC&nbsp;Scanner постепенно увеличивает частоту с&nbsp;шагом 5-10&nbsp;МГц, выполняя стресс-тест
                на&nbsp;каждой остановке и&nbsp;определяя таким образом наиболее высокую частоту, при которой система
                сможет работать стабильно. Весь процесс занимает 10-30&nbsp;минут.
            </p>
        </section>
    );
};
