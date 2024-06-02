import cls from './SgSt.module.scss'
import boxStyles from './Series.module.scss';
import Image from "next/image";
import {useState} from "react";
import {usePathname} from "next/navigation";

export const SgSt = () => {
    const pathname = usePathname()
    const [active, setActive] = useState(false)

    return (
        <div className={cls.container}>
            <h2 className={boxStyles.title}>Серия SG/ST</h2>

            <a href={`${pathname}/s`} className={active ? boxStyles.boxHover : boxStyles.box}
               onMouseOver={() => setActive(true)}
               onMouseLeave={() => setActive(false)}>
                <Image width={1211} height={712} className={cls.image}
                       src={'../images/transition/videocards/sg/image.png'}
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
                                Охлаждение
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

                <div className={boxStyles.subtitleContainer}>
                    <h3 className={boxStyles.subtitle}>RTX 40</h3>
                    <p className={boxStyles.text}>Классика в вольном исполнении</p>
                </div>
            </a>
        </div>
    );
};
