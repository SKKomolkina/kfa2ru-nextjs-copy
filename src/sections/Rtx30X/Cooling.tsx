import cls from './Cooling.module.scss'
import title from './Rtx30x.module.scss'
import Image from "next/image";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const Cooling = () => {
    const query640 = useMediaQuery(640)

    return (
        <div className={cls.section}>
            <div className={cls.top}>
                <p className={title.title}>Система</p>
                <Image width={682} height={104} className={cls.subtitle}
                       src={'../../images/rtx30x/cooling/subtitle.svg'}
                       alt={'охлаждения'}/>
            </div>

            <div className={cls.textContainer}>
                <p className={cls.text}>
                    Система охлаждения видеокарт KFA2 серии&nbsp;Х представляют собой высококачественную конструкцию,
                    разработанную с&nbsp;учетом максимальной эффективности и&nbsp;надежности.
                </p>
            </div>

            <div className={cls.imageContainerTop}>
                <svg className={cls.lineTop} width="621" height="643" viewBox="0 0 621 643" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M430.643 587.903C496.636 522.591 627.247 329.02 619.685 318.382C608.961 303.293 324.779 644.644 313.093 641.985C301.406 639.325 511.759 344.092 498.698 336.113C488.063 329.617 235.413 556.872 214.103 562.192C192.792 567.511 393.522 348.525 381.148 336.113C368.774 323.701 139.173 557.759 132.986 551.553C126.799 545.347 325.334 241.783 309.655 235.042C289.032 226.177 54.6194 504.564 48.4325 501.904C42.2457 499.245 293.157 133.972 293.157 107.375C293.157 81.8016 85.3245 360.937 0.999973 440.73L259.788 0.999995"
                        stroke="white" strokeWidth="0.5"/>
                </svg>

                {!query640 ? (
                    <Image width={1451} height={685} className={cls.imageTop}
                           src={'../../images/rtx30x/cooling/imageTop.png'}
                           alt={'Geforce Rtx'}/>
                ) : (
                    <Image width={342} height={255} className={cls.imageTop}
                           src={'../../images/rtx30x/cooling/imageTop280.png'}
                           alt={'Geforce Rtx'}/>
                )}
            </div>

            <div className={cls.imageContainerBot}>
                <Image width={1426} height={802} className={cls.imageBot}
                       src={'../../images/rtx30x/cooling/imageBot.png'}
                       alt={'Kfa2'}/>
            </div>

            <div className={cls.textContainerBlack}>
                <svg className={cls.lineBot} width="621" height="643" viewBox="0 0 621 643" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M430.643 587.903C496.636 522.591 627.247 329.02 619.685 318.382C608.961 303.293 324.779 644.644 313.093 641.985C301.406 639.325 511.759 344.092 498.698 336.113C488.063 329.617 235.413 556.872 214.103 562.192C192.792 567.511 393.522 348.525 381.148 336.113C368.774 323.701 139.173 557.759 132.986 551.553C126.799 545.347 325.334 241.783 309.655 235.042C289.032 226.177 54.6194 504.564 48.4325 501.904C42.2457 499.245 293.157 133.972 293.157 107.375C293.157 81.8016 85.3245 360.937 0.999973 440.73L259.788 0.999995"
                        stroke="white" strokeWidth="0.5"/>
                </svg>
                <p className={cls.textWhite}>
                    Два больших вентилятора с&nbsp;поддержкой технологии Fan-Stop активно охлаждают компоненты
                    видеокарты, создавая мощный направленный поток воздуха.
                </p>
            </div>

            <div className={cls.fanStopContainer}>
                <Image width={1233} height={524} className={cls.blendFan}
                       src={'../../images/rtx30x/cooling/blend.png'}
                       alt={''}/>

                <h3 className={cls.title}>Fan-stop</h3>
                <p className={cls.textWhite}>
                    В&nbsp;режиме простоя и&nbsp;отсутствия нагрузки на&nbsp;графический процессор вентиляторы
                    не&nbsp;стартуют,
                    а&nbsp;позволяют в&nbsp;полной мере наслаждаться музыкой или просмотром видео.
                </p>
            </div>

            <div className={cls.textContainer}>
                {!query640 && (
                    <Image width={1233} height={524} className={cls.blendBot}
                           src={'../../images/rtx30x/cooling/blend.png'}
                           alt={''}/>
                )}
                <p className={cls.text}>
                    Видеокарты KFA2 оснащены системой Fan-Stop
                    с&nbsp;разнесёнными температурными точками, обеспечивающими плавную и&nbsp;тихую работу
                    вентиляторов.
                </p>
            </div>
        </div>
    );
};
