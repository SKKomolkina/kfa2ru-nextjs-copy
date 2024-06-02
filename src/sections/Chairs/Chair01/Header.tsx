import cls from './Header.module.scss'
import Image from "next/image";

export const Header = () => {
    return (
        <div className={cls.section}>
            <p className={cls.title}>Игровое</p>
            <p className={cls.titleBorder}>
                кресло
            </p>

            <h1 className={cls.text}>
                01 RGB SE
            </h1>

            <Image className={cls.image} width={455} height={569} src={'../images/gc-01/header/image.png'} alt={'01 RGB SE'}/>

            <div className={cls.blur}/>
        </div>
    );
};
