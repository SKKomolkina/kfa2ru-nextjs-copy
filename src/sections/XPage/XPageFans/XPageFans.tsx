import cls from './XPageFans.module.scss';
import Image from "next/image";

export const XPageFans = () => {
    return (
        <div className={cls.section}>
            <p className={cls.text}>
                Три больших вентилятора
                с двойными подшипниками качения
            </p>
            <ul className={cls.tags}>
                <li className={cls.tag}>
                    <p className={cls.tagTitle}>3 вентилятора</p>
                    <p className={cls.tagText}>
                        92 - 102 - 92 мм
                    </p>
                </li>
                <li className={cls.tag}>
                    <p className={cls.tagTitle}>11 лопастей</p>
                    <p className={cls.tagText}>
                        Особой формы
                    </p>
                </li>
                <li className={cls.tag}>
                    <p className={cls.tagTitle}>До 20 мм</p>
                    <p className={cls.tagText}>
                        Увеличили высоту вентилятора
                    </p>
                </li>
            </ul>

            <div className={cls.imageContainer}>
                <Image className={cls.image} width={1670} height={900} src={'../images/extreme/fans/background.png'}
                       alt={''}/>
            </div>
        </div>
    );
};
