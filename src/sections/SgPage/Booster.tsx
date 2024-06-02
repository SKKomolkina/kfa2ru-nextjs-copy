import cls from './Booster.module.scss'
import SGPageSubtitle from "@/sections/SgPage/SGPageSubtitle";
import Image from "next/image";

export const Booster = () => {
    return (
        <div className={cls.section}>
            <Image width={1922} height={1343} className={cls.blur} src={'../../images/sg-st/fans/blur.svg'} alt={''}/>
            <Image width={1085} height={638} className={cls.image} src={'../../images/sg-st/booster/image.png'}
                   alt={''}/>

            <div className={cls.container}>
                <SGPageSubtitle title={'1-clip booster_'}/>
                <p className={cls.text}>
                    Опциональный вентилятор для дополнительного охлаждения элементов радиатора.
                </p>
            </div>

            <SGPageSubtitle title={'1-CLICK SYNC_'}/>
            <p className={cls.text}>
                Синхронизация с&nbsp;остальными элементами системы. Передача управления режимами подсветки системной
                плате либо иному внешнему контроллеру.
            </p>
        </div>
    );
};
