import cls from './SecondBox.module.scss';
import Image from "next/image";

export const SecondBox = () => {
    return (
        <div className={cls.section}>
            <p className={cls.text}>
                <span className={cls.textSpan}>Металлический бэкплейт </span>
                с&nbsp;вентиляционной решеткой защищает элементы печатной платы и&nbsp;гармонично завершает образ сборки
            </p>

            <div className={cls.heightBox}/>
            <div className={cls.widthBox}/>
            <Image width={1782} height={876} className={cls.image} src={'../images/core/fanstop/image1.png'}
                   alt={'Металлический бэкплейт'}/>
        </div>
    );
};
