import cls from './Third.module.scss'
import Image from "next/image"
import text from './Chair04.module.scss'
import {useEffect, useState} from "react";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const Third = () => {
    const [image, setImage] = useState('../images/gc-04/third/image.png')
    const query1200 = useMediaQuery(640)

    useEffect(() => {
        if(!query1200) {
            return setImage('../images/gc-04/third/image1200.png')
        } else {
            return setImage('../images/gc-04/third/image.png')
        }
    }, [query1200, image])

    return (
        <section className={cls.section}>
            <Image width={673} height={638} className={cls.image} src={image} alt={'04 L'}/>

            <div className={cls.textContainer}>
                <p className={text.text}>
                    Нужно передохнуть? Никаких проблем&nbsp;&mdash; спинка кресла откидывается до&nbsp;180&deg;.
                </p>
            </div>

            <div className={cls.textContainer}>
                <p className={text.text}>
                    Высота сиденья регулируется, обеспечивая максимальный комфорт.
                    <br/>
                    <br/>
                    В&nbsp;кресле используется газ-лифт 3&nbsp;класса.
                </p>
            </div>
        </section>
    );
};
