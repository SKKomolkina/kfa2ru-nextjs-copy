import cls from './ProductNavigation.module.scss'
import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

interface UtilsNavigationProps {
    scrollRef?: any;
}

export const UtilsNavigation = ({scrollRef, scroll}: any) => {
    const pathname = usePathname()

    return (
        <div className={cls.nav}>
            <nav className={cls.linksContainer}>
                <Link href={'/xtreme-tuner'} className={cls.pageLink}>Описание</Link>
                <Link href={`/instructions`}
                      className={cls.pageLink}>Руководство</Link>
            </nav>

            <div className={cls.buttonContainer}>
                {pathname === '/xtreme-tuner' ?
                    <Link href={'./downloads/extreme/XtremeTuner_v1.1.0.0.rar'}
                          className={cls.shopLink}>Установить</Link> :
                    <Link href={'/xtreme-tuner'} className={cls.shopLink}>Установить</Link>}
            </div>
        </div>
    );
};
