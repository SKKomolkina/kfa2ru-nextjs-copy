import cls from './FirstBox.module.scss';
import Image from "next/image";

export const FirstBox = () => {
    return (
        <div className={cls.box}>
            <div className={cls.noise}/>
            <div className={cls.rect}/>

            <Image width={1139} height={884} className={cls.image} src={'../images/core/series/1.png'} alt={'core 40'}/>

            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className={cls.title}>
                // Разработанные
                с&nbsp;использованием передовых технологий
            </p>

            <p className={cls.text}>
                Видеокарты серии CORE обеспечивают беспрецедентную производительность
                и&nbsp;захватывающую визуализацию, которая поднимет ваш игровой опыт на&nbsp;новый уровень.
            </p>
        </div>
    );
};
