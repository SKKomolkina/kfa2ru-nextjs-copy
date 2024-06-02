import cls from './Footer.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";

interface FooterProps {
    className?: string;
    color?: boolean;
    classNameColor?: string;
}

export const Footer = ({className, classNameColor, color}: FooterProps) => {
    return (
        <footer className={classNames(cls.Footer, {}, [className])}>
            <nav className={cls.navigation}>
                <div className={cls.item}>
                    <p className={classNames(cls.header, {}, [classNameColor])}>Продукция</p>

                    <ul className={cls.list}>
                        <li className={cls.listItem}>
                            <a href={'/graphics-cards'}>
                                <p className={cls.link}>Видеокарты</p>
                            </a>
                        </li>
                        <li className={cls.listItem}>
                            <a href={'/monitors'}>
                                <p className={cls.link}>Мониторы</p>
                            </a>
                        </li>
                        <li className={cls.listItem}>
                            <a href={'/accessories'}>
                                <p className={cls.link}>Аксессуары</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cls.item}>
                    <p className={cls.header}>Загрузки</p>

                    <ul className={cls.list}>
                        <li className={cls.listItem}>
                            <a href={'https://old.kfa2.ru/xtplus'}>
                                <p className={cls.link}>Xtreme Tuner</p>
                            </a>
                        </li>
                        <li className={cls.listItem}>
                            <a href={'https://old.kfa2.ru/hof-ai'}>
                                <p className={cls.link}>HOF AI (RTX)</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cls.item}>
                    <p className={cls.header}>Поддержка</p>

                    <ul className={cls.list}>
                        <li className={cls.listItem}>
                            <a href={'/shop'}>
                                <p className={cls.link}>Где купить</p>
                            </a>
                        </li>
                        <li className={cls.listItem}>
                            <p className={cls.link}>Фото и видео</p>
                        </li>
                    </ul>
                </div>

                <div className={cls.item}>
                    <p className={cls.header}>О компании</p>

                    <ul className={cls.list}>
                        <li className={cls.listItem}>
                            <a href={'https://old.kfa2.ru/about'}>
                                <p className={cls.link}>Наша история</p>
                            </a>
                        </li>
                        <li className={cls.listItem}>
                            <p className={cls.link}>Новости</p>
                        </li>
                    </ul>
                </div>

                <div className={cls.itemHidden}>
                    <p className={cls.header}>Наши соцсети</p>

                    <ul className={cls.list}>
                        <li className={cls.listItem}>
                            <a target={"_blank"} href="https://vk.com/kfa2ru">
                                <p className={cls.link}>VK</p>
                            </a>
                        </li>
                        <li className={cls.listItem}>
                            <a target={"_blank"} href=" https://www.youtube.com/channel/UCa52R-_mdCmiHM3fRpz-Njw">
                                <p className={cls.link}>YouTube</p>
                            </a>
                        </li>
                        <li className={cls.listItem}>
                            <a target={"_blank"} href={'https://www.tiktok.com/@kfa2ru'}>
                                <p className={cls.link}>TikTok</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cls.itemMobile}>
                    <ul className={cls.listMobile}>
                        <li className={cls.listItemMobile}>
                            <a target={"_blank"} href="https://vk.com/kfa2ru">
                                {!color ? (
                                    <Image width={21} height={12} src={'/images/ui/icons/vk.svg'} alt={'Вконтакте'}/>
                                ) : (
                                    <Image width={21} height={12} src={'/images/ui/icons/vkWhite.svg'} alt={'Вконтакте'}/>
                                )}
                            </a>
                        </li>
                        <li className={cls.listItemMobile}>
                            <a target={"_blank"} href=" https://www.youtube.com/channel/UCa52R-_mdCmiHM3fRpz-Njw">
                                {!color ? (
                                    <Image width={17} height={12} src={'/images/ui/icons/youtube.svg'} alt={'Youtube'}/>
                                ) : (
                                    <Image width={17} height={12} src={'/images/ui/icons/youtubeWhite.svg'} alt={'Youtube'}/>
                                )}
                            </a>
                        </li>
                        <li className={cls.listItemMobile}>
                            <a target={"_blank"} href={'https://www.tiktok.com/@kfa2ru'}>
                                {!color ? (
                                    <Image width={21} height={12} src={'/images/ui/icons/tiktok.svg'} alt={'TikTok'}/>
                                ) : (
                                    <Image width={21} height={12} src={'/images/ui/icons/tiktokWhite.svg'} alt={'TikTok'}/>
                                )}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={!color ? cls.about : cls.aboutWhite}>
                <div className={cls.copyright}>
                    <p className={cls.text}>
                        &copy;️ Galaxy Microsystems Ltd.&nbsp;2023
                        Все права защищены.
                    </p>
                </div>

                <div className={!color ? cls.line : cls.lineWhite}/>

                <div className={cls.textWrapper}>
                    <p className={cls.text}>Политика конфиденциальности</p>
                    <p className={cls.text}>Условия использования</p>
                </div>
            </div>
        </footer>
    );
};
