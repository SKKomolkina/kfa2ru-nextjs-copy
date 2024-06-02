import cls from './X.module.scss'
import boxStyles from "@/sections/TransitionPages/Videocards/Series.module.scss";
import Image from "next/image";
import {useState} from "react";
import {usePathname} from "next/navigation";

export const X = () => {
    const pathname = usePathname()

    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    return (
        <div className={cls.container}>
            <h2 style={{marginBottom: '0'}} className={boxStyles.title}>Серия X</h2>

            <a href={`${pathname}/x`} className={active ? boxStyles.boxHover : boxStyles.box}
               onMouseOver={() => setActive(true)}
               onMouseLeave={() => setActive(false)}>
                <Image width={1368} height={749} className={cls.image40}
                       src={'../images/transition/videocards/x/40.png'}
                       alt={'Rtx 40'}/>

                <div className={boxStyles.buttonContainer}>
                    <div className={boxStyles.tagContainer}>
                        <div
                            className={active ?
                                `${boxStyles.tagHover} ${boxStyles.green}` :
                                `${boxStyles.tag} ${boxStyles.green}`}
                        >
                            <p className={boxStyles.tagText}>
                                WINGS 2.0
                            </p>
                        </div>
                        <div className={active ?
                            `${boxStyles.tagHover} ${boxStyles.green}` :
                            `${boxStyles.tag} ${boxStyles.green}`}>
                            <p className={boxStyles.tagText}>
                                RGB
                            </p>
                        </div>
                    </div>

                    <svg className={active ? boxStyles.buttonHover : boxStyles.button} width="32" height="32"
                         viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 31V0.999998H1" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
                        <path d="M1 31L30.3333 1.66667" stroke="#1B1B1B" strokeWidth="1.35949"
                              strokeLinecap="round"/>
                    </svg>
                </div>

                <div style={{maxWidth: '66%'}} className={boxStyles.subtitleContainer}>
                    <h3 className={boxStyles.subtitle}>RTX 40</h3>
                    <p className={boxStyles.text}>Идеальный баланс функциональности, производительности и стиля</p>
                </div>
            </a>

            <a href={`${pathname}/x/rtx30`} className={active2 ? boxStyles.boxHover : boxStyles.box}
               onMouseOver={() => setActive2(true)}
               onMouseLeave={() => setActive2(false)}>
                <Image width={977} height={677} className={cls.image30}
                       src={'../images/transition/videocards/x/30.png'}
                       alt={'Rtx 30'}/>

                <div className={boxStyles.buttonContainer}>
                    <div className={boxStyles.tagContainer}>
                        <div
                            className={active2 ?
                                `${boxStyles.tagHover} ${boxStyles.blue}` :
                                `${boxStyles.tag} ${boxStyles.blue}`}
                        >
                            <p className={boxStyles.tagText}>
                                DLSS
                            </p>
                        </div>
                        <div className={active2 ?
                            `${boxStyles.tagHover} ${boxStyles.blue}` :
                            `${boxStyles.tag} ${boxStyles.blue}`}>
                            <p className={boxStyles.tagText}>
                                Видеопамять до 12 ГБ
                            </p>
                        </div>
                        <div className={active2 ?
                            `${boxStyles.tagHover} ${boxStyles.blue}` :
                            `${boxStyles.tag} ${boxStyles.blue}`}>
                            <p className={boxStyles.tagText}>
                                RayTracing
                            </p>
                        </div>
                    </div>

                    <svg className={active2 ? boxStyles.buttonHover : boxStyles.button} width="32" height="32"
                         viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 31V0.999998H1" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
                        <path d="M1 31L30.3333 1.66667" stroke="#1B1B1B" strokeWidth="1.35949"
                              strokeLinecap="round"/>
                    </svg>
                </div>

                <div style={{maxWidth: '80%'}} className={boxStyles.subtitleContainerReverse}>
                    <h3 className={boxStyles.subtitle}>RTX 30</h3>
                    <p className={boxStyles.text}>Максимум возможностей за каждый вложенный рубль</p>
                </div>
            </a>

            <a href={`${pathname}/x/gtx16`} className={active3 ? boxStyles.boxHover : boxStyles.box}
               onMouseOver={() => setActive3(true)}
               onMouseLeave={() => setActive3(false)}>
                <Image width={900} height={647} className={cls.image16}
                       src={'../images/transition/videocards/x/16.png'}
                       alt={'Gtx 16'}/>

                <div className={boxStyles.buttonContainer}>
                    <div className={boxStyles.tagContainer}>
                        <div
                            className={active3 ?
                                `${boxStyles.tagHover} ${boxStyles.blue}` :
                                `${boxStyles.tag} ${boxStyles.blue}`}
                        >
                            <p className={boxStyles.tagText}>
                                Видеопамять до 4 ГБ
                            </p>
                        </div>
                    </div>

                    <svg className={active3 ? boxStyles.buttonHover : boxStyles.button} width="32" height="32"
                         viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 31V0.999998H1" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
                        <path d="M1 31L30.3333 1.66667" stroke="#1B1B1B" strokeWidth="1.35949"
                              strokeLinecap="round"/>
                    </svg>
                </div>

                <div className={boxStyles.subtitleContainerReverse}>
                    <h3 className={boxStyles.subtitle}>GTX 16</h3>
                    <p className={boxStyles.text}>Входной билет в мир видеоигр</p>
                </div>
            </a>
        </div>
    );
};
