import cls from './BoxContainer.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {NextComponentType, NextPage} from "next";

interface BoxContainerProps {
    className?: string;
    children: any;
}

export const BoxContainer = ({className, children}: BoxContainerProps) => {
    return (
        <div className={classNames(cls.BoxContainer, {}, [className])}>
            {children}
        </div>
    );
};
