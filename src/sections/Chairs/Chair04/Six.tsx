import cls from './Six.module.scss'
import text from './Header.module.scss'
import blur from './Fourth.module.scss'
import Image from "next/image"

export const Six = () => {
    return (
        <div className={cls.section}>
            <p className={`${cls.text} ${text.text}`}>Выбери свой цвет</p>
            <p className={`${cls.text} ${text.textBorder}`}>Выбери свой цвет</p>

            <Image width={670} height={614} className={cls.image} src={'../images/gc-04/six/image.png'} alt={'04 L'}/>

            <div className={blur.blurTop}/>
            <div className={blur.blurBot}/>
        </div>
    );
};
