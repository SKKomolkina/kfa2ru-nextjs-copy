import cls from './Logo.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";

import Image from "next/image";

interface LogoProps {
    className?: string;
    logoColor?: boolean;
}

export const Logo = ({className, logoColor}: LogoProps) => {
    return (
        <div className={classNames(cls.Logo, {}, [className])}>
            <a href={'/'}>
                {!logoColor ? (
                    <Image className={cls.image} fill src={'/images/logo.svg'} alt={'KFA2'}/>
                ) : (
                    <Image className={cls.image} fill src={'/images/kfa2_logoWhite.svg'} alt={'KFA2'}/>
                )}
            </a>
        </div>
    );
};
