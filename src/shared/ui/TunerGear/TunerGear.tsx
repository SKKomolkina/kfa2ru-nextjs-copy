import cls from './TunerGear.module.scss'
import blur from "@/sections/HomePage/HomeSeries/HomeSeries.module.scss";

interface TunerGearProps {
    firstLink?: boolean,
    secondLink?: boolean,
}

export const TunerGear = ({firstLink, secondLink}: TunerGearProps) => {
    return (
        <div className={cls.section}>
            <div className={blur.blur}/>

            <a href={'../../downloads/XTGearv1.38.zip'} className={cls.button}>
                <svg className={cls.icon} width="22" height="21" viewBox="0 0 22 21" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 10.9018H9.82143V18.8929L22 20.5V10.9018ZM9.03571 10.9018H0V17.5982L9.03571 18.7902V10.9018ZM22 0.5L9.82143 2.08036V10.1875H22V0.5ZM9.03571 2.18304L0 3.35714V10.1875H9.03571V2.18304Z"
                        fill="white"/>
                </svg>

                <p className={cls.buttonText}>Загрузить</p>
            </a>

            <div className={cls.textContainer}>
                <h4 className={cls.title}>Xtreme Tuner Gear</h4>

                <p className={cls.text}>
                    Утилита Xtreme Tuner Gear позволит настраивать периферию KFA2 без привязки к&nbsp;другой продукции
                    KFA2.
                    Владельцы видеокарт KFA2 серии GeForce RTX могут настраивать периферию в&nbsp;десктоп версии утилиты
                    Xtreme Tuner Plus.
                </p>

                <div className={cls.linksContainer}>
                    <a target={'_blank'} href={'https://youtu.be/EgsQgge-uMc'}
                       className={cls.link}>
                        <svg className={cls.arrow} width="46" height="8" viewBox="0 0 46 8" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M45.3536 4.35356C45.5488 4.1583 45.5488 3.84171 45.3536 3.64645L42.1716 0.46447C41.9763 0.269208 41.6597 0.269208 41.4645 0.46447C41.2692 0.659732 41.2692 0.976314 41.4645 1.17158L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34028 41.4645 7.53554C41.6597 7.7308 41.9763 7.7308 42.1716 7.53554L45.3536 4.35356ZM-4.37114e-08 4.5L45 4.5L45 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                fill="white"/>
                        </svg>

                        <p className={cls.text}>
                            Инструкции по установке
                        </p>
                    </a>

                    <a target={'_blank'} href={`${(firstLink && 'https://youtu.be/9I0CE3W61WI') || (secondLink && 'https://youtu.be/0LRxDHi-Cew')}`}
                       className={cls.link}>
                        <svg className={cls.arrow} width="46" height="8" viewBox="0 0 46 8" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M45.3536 4.35356C45.5488 4.1583 45.5488 3.84171 45.3536 3.64645L42.1716 0.46447C41.9763 0.269208 41.6597 0.269208 41.4645 0.46447C41.2692 0.659732 41.2692 0.976314 41.4645 1.17158L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34028 41.4645 7.53554C41.6597 7.7308 41.9763 7.7308 42.1716 7.53554L45.3536 4.35356ZM-4.37114e-08 4.5L45 4.5L45 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                fill="white"/>
                        </svg>

                        <p className={cls.text}>
                            Инструкции по установке
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};
