import cls from './XPageCooling.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";

interface XPageCoolingProps {
    className?: string;
}

export const XPageCooling = ({className}: XPageCoolingProps) => {
    return (
        <div className={cls.section}>
            <div className={cls.textContainer}>
                <p className={classNames(cls.text, {}, [className])}>
                    Стабильность показателей
                </p>
                <div className={cls.imageContainerGreen}>
                    <Image width={636} height={357} className={cls.imageGreen}
                           src={'../images/extreme/cooling/green.png'} alt={''}/>
                </div>
                <p className={classNames(cls.text, {}, [className])}>
                    в игровой нагрузке
                </p>
                <p className={classNames(cls.text, {}, [className])}>
                    определяется качеством
                </p>
                <div className={cls.imageContainerBlue}>
                    <Image width={388} height={219} className={cls.imageBlue}
                           src={'../images/extreme/cooling/blue.png'} alt={''}/>
                </div>
                <p className={classNames(cls.text, {}, [className])}>
                    системы охлаждения
                </p>
            </div>

            <Image className={cls.titleImage} width={1540} height={878} src={'../images/extreme/cooling/image.png'}
                   alt={'GeforceRtx'}/>
        </div>
    );
};
