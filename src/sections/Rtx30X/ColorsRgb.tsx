import cls from './ColorsRgb.module.scss'
import Image from "next/image";

export const ColorsRgb = () => {
    return (
        <div className={cls.section}>
            <Image width={1731} height={1263} className={cls.image} src={'../../images/rtx30x/colors/rgb/image.png'}
                   alt={''}/>

            <h3 className={cls.title}>
                RGB держатель
            </h3>
            <p className={cls.text}>
                Функциональный держатель для видеокарты с&nbsp;настраиваемой RGB подсветкой&sup3;.
            </p>
        </div>
    );
};
