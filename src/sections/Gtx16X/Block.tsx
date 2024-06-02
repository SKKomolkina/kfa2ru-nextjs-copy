import styles from './Block.module.scss';

import Image from "next/image";

const Gtx1630Block = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h5 className={styles.title}>
                        От 300 Вт
                    </h5>
                    <p className={styles.titleBack}>
                        От 300 Вт
                    </p>

                    <p className={styles.subtitle}>
                        Рекомендованный блок питания
                    </p>

                    <Image width={651} height={221} src={'../../images/gtx16x/block/lineTop.svg'}
                           className={styles.lineTop} alt=''/>
                    {/*<Image width={595} height={595} src={'../../images/gtx16x/block/EllipseTop.svg'} className={styles.ellipseTop} alt=''/>*/}
                </div>

                {/*<div className={styles.bot}>*/}
                {/*    <div className={styles.textContainer}>*/}
                {/*        <p className={styles.text}>*/}
                {/*            Подключение до*/}
                {/*            <br/><span className={styles.textSpan}>3 экранов</span>*/}
                {/*        </p>*/}

                {/*        <Image width={242} height={81} src={'../../images/gtx16x/block/lineBot.svg'} className={styles.lineBot} alt=''/>*/}
                {/*    </div>*/}

                {/*    <Image width={1060} height={413} src={'../../images/gtx16x/block/illustration.svg'} className={styles.illustration} alt=''/>*/}
                {/*    <Image width={595} height={595} src={'../../images/gtx16x/block/EllipseBot.svg'} className={styles.ellipseBot} alt=''/>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}

export default Gtx1630Block;
