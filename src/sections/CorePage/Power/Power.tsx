import cls from './Power.module.scss';
import Image from "next/image";

export const Power = () => {
    return (
        <div className={cls.section}>
            <div className={cls.titleContainer}>
                <h3 className={cls.title}>Компактные</h3>
                <div className={cls.line}/>
                <h3 className={cls.title}>и такие же мощные</h3>
            </div>
            <p className={cls.text}>
                Видеокарты серии CORE с&nbsp;двумя вентиляторами не&nbsp;уступают в&nbsp;производительности своим трех
                вентиляторным версиям.
            </p>

            <Image width={1540} height={762} className={cls.image} src={'../images/core/power/image.png'}
                   alt={'kfa2 core'}/>
            <Image width={630} height={616} className={cls.back} src={'../images/core/power/back.png'}
                   alt={''}/>
        </div>
    );
};
