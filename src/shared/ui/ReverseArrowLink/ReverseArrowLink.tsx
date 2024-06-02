import cls from './ReverseArrowLink.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";

interface ReverseArrowLinkProps {
    className?: string;
    classNameArrow?: string;
}

export const ReverseArrowLink = ({className, classNameArrow}: ReverseArrowLinkProps) => {
    return (
        <div className={classNames(cls.ReverseArrowLink, {}, [className])}>
            <svg className={classNames(cls.ReverseArrow, {}, [classNameArrow])} width="46" height="46"
                 viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45 1V45H1" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
                <path d="M1 1L44.0222 44.0222" stroke="#1B1B1B" strokeWidth="1.35949" strokeLinecap="round"/>
            </svg>
        </div>
    );
};
