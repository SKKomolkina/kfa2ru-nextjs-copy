import cls from './Header.module.scss'
import Image from "next/image";

export const Header = () => {
    return (
        <div className={cls.section}>
            <Image width={1618} height={910} className={cls.image} src={'../../images/1650/header/image.png'} alt={''}/>
            <div className={cls.blur}/>

            <p className={cls.title}>Вступай</p>
            <p className={cls.titleBorder}>в игру</p>
        </div>
    );
};
