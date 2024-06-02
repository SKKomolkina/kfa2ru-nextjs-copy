import {classNames} from "@/shared/lib/classNames/classNames";
import {NextPage} from "next";

import cls from './Layout.module.scss';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

interface LayoutProps {
    className?: string;
    children?: any;
}

export const Layout = ({children, className}: LayoutProps) => {
    return (
        <div className={`${classNames(cls.main, {}, [className])}`}>
            {children}
        </div>
    )
}
