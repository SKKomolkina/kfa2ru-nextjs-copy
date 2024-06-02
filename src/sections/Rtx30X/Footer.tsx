import cls from './Footer.module.scss'
import {XtremeTuner} from "@/shared/ui/XtremeTuner/XtremeTuner";
import {Dlss} from "@/shared/ui/Dlss/Dlss";
import Image from "next/image";
import {AboutUs} from "@/shared/ui/AboutUs/AboutUs";

export const Footer = ({fill}: any) => {
    return (
        <section className={cls.section}>
            <XtremeTuner classNameFill={true} deep={true} classNameBox={cls.boxColor}/>

            <Image width={1521} height={1169} className={cls.blur} src={'../../../images/xtreme-tuner/blur.png'} alt={''}/>

            <Dlss classNameFill={true} deep={true} classNameBox={cls.boxColor}/>

            <Image width={1526} height={1359} className={cls.blurBot} src={'../../../images/core/footer/blur.png'}
                   alt={''}/>
            <AboutUs classNameFill={true} classNameButton={cls.buttonColor} className={cls.about}/>
        </section>
    );
};
