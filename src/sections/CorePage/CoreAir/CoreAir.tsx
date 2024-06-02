import cls from './CoreAir.module.scss';
import Image from "next/image";

export const CoreAir = () => {
    return (
        <div className={cls.section}>
            <p className={cls.text}>
                Воздушные потоки
            </p>
            <div className={cls.imageContainer}>
                <p className={cls.textSpan}>
                    Воздушные потоки
                </p>
                <div className={cls.noise}/>
                <Image width={1592} height={971} className={cls.image} src={'../images/core/air/image.png'}
                       alt={'Воздушные потоки'}/>
            </div>
        </div>
    );
};
