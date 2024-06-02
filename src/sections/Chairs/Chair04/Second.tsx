import cls from './Second.module.scss'
import textCls from './Chair04.module.scss'
import Image from "next/image";

export const Second = () => {
    return (
        <section className={cls.section}>
            <div className={cls.textContainer}>
                <h2 className={cls.title}>Свобода передвижения</h2>
                <p className={textCls.text}>
                    Кресла серии GC-04&nbsp;с облегчённой конструкцией легко перемещаются по&nbsp;поверхности
                    и&nbsp;подходят активным игрокам.
                </p>
            </div>

            <Image width={1170} height={852} className={cls.image} src={'../images/gc-04/second/images.png'}
                   alt={'04 L'}/>
            <div className={cls.blur}/>
        </section>
    );
};
