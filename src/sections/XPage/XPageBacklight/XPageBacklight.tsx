import cls from './XPageBacklight.module.scss';
import Image from "next/image";

export const XPageBacklight = () => {
    return (
        <div className={cls.section}>
            <p className={cls.title}>Подсветка</p>
            <p className={cls.titleSpan}>Подсветка</p>

            <div className={cls.imageContainer}>
                <Image className={cls.image} width={1011} height={632} src={'../images/extreme/backlight/image.png'}
                       alt={'Подсветка'}/>
            </div>

            <p className={cls.text}>
                Настраивая 5V&nbsp;ARGB подсветка с&nbsp;возможностью синхронизации с&nbsp;остальными элементами
                системы.
            </p>

            <div className={cls.blueContainer}>
                <Image className={cls.imageBlue} width={1445} height={1085}
                       src={'../images/extreme/backlight/imageBlue.png'}
                       alt={'Подсветка'}/>
            </div>
        </div>
    );
};
