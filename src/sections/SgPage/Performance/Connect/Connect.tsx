import cls from './Connect.module.scss';
import Image from "next/image";

export const Connect = () => {
    return (
        <div className={cls.section}>
            <Image width={1920} height={751} className={cls.image} src={'../images/extreme/connect/image.png'}
                   alt={''}/>
            <Image width={788} height={75} className={cls.points} src={'../images/extreme/connect/points.png'}
                   alt={''}/>
        </div>
    );
};
