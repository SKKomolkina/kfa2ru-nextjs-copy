import cls from './ButtonArrow.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Arrow} from "@/shared/ui/Arrow/Arrow";
import Link from "next/link";

interface ButtonArrowProps {
    className?: string;
    classNameLine?: string;
    link: string;
}

export const ButtonArrow = ({className, classNameLine, link}: ButtonArrowProps) => {
    return (
            <Link href={link} className={classNames(cls.ButtonArrow, {}, [className])}>
                <Arrow className={classNames(cls.Line, {}, [classNameLine])}/>
            </Link>
    );
};
