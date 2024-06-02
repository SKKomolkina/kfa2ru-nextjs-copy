import styles from './SGPageBackplate.module.scss';
import Image from "next/image";

const SGPageBackplate = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Бэкплейт_</h3>
            <p className={styles.text}>
                Выполнен из&nbsp;металлического сплава, надёжно защищает компоненты видеокарты от&nbsp;внешнего
                воздействия.
            </p>

            <Image width={1085} height={478} className={styles.imageTop} src={'../images/sg-page/backplate/image.png'}
                   alt=''/>
            <Image width={1472} height={648} className={styles.imageBot} src={'../images/sg-page/backplate/image.png'}
                   alt=''/>

            {/*<div className={styles.lineTop}/>*/}
            {/*<div className={styles.lineBot}/>*/}
        </section>
    )
}

export default SGPageBackplate;
