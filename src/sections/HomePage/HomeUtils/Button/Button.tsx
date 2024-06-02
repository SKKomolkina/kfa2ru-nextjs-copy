import cls from './Button.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";

interface ButtonProps {
    className?: string;
    focus: boolean;
}

export const Button = ({className, focus}: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {}, [!focus && className])}>
            <svg className={cls.arrow} width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464466C15.9763 0.269204 15.6597 0.269204 15.4645 0.464466C15.2692 0.659728 15.2692 0.976311 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.7308 15.9763 7.7308 16.1716 7.53553L19.3536 4.35355ZM0 4.5L19 4.5V3.5L0 3.5L0 4.5Z"
                    fill="white"/>
            </svg>
        </button>
    );
};