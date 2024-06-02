import cls from './Arrow.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";

interface ArrowProps {
    className?: string;
}

export const Arrow = ({className}: ArrowProps) => {
    return (
        <div className={classNames(cls.Arrow, {}, [className])}>
            <svg className={classNames(cls.line, {}, [className])} width="47" height="9" viewBox="0 0 47 9" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M46.5543 4.85355C46.7496 4.65829 46.7496 4.34171 46.5543 4.14645L43.3723 0.964466C43.1771 0.769204 42.8605 0.769204 42.6652 0.964466C42.47 1.15973 42.47 1.47631 42.6652 1.67157L45.4937 4.5L42.6652 7.32843C42.47 7.52369 42.47 7.84027 42.6652 8.03553C42.8605 8.2308 43.1771 8.2308 43.3723 8.03553L46.5543 4.85355ZM0.898438 5L46.2008 5V4L0.898438 4V5Z"
                />
            </svg>
        </div>
    );
};