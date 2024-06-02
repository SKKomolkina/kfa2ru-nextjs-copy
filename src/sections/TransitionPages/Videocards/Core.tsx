import cls from './Core.module.scss'
import boxStyles from './Series.module.scss';
import Image from "next/image";
import {useState} from "react";
import {usePathname} from "next/navigation";

export const Core = () => {
    const pathname = usePathname()
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)

    return (
        <div className={cls.container}>
            <h2 className={boxStyles.title}>Серия CORE</h2>

            <a href={`${pathname}/core`} className={active ? boxStyles.boxHover : boxStyles.box} onMouseOver={() => setActive(true)}
               onMouseLeave={() => setActive(false)}>
                <Image width={1118} height={749} className={cls.image40}
                       src={'../images/transition/videocards/core/40.png'}
                       alt={'Rtx 40'}/>

                <div className={boxStyles.buttonContainer}>
                    <div className={boxStyles.tagContainer}>
                        <div
                            className={active ?
                                `${boxStyles.tagHover} ${boxStyles.green}` :
                                `${boxStyles.tag} ${boxStyles.green}`}
                        >
                            <p className={boxStyles.tagText}>
                                LED подсветка
                            </p>
                        </div>
                        <div className={active ?
                            `${boxStyles.tagHover} ${boxStyles.green}` :
                            `${boxStyles.tag} ${boxStyles.green}`}>
                            <p className={boxStyles.tagText}>
                                RT + DLSS
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

                <div style={{maxWidth: '42%'}} className={boxStyles.subtitleContainerReverse}>
                    <h3 className={boxStyles.subtitle}>RTX 40</h3>
                    <p className={boxStyles.text}>Всё самое необходимое для гейминга</p>
                </div>
            </a>

            <a href={`${pathname}/core/rtx30`} className={active2 ? boxStyles.boxHover : boxStyles.box} onMouseOver={() => setActive2(true)}
               onMouseLeave={() => setActive2(false)}>
                <Image width={912} height={674} className={cls.image30}
                       src={'../images/transition/videocards/core/30.png'}
                       alt={'Rtx 30'}/>

                <div className={boxStyles.buttonContainer}>
                    <div className={boxStyles.tagContainer}>
                        <div
                            className={active2 ?
                                `${boxStyles.tagHover} ${boxStyles.blue}` :
                                `${boxStyles.tag} ${boxStyles.blue}`}
                        >
                            <p className={boxStyles.tagText}>
                                Видеопамять до 12 ГБ
                            </p>
                        </div>
                        <div className={active2 ?
                            `${boxStyles.tagHover} ${boxStyles.blue}` :
                            `${boxStyles.tag} ${boxStyles.blue}`}>
                            <p className={boxStyles.tagText}>
                                DLSS
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

                <div style={{maxWidth: '42%'}} className={boxStyles.subtitleContainerReverse}>
                    <h3 className={boxStyles.subtitle}>RTX 30</h3>
                    <p className={boxStyles.text}>Комфортный FPS в&nbsp;играх с&nbsp;DLSS и&nbsp;RT в&nbsp;Full&nbsp;HD</p>
                </div>
            </a>
        </div>
    );
};
