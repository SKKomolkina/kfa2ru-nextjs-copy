import cls from './ArrowRotate.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";

interface ArrowRotateProps {
    className?: string;
}

export const ArrowRotate = ({className}: ArrowRotateProps) => {
    return (
        <svg className={classNames(cls.arrow, {}, [className])} width="18" height="18" viewBox="0 0 18 18" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M17 17V1H1" stroke="white" strokeWidth="0.623388" strokeLinecap="round"/>
            <path d="M1 17L16.6444 1.35556" stroke="white" strokeWidth="0.623388" strokeLinecap="round"/>
        </svg>
    );
};

export const ArrowRotateBlack = ({className}: ArrowRotateProps) => {
    return (
        <svg className={classNames(cls.arrow, {}, [className])} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 31V0.999998H1" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
            <path d="M1 31L30.3333 1.66667" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
        </svg>
    );
};
