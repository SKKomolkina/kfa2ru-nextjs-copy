import cls from './CoreSafe.module.scss';
import Image from "next/image";

export const CoreSafe = () => {
    return (
        <div className={cls.section}>
            <p className={cls.title}>Надёжное охлаждение</p>
            <Image width={1540} height={718} className={cls.image} src={'../images/core/safe/image.png'}
                   alt={'Надёжное охлаждение'}
            />
            <p className={cls.text}>
                <span className={cls.textSpan}>Надёжное охлаждение </span>в&nbsp;условиях высокой игровой нагрузки.
                Высокий набранный радиатор с&nbsp;частыми
                рёбрами пронизан длинными тепловыми трубками.
            </p>
        </div>
    );
};
