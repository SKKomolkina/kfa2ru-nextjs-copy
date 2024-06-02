import cls from './Text.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";

interface TextProps {
    className?: string;
    text: string;
}

export const Text = ({className, text}: TextProps) => {
    return (
        <p className={classNames(cls.Text, {}, [className])}>
            {text}
        </p>
    );
};
