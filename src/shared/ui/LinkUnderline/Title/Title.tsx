import cls from './Title.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";

interface TitleProps {
    className?: string;
    title: string;
}

export const Title = ({className, title}: TitleProps) => {
    return (
        <h2 className={classNames(cls.Title, {}, [className])}>
            {title}
        </h2>
    );
};
