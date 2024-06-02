import cls from './Six.module.scss'
import text from './Chair01.module.scss'
import Image from "next/image";

export const Six = () => {
    return (
        <div className={cls.section}>
            <div className={cls.textContainer}>
                <div className={cls.line}/>
                <p className={text.text}>Кресло доступно в&nbsp;2-х цветах&nbsp;&mdash; чёрном и&nbsp;белом. Оно будет
                    уместно смотреться в&nbsp;любом интерьере.</p>
            </div>

            <Image width={1260} height={899} className={cls.image} src={'../images/gc-01/six/image.png'}
                   alt={'01 rgb se kfa2'}/>
            <div className={cls.blur}/>
        </div>
    );
};
