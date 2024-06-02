import cls from './CoreWings.module.scss';
import Image from "next/image";

export const CoreWings = () => {
    return (
        <div className={cls.section}>
            <p className={cls.textAbsolute}>
                Wings
            </p>

            <div className={cls.imageContainer}>
                <Image width={1392} height={617} className={cls.imageL} src={'../images/core/wings/image.png'}
                       alt={'kfa2 core wings'}
                />
                <Image width={975} height={503} className={cls.imageR} src={'../images/core/wings/image2.png'}
                       alt={'kfa2 core wings'}
                />
                <p className={cls.textAbsoluteSpan}>
                    Wings
                </p>
            </div>

            <p className={cls.text}>
                <span className={cls.textSpan}>Продуманная система охлаждения&nbsp;&mdash;</span> залог стабильных
                игровых показателей
            </p>
        </div>
    );
};
