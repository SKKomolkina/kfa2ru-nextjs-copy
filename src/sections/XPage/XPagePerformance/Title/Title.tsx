import cls from './Title.module.scss';
import Image from "next/image";

export const Title = () => {
    return (
        <div className={cls.titleContainer}>
            <p className={cls.title}>
                Высокая
            </p>
            <div className={cls.imageContainer}>
                <Image width={1086} height={606} className={cls.image} src={'../images/extreme/performance/title.png'}
                       alt={''}/>
            </div>

            <div className={cls.imageContainerSmall}>
                <Image width={456} height={228} className={cls.imageSmall}
                       src={'../images/extreme/performance/title2.png'}
                       alt={''}/>
            </div>

            <p className={cls.titleRight}>
                производительность
            </p>
        </div>
    );
};
