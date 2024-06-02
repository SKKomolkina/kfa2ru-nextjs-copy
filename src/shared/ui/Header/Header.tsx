import cls from './Header.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Logo} from "@/shared/ui/Logo/Logo";

import Image from "next/image";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import Link from "next/link";
import {NextRouter, useRouter} from "next/router";
import {router} from "next/client";
import {rotate} from "next/dist/server/lib/squoosh/impl";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";

interface HeaderProps {
    className?: string;
    logoColor?: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    productPage?: boolean;
    darkFooter?: boolean;

}

export const Header = ({className, logoColor, setOpen, productPage, darkFooter}: HeaderProps) => {
    const [selected, setSelected] = useState(0)
    const router = useRouter()

    const [selectedTimeOut, setSelectedTimeOut] = useState(false)

    useEffect(() => {
        if (router.pathname === '/graphics-cards') {
            setSelected(1)
            // setTimeout(() => {
            //     setSelected(0)
            // }, 6000)
        }
        if (router.pathname === '/monitors') {
            setSelected(2)
            // setTimeout(() => {
            //     setSelected(0)
            // }, 6000)
        }
        if (router.pathname === '/accessories') {
            setSelected(3)
            // setTimeout(() => {
            //     setSelected(0)
            // }, 6000)
        }
        if (router.pathname === '/support') {
            setSelected(4)
            // setTimeout(() => {
            //     setSelected(0)
            // }, 8000)
        }
    }, [router])

    useEffect(() => {
        if (selected >= 1) {
            setTimeout(() => {
                setSelected(0)
            }, 12000)
        }
    }, [selected])

    return (
        <>
            <header className={classNames(cls.Header, {}, [])}>
                <Logo logoColor={logoColor}/>

                <nav
                    className={!logoColor ? cls.navigation : cls.navigationReverseColor}
                >
                    <div className={
                        (selected === 0 && cls.itemHoverLine) ||
                        (selected === 1 && cls.itemHoverLine1) ||
                        (selected === 2 && cls.itemHoverLine2) ||
                        (selected === 3 && cls.itemHoverLine3) ||
                        (selected === 4 && cls.itemHoverLine4)
                    }/>

                    <div onMouseOver={() => setSelected(1)}
                         onMouseEnter={() => setSelected(1)}
                         className={cls.navigationItem}>
                        <Link href={'/graphics-cards'}>
                            {selected === 1 ?
                                (darkFooter ? (<p className={cls.text}>Видеокарты</p>) : (
                                    <p className={cls.textDark}>Видеокарты</p>))
                                : <p className={cls.text}>Видеокарты</p>
                            }
                        </Link>
                    </div>
                    <div
                        onMouseOver={() => setSelected(2)}
                        onMouseEnter={() => setSelected(2)}
                        className={cls.navigationItem}>
                        <Link href={'/monitors'}>
                            {selected === 2 ?
                                (darkFooter ? (<p className={cls.text}>Мониторы</p>) : (
                                    <p className={cls.textDark}>Мониторы</p>))
                                : <p className={cls.text}>Мониторы</p>
                            }
                        </Link>
                    </div>
                    <div
                        onMouseOver={() => setSelected(3)}
                        onMouseEnter={() => setSelected(3)}
                        className={cls.navigationItem}>
                        <Link href={'/accessories'}>
                            {selected === 3 ?
                                (darkFooter ? (<p className={cls.text}>Аксессуары</p>) : (
                                    <p className={cls.textDark}>Аксессуары</p>))
                                : <p className={cls.text}>Аксессуары</p>
                            }
                        </Link>
                    </div>
                    <div
                        onMouseOver={() => setSelected(4)}
                        onMouseEnter={() => setSelected(4)}
                        className={cls.navigationItem}>
                        <Link href={'/support'}>
                            {selected === 4 ?
                                (darkFooter ? (<p className={cls.text}>Поддержка</p>) : (
                                    <p className={cls.textDark}>Поддержка</p>))
                                : <p className={cls.text}>Поддержка</p>
                            }
                        </Link>
                    </div>
                </nav>

                <button onClick={() => setOpen(true)} className={cls.Burger}>
                    {!logoColor ? (
                        <Image fill src={'/images/header/burger-menu.svg'} alt={'Открыть меню'}/>
                    ) : (
                        <Image fill src={'/images/header/burger-menuWhite.svg'} alt={'Открыть меню'}/>
                    )}
                </button>
            </header>

            {/*{productPage && (<ProductNavigation/>)}*/}
        </>
    );
};
