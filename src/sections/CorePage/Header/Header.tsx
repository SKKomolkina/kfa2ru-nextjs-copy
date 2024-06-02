import cls from './Header.module.scss';
import Image from "next/image";

export const Header = () => {
    return (
        <div className={cls.header}>
            <div className={cls.noise}/>

            <ul className={cls.tagsContainer}>
                <li className={cls.tag}>
                    <p className={cls.tagText}>Высокая производительность</p>
                </li>
                <li className={cls.tag}>
                    <p className={cls.tagText}>Захватывающая графика</p>
                </li>
                <li className={cls.tag}>
                    <p className={cls.tagText}>Надёжная система охлаждения</p>
                </li>
            </ul>

            <Image width={3826} height={2152} className={cls.image} src={'../images/core/header/image.png'}
                   alt={'40 core'}/>

            <h1 className={cls.title}>40 core</h1>
            <Image width={877} height={379} className={cls.subtitle} src={'../images/core/header/text.svg'}
                   alt={'скорость и мощь'}/>
        </div>
    );
};
