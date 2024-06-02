import cls from './XPageSolutions.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";

interface XPageSolutionsProps {
    className?: string;
}

export const XPageSolutions = ({className}: XPageSolutionsProps) => {
    return (
        <div className={cls.section}>
            <div className={cls.container}>
                <div className={cls.imageBlueContainer}>
                    <Image width={497} height={282} className={cls.imageBlue}
                           src={'../images/extreme/solutions/blue.png'} alt={''}/>
                </div>
                <p className={classNames(cls.text, {}, [className])}>
                    Традиции выверенных
                </p>
            </div>
            <div className={cls.container}>
                <p className={classNames(cls.text, {}, [className])}>
                    инженерных решений
                </p>
                <div className={cls.imageGreenContainer}>
                    <Image width={435} height={103} className={cls.imageGreen}
                           src={'../images/extreme/solutions/green.png'}
                           alt={''}/>
                </div>
            </div>
        </div>
    );
};
