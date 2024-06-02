import cls from './ProductNavigation.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import {useEffect, useRef} from "react";
import {useInView} from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";

interface ProductNavigationProps {
    className?: string;
    pageLink?: string;
}

const characterList = [
    {
        from: 'specs',
        to: 'Характеристики'
    },
    {
        from: 'graphics-cards',
        to: 'Видеокарты'
    },
    {
        from: 'hof',
        to: 'HOF'
    },
    {
        from: 's',
        to: 'S'
    },
    {
        from: 'x',
        to: 'X'
    },
    {
        from: 'rtX30',
        to: 'RTX30'
    },
    {
        from: 'gtX16',
        to: 'GTX16'
    },
    {
        from: 'core', to: 'CORE'
    },
    {
        from: 'rtx30',
        to: 'RTX30'
    },
    {
        from: 'acceSSorieS',
        to: 'Аксессуары'
    },
    {
        from: 'chairS-gc-01',
        to: 'CHAIRS GC 01'
    },
    {
        from: 'chairS-gc-03',
        to: 'CHAIRS GC 03'
    },
    {
        from: 'chairS-gc-04',
        to: 'CHAIRS GC 04'
    },
    {
        from: 'vivance32q',
        to: 'Vivance32Q'
    },
    {
        from: 'monitorS',
        to: 'Мониторы'
    }
]

const Arr = () => {
    return (
        <svg className={cls.arr} width="41" height="4" viewBox="0 0 41 4" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M40.1768 2.17678C40.2744 2.07915 40.2744 1.92085 40.1768 1.82322L38.5858 0.232233C38.4882 0.134602 38.3299 0.134602 38.2322 0.232233C38.1346 0.329864 38.1346 0.488155 38.2322 0.585786L39.6464 2L38.2322 3.41421C38.1346 3.51184 38.1346 3.67014 38.2322 3.76777C38.3299 3.8654 38.4882 3.8654 38.5858 3.76777L40.1768 2.17678ZM0 2.25H40V1.75L0 1.75L0 2.25Z"
                fill="#C7C7C7"/>
        </svg>
    )
}

export const ProductNavigation = ({className, pageLink}: ProductNavigationProps) => {
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        console.log(pathname)
    }, [pathname])

    return (
        <nav className={classNames(cls.nav, {}, [className])}>
            <Breadcrumbs linkClassName={cls.navLinkItem} replaceCharacterList={characterList} omitRootLabel={true}
                         inactiveItemClassName={cls.navLink}
                         activeItemClassName={cls.navLinkActive}
                         listClassName={cls.breadcrumbs} containerClassName={cls.breadcrumbsContainer}>
                <Arr/>
            </Breadcrumbs>

            <nav className={cls.linksContainer}>
                <Link href={`${(pathname.endsWith(pageLink)) ? '' : pageLink}`}
                      className={`${(pathname.endsWith(pageLink)) ? cls.pageLinkActive : cls.pageLink}`}>
                    Описание
                </Link>
                <Link href={`${(pathname.endsWith('/specs')) ? '' : `${pathname}/specs`}`}
                      className={`${(pathname.endsWith('/specs')) ? cls.pageLinkActive : cls.pageLink}`}>
                    Характеристики
                </Link>
            </nav>

            <div className={cls.buttonContainer}>
                <Link href={'/shop'} className={cls.shopLink}>Купить</Link>
            </div>
        </nav>
    );
};
