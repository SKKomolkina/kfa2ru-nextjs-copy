import cls from './CoreBlades.module.scss';
import Image from "next/image";

export const CoreBlades = () => {
    return (
        <div className={cls.section}>
            <div className={cls.container}>
                <div className={cls.noise}/>
                <div className={cls.blur}/>
                <Image width={1760} height={1263} className={cls.image} src={'../images/core/blades/image.png'}
                       alt={'11 лопастей'}/>

                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className={cls.title}>
                    //11 лопастей
                </p>
                <p className={cls.text}>
                    За&nbsp;активное охлаждение отвечают большие вентиляторы
                    с&nbsp;11&nbsp;лопастями аэродинамической формы, создающими мощный поток воздуха.
                </p>
            </div>
        </div>
    );
};
