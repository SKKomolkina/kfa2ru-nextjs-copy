import styles from './Stickers.module.scss';

import line from './Gtx1630Stickers/images/line.svg';
import image from './Gtx1630Stickers/images/image.png';
import sign from './Gtx1630Stickers/images/sign.svg';
import Image from "next/image";

const Gtx1630Stickers = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <Image width={656} height={129} src={'../../images/gtx16x/stickers/line.svg'}
                           className={styles.line}
                           alt=''/>
                    <h5 className={styles.title}>
                        Крутой
                        <span className={styles.titleSpan}> Стикерпак </span>
                        в подарок
                    </h5>
                </div>

                <Image width={946} height={981} src={'../../images/gtx16x/stickers/image.png'} className={styles.image}
                       alt=''/>
                <Image width={371} height={143} src={'../../images/gtx16x/stickers/sign.svg'} className={styles.sign}
                       alt=''/>
            </div>
        </section>
    )
}

export default Gtx1630Stickers;
