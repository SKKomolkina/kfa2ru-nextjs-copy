import cls from './Fans.module.scss'
import SGPageSubtitle from "@/sections/SgPage/SGPageSubtitle";
import Image from "next/image";

export const Fans = () => {
    return (
        <div className={cls.section}>
            <SGPageSubtitle title={'Вентиляторы_'}/>
            <p className={cls.text}>
                Усовершенствованные вентиляторы WINGS 2.0
                c&nbsp;11&nbsp;лопастями особой формы помогают поддерживать комфортный температурный режим видеокарты
                и&nbsp;низкий уровень шума
                в&nbsp;нагрузке.
            </p>

            <Image width={1922} height={1343} className={cls.blur} src={'../../images/sg-st/fans/blur.svg'} alt={''}/>
            <Image width={1020} height={777} className={cls.image} src={'../../images/sg-st/fans/image.png'} alt={''}/>
        </div>
    );
};
