import cls from './Header.module.scss'
import styles from './Rtx30Core.module.scss'
import Image from "next/image";

export const Header = () => {
    return (
        <section className={`${cls.header} ${styles.box}`}>
            <div className={styles.noise}/>

            <Image width={1886} height={1406} className={cls.blur} src={'../../images/rtx30core/header/blur.png'}
                   alt={''}/>

            <Image width={955} height={598} className={cls.image1} src={'../../images/rtx30core/header/image1.png'}
                   alt={''}/>
            <Image width={1353} height={672} className={cls.image2} src={'../../images/rtx30core/header/image2.png'}
                   alt={''}/>

            <h1 className={`${styles.title} ${cls.title}`}>Здесь начинается гейминг</h1>
            <p className={`${styles.text} ${cls.text}`}>
                Для заядлых геймеров, которым нужен высокий и&nbsp;стабильный fps
            </p>
        </section>
    );
};
