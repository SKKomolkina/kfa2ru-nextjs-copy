import styles from './Simple.module.scss';

import Image from "next/image";

const Gtx1630Simple = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <Image width={335} height={335} alt='' src={'../../images/gtx16x/simple/Ellipse.svg'}
                           className={styles.ellipse}/>
                    <h4 className={styles.title}><span> </span>
                        Легко подключить <br/> и играть
                    </h4>
                    <p className={styles.text}>
                        Никаких лишних кабелей – карточка не требует дополнительного
                        <br/> питания.
                    </p>
                </div>

                <Image width={1237} height={1122} alt='' src={'../../images/gtx16x/simple/line.svg'}
                       className={styles.line}/>
                <Image width={1616} height={889} alt='' src={'../../images/gtx16x/simple/image.png'}
                       className={styles.image}/>
            </div>
        </section>
    )
}

export default Gtx1630Simple;
