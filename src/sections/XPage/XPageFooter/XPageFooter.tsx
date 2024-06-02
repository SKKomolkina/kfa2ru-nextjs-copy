import cls from './XPageFooter.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {XtremeTuner} from "@/shared/ui/XtremeTuner/XtremeTuner";
import Image from "next/image";
import {Dlss} from "@/shared/ui/Dlss/Dlss";
import {AboutUs} from "@/shared/ui/AboutUs/AboutUs";

interface XPageFooterProps {
    className?: string;
    classNameBox?: string;
    color?: string;
    classNameFill?: boolean;
}

export const XPageFooter = ({className, classNameBox, color, classNameFill}: XPageFooterProps) => {
    return (
        <section className={`${cls.section} ${color}`}>
            <XtremeTuner deep={true} classNameFill={true} black={classNameFill} classNameBox={cls.boxColor}/>

            <Image width={1521} height={1169} className={cls.blur} src={'../images/xtreme-tuner/blur.png'} alt={''}/>

            <Dlss deep={true} classNameFill={classNameFill} classNameBox={cls.boxColor}/>

            <Image width={1526} height={1359} className={cls.blurBot} src={'../images/core/footer/blur.png'} alt={''}/>
            <AboutUs classNameFill={classNameFill} classNameButton={cls.buttonColor} className={cls.about}/>
        </section>
    );
};
