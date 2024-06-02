import cls from './Line.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";

interface LineProps {
    className?: string;
}

export const Line = ({className}: LineProps) => {
    return (
        <div className={classNames(cls.Line, {}, [className])}>

        </div>
    );
};
