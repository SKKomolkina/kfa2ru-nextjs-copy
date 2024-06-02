import cls from './XPageWays.module.scss';
import Image from "next/image";

export const XPageWays = () => {
    return (
        <div className={cls.section}>
            <p className={cls.title}>Воздушные потоки</p>
            <Image className={cls.image} width={1670} height={1000} src={'../images/extreme/ways/image.png'}
                   alt={'Воздушные потоки'}/>
        </div>
    );
};
