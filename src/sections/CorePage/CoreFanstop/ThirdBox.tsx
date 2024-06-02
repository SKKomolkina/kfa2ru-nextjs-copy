import cls from './ThirdBox.module.scss';
import Image from "next/image";

export const ThirdBox = () => {
    return (
        <div className={cls.section}>
            <p className={cls.text}>
                Усиленная крепёжная пластина
            </p>
            <Image width={1340} height={513} className={cls.image} src={'../images/core/fanstop/image2.png'}
                   alt={'Усиленная крепёжная пластина'}/>
        </div>
    );
};
