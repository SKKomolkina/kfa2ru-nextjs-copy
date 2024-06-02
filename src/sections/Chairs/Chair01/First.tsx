import cls from './First.module.scss'
import text from './Chair01.module.scss'
import Image from "next/image";

export const First = () => {
    return (
        <div className={cls.section}>
            <div className={cls.textContainer}>
                <div className={cls.line}/>

                <p className={text.text}>
                    Качественный комфорт для тех, кто увлекается видеоиграми или работает долгое время
                    за&nbsp;компьютером.
                </p>
            </div>

            <Image width={910} height={728} className={cls.image} src={'../images/gc-01/first/image.png'}
                   alt={'01 rgb se kfa2'}/>

            <div className={cls.blur}/>
        </div>
    );
};
