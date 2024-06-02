import cls from './Navigation.module.scss'
import {Logo} from "@/shared/ui/Logo/Logo";
import {Dispatch, SetStateAction, useState} from "react";
import Image from "next/image";

import blur from './blur.svg'
import button from './button.svg'

interface NavigationProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navigation = ({open, setOpen}: NavigationProps) => {
    const [activeLink, setActiveLink] = useState(0)

    return (
        <div className={cls.navigation}>
            <div className={open ? cls.container : cls.containerHidden}>
                <Image width={1015} height={647} className={cls.blur} src={blur} alt={''}/>

                <nav className={cls.logoContainer}>
                    <Logo logoColor={true}/>

                    <button onClick={() => setOpen(false)} className={cls.buttonClose}>
                        <Image className={cls.buttonImage} fill src={button} alt={''}/>
                    </button>
                </nav>

                <nav className={cls.linksContainer}>
                    <a onMouseOut={() => setActiveLink(0)} onMouseLeave={() => setActiveLink(0)}
                       onMouseOver={() => setActiveLink(1)} onMouseEnter={() => setActiveLink(1)}
                       href={'/graphics-cards'} className={cls.link}>
                        <p>Видеокарты</p>
                        <div className={activeLink === 1 ? cls.linkUnderline : cls.containerHidden}/>
                    </a>
                    <a onMouseOut={() => setActiveLink(0)} onMouseLeave={() => setActiveLink(0)}
                       onMouseOver={() => setActiveLink(2)} onMouseEnter={() => setActiveLink(2)}
                       href={'/monitors'} className={cls.link}>
                        <p>Мониторы</p>
                        <div className={activeLink === 2 ? cls.linkUnderline : cls.containerHidden}/>
                    </a>
                    <a onMouseOut={() => setActiveLink(0)} onMouseLeave={() => setActiveLink(0)}
                       onMouseOver={() => setActiveLink(3)} onMouseEnter={() => setActiveLink(3)}
                       href={'/accessories'} className={cls.link}>
                        <p>Аксессуары</p>
                        <div className={activeLink === 3 ? cls.linkUnderline : cls.containerHidden}/>
                    </a>
                    <a onMouseOut={() => setActiveLink(0)} onMouseLeave={() => setActiveLink(0)}
                       onMouseOver={() => setActiveLink(4)} onMouseEnter={() => setActiveLink(4)}
                       href={'/support'} className={cls.link}>
                        <p>Поддержка</p>
                        <div className={activeLink === 4 ? cls.linkUnderline : cls.containerHidden}/>
                    </a>
                </nav>

                <nav className={cls.aboutContainer}>
                    <p className={cls.aboutTitle}>Наши Соцсети</p>

                    <a href={'https://www.youtube.com/channel/UCa52R-_mdCmiHM3fRpz-Njw'} target={'_blank'}
                       className={cls.aboutLink}>YouTube</a>
                    <a href={'https://www.tiktok.com/@kfa2ru'} target={'_blank'}
                       className={cls.aboutLink}>TikTok</a>
                    <a href={'https://vk.com/kfa2ru'} target={'_blank'} className={cls.aboutLink}>VK</a>
                </nav>
            </div>
        </div>
    );
};
