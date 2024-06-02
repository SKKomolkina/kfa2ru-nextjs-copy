import styles from './Line.module.scss';

import Image from "next/image";

const Gtx1630Line = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <p className={styles.text}>вступай в игру</p>
                    <Image width={20} height={21} src={'../../images/gtx16x/line/Union.svg'} className={styles.union}
                           alt=''/>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>вступай в игру</p>
                    <Image width={20} height={21} src={'../../images/gtx16x/line/Union.svg'} className={styles.union}
                           alt=''/>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>вступай в игру</p>
                    <Image width={20} height={21} src={'../../images/gtx16x/line/Union.svg'} className={styles.union}
                           alt=''/>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>вступай в игру</p>
                    <Image width={20} height={21} src={'../../images/gtx16x/line/Union.svg'} className={styles.union}
                           alt=''/>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>вступай в игру</p>
                    <Image width={20} height={21} src={'../../images/gtx16x/line/Union.svg'} className={styles.union}
                           alt=''/>
                </div>
                <div className={styles.item}>
                    <p className={styles.text}>вступай в игру</p>
                    <Image width={20} height={21} src={'../../images/gtx16x/line/Union.svg'} className={styles.union}
                           alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Gtx1630Line;
