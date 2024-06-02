import cls from './CoreFooter.module.scss'
import {XtremeTuner} from "@/shared/ui/XtremeTuner/XtremeTuner";
import {Dlss} from "@/shared/ui/Dlss/Dlss";
import Image from "next/image";
import {AboutUs} from "@/shared/ui/AboutUs/AboutUs";

export const CoreFooter = () => {
    return (
        <section className={cls.section}>
            <XtremeTuner deep={true} classNameBox={cls.boxColor}/>

            <Image width={1521} height={1169} className={cls.blur} src={'../images/xtreme-tuner/blur.png'} alt={''}/>

            <Dlss deep={true} classNameBox={cls.boxColor}/>

            <Image width={1526} height={1359} className={cls.blurBot} src={'../images/core/footer/blur.png'} alt={''}/>
            <AboutUs classNameButton={cls.buttonColor} className={cls.about}/>
        </section>
    );
};
