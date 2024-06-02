import cls from './Header.module.scss';
import Image from "next/image";

export const Header = () => {
    return (
        <div className={cls.header}>
            <Image className={cls.dust} width={1443} height={783} src={'../images/gc-04/header/dust.png'} alt={''}/>

            <div className={cls.titleContainer}>
                <h1 className={cls.title}>
                    04 L
                </h1>

                <h1 className={cls.title}>
                    Black/White
                </h1>
            </div>

            <p className={cls.text}>Игровое кресло</p>
            <p className={cls.textBorder}>Игровое кресло</p>

            <Image className={cls.image} width={410} height={576} src={'../images/gc-04/header/image.png'} alt={'04 L'}/>
            <div className={cls.blur}/>
        </div>
    );
};
