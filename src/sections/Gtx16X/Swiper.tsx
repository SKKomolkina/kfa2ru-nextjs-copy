import {useEffect, useState} from "react";

import styles from './Swiper.module.scss';

import stroke from './Gtx1630Swiper/images/stroke.svg';
import image1 from './Gtx1630Swiper/images/1.png';
import image2 from './Gtx1630Swiper/images/2.png';
import image3 from './Gtx1630Swiper/images/3.png';
import image4 from './Gtx1630Swiper/images/4.png';
import image5 from './Gtx1630Swiper/images/5.png';
import image6 from './Gtx1630Swiper/images/6.png';

import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper";
import Image from "next/image";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

const Gtx1630Swiper = () => {
    const [sl, setSl] = useState(0)
    const over1185 = useMediaQuery(1200)

    useEffect(() => {
        setSl(0);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Image width={634} height={642} alt='' src={'../../images/gtx16x/swiper/line.svg'}
                       className={styles.line}/>
                <div className={styles.back}/>

                <Image alt=''
                       width={261}
                       height={143}
                       src={!over1185 ? '../../images/gtx16x/swiper/dota.svg' : '../../images/gtx16x/swiper/dota1185.svg'}
                       className={sl === 0 ? styles.dota : styles.signHidden}/>
                <Image alt=''
                       width={326}
                       height={143}
                       src={!over1185 ? '../../images/gtx16x/swiper/gta.svg' : '../../images/gtx16x/swiper/gta1185.svg'}
                       className={sl === 1 ? styles.gta : styles.signHidden}/>
                <Image alt=''
                       width={326}
                       height={143}
                       src={!over1185 ? '../../images/gtx16x/swiper/elden3.svg' : '../../images/gtx16x/swiper/elden1185.svg'}
                       className={sl === 2 ? styles.elden : styles.signHidden}/>
                <Image alt=''
                       width={326}
                       height={143}
                       src={!over1185 ? '../../images/gtx16x/swiper/stray4.svg' : '../../images/gtx16x/swiper/stray1185.svg'}
                       className={sl === 3 ? styles.stray : styles.signHidden}/>
                <Image alt=''
                       width={326}
                       height={143}
                       src={!over1185 ? '../../images/gtx16x/swiper/rdr5.svg' : '../../images/gtx16x/swiper/rdr1185.svg'}
                       className={sl === 4 ? styles.rdr : styles.signHidden}/>
                <Image alt=''
                       width={306}
                       height={185}
                       src={!over1185 ? '../../images/gtx16x/swiper/assas6.svg' : '../../images/gtx16x/swiper/assas1185.svg'}
                       className={sl === 5 ? styles.assas : styles.signHidden}/>

                <div className={styles.titleContainer}>
                    <div className={styles.titleItem}>
                        <Image width={242} height={166} alt='' src={'../../images/gtx16x/swiper/stroke.svg'}
                               className={(sl === 0 || sl === 1)
                                   ? styles.stroke : styles.strokeHidden}
                        />
                        <h4 className={(sl === 0 || sl === 1)
                            ? styles.titleSpan : styles.title}>От классики</h4>
                    </div>

                    <div className={styles.titleItem}>
                        <Image width={242} height={166} alt='' src={'../../images/gtx16x/swiper/stroke.svg'}
                               className={(sl === 2 || sl === 3)
                                   ? styles.stroke : styles.strokeHidden}
                        />
                        <h4 className={(sl === 2 || sl === 3)
                            ? styles.titleSpan : styles.title}>К интересным инди проектам</h4>
                    </div>

                    <div className={styles.titleItem}>
                        <Image width={242} height={166} alt='' src={'../../images/gtx16x/swiper/stroke.svg'}
                               className={(sl === 4 || sl === 5)
                                   ? styles.stroke : styles.strokeHidden}
                        />
                        <h4 className={(sl === 4 || sl === 5)
                            ? styles.titleSpan : styles.title}>И свежим релизам</h4>
                    </div>
                </div>

                <div className={styles.swiper}>
                    <Swiper
                        direction={'vertical'}
                        initialSlide={0}
                        modules={[Mousewheel]}
                        mousewheel={true}
                        onSlideChange={(s) => {
                            setSl(s.activeIndex);
                        }}
                        onSwiper={(s) => {
                            setSl(s.activeIndex = 0);
                        }}
                        className={styles.imagesContainer}>
                        <SwiperSlide className={styles.item}>
                            <Image width={1150} height={646} alt='' src={'../../images/gtx16x/swiper/1.png'}
                                   className={sl === 0
                                       ? styles.imageActive : styles.image}
                            />
                        </SwiperSlide>

                        <SwiperSlide className={styles.item}>
                            <Image width={1150} height={646} alt='' src={'../../images/gtx16x/swiper/2.png'}
                                   className={sl === 1
                                       ? styles.imageActive : styles.image}
                            />
                        </SwiperSlide>

                        <SwiperSlide className={styles.item}>
                            <Image width={1150} height={646} alt='' src={'../../images/gtx16x/swiper/3.png'}
                                   className={sl === 2
                                       ? styles.imageActive : styles.image}
                            />
                        </SwiperSlide>

                        <SwiperSlide className={styles.item}>
                            <Image width={1150} height={646} alt='' src={'../../images/gtx16x/swiper/4.png'}
                                   className={sl === 3
                                       ? styles.imageActive : styles.image}
                            />
                        </SwiperSlide>

                        <SwiperSlide className={styles.item}>
                            <Image width={1150} height={646} alt='' src={'../../images/gtx16x/swiper/5.png'}
                                   className={sl === 4
                                       ? styles.imageActive : styles.image}
                            />
                        </SwiperSlide>

                        <SwiperSlide className={styles.item}>
                            <Image width={1150} height={646} alt='' src={'../../images/gtx16x/swiper/6.png'}
                                   className={sl === 5
                                       ? styles.imageActive : styles.image}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <p className={styles.text}><span className={styles.textSpan}>Система: </span>
                    Intel i5-10400f, GeForce GTX 1650 4ГБ GDDR6, 16ГБ DDR4 3200МГц, Windows 10 (x64) 21H2, 1080p.
                </p>
            </div>
        </section>
    )
}

export default Gtx1630Swiper;
