import cls from './Classic.module.scss'
import Image from "next/image";
import title from './Rtx30x.module.scss'
import {useState} from "react";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const Classic = () => {
    const [active50, setActive50] = useState(false)
    const query640 = useMediaQuery(640)

    return (
        <div className={cls.section}>
            <div className={cls.top}>
                <Image width={1452} height={734} className={cls.lines} src={'../../images/rtx30x/classic/lines.png'}
                       alt={''}/>

                <p className={cls.text}>
                    Чёрное и&nbsp;белое исполнение
                </p>

                <div className={cls.titleContainer}>
                    <Image width={526} height={105} className={cls.subtitle}
                           src={'../../images/rtx30x/classic/subtitle.svg'}
                           alt={''}/>

                    <p className={title.title}>жанра</p>
                </div>

            </div>
            {!query640 ? (
                <>
                    <div className={active50 ? cls.hidden : cls.mid}>
                        <p className={cls.series}>3060 tI / 3060</p>
                    </div>
                    <div className={active50 ? cls.bot : cls.hidden}>
                        <p className={cls.series}>3050</p>
                    </div>
                </>
            ) : (
                <>
                    <div className={cls.mid}>
                        <p className={cls.series}>3060 tI / 3060</p>
                    </div>
                    <div className={cls.bot}>
                        <p className={cls.series}>3050</p>
                    </div>
                </>
            )}


            <div className={cls.buttonsContainer}>
                <button className={cls.button} onClick={() => setActive50(false)}>
                    RTX 3060 Ti / 3060
                </button>

                <button className={cls.button} onClick={() => setActive50(true)}>
                    RTX 3050
                </button>
            </div>
        </div>
    );
};
