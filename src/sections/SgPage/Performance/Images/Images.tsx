import cls from './Images.module.scss';
import Image from "next/image";

export const Images = () => {
    return (
        <div className={cls.section}>
            <Image width={3155} height={1003} className={cls.image} src={'../images/extreme/performance/images.png'}
                   alt={''}/>
        </div>
    );
};
