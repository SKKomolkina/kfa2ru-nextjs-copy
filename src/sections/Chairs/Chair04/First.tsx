import cls from './First.module.scss'
import Image from "next/image";

export const First = () => {
    return (
        <section className={cls.section}>
            <div className={cls.textContainer}>
                <div className={cls.line}/>

                <p className={cls.text}>
                    Лёгкое и&nbsp;комфортное кресло для геймеров, обеспечивает надёжную опору для тела: удобное сиденье
                    и&nbsp;спинка эргономичной формы поддержат вас во&nbsp;время игры.
                    <br/>
                    <br/>
                    А&nbsp;после напряженного боя можно откинуться на&nbsp;спинку и&nbsp;отдохнуть.
                </p>
            </div>

            <Image width={630} height={497} className={cls.image} src={'../images/gc-04/first/images.png'} alt={'04 L'}/>
        </section>
    );
};
