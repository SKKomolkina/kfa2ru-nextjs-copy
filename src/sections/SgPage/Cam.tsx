import cls from './Cam.module.scss'
import Image from "next/image";
import SGPageSubtitle from "@/sections/SgPage/SGPageSubtitle";

export const Cam = () => {
    return (
        <div className={cls.section}>
            <SGPageSubtitle title={'Испарительная камера_'}/>
            <Image width={1085} height={827} className={cls.image} src={'../../images/sg-st/cam/image.png'}
                   alt={''}/>

            <div className={cls.container}>
                <p className={cls.text}>
                    Использование испарительной камеры является передовым решением в&nbsp;охлаждении графического
                    процессора и&nbsp;микросхем видеопамяти.
                </p>
            </div>
        </div>
    );
};
