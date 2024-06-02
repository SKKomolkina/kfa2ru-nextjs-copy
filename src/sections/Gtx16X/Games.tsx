import styles from './Games.module.scss'

import {useEffect, useRef, useState} from "react";
import Image from "next/image";

const Gtx1630Games = () => {
    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <h4 className={styles.title}>и множество других</h4>
                <h4 className={styles.titleBorder}>классных игр</h4>

                <Image width={394} height={33} alt='' src={'../../images/gtx16x/games/line.svg'}
                       className={styles.line}/>
            </div>

            <div className={styles.imagesContainer}>
                <Image alt='' width={1770} height={1102} className={styles.linesBack}
                       src={'../../images/gtx16x/games/backLine.svg'}/>

                <div className={styles.transformWrapper}>
                    <ul id='topGames' className={styles.imagesLine}>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top1.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top2.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top3.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top4.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top5.png'}/>
                        </li>
                    </ul>
                    <ul className={styles.imagesLineClone}>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top1.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top2.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top3.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top4.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/top5.png'}/>
                        </li>
                    </ul>
                </div>

                <div className={styles.transformWrapper}>
                    <ul id='midGames' className={styles.imagesLineFast}>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid1.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid2.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid3.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid4.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid5.png'}/>
                        </li>
                    </ul>
                    <ul className={styles.imagesLineCloneFast}>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid1.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid2.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid3.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid4.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/mid5.png'}/>
                        </li>
                    </ul>
                </div>

                <div className={styles.transformWrapper}>
                    <ul id='botGames' className={styles.imagesLine}>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot1.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot2.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot3.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot4.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot5.png'}/>
                        </li>
                    </ul>
                    <ul className={styles.imagesLineClone}>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot1.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot2.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot3.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot4.png'}/>
                        </li>
                        <li>
                            <Image width={500} height={300} alt='' className={styles.image}
                                   src={'../../images/gtx16x/games/bot5.png'}/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Gtx1630Games;
