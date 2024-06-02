import cls from './Second.module.scss'
import text from './Chair01.module.scss'
import Image from "next/image";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const Second = () => {
    const query640 = useMediaQuery(640)

    return (
        <div className={cls.section}>
            <div className={cls.textContainer}>
                <h2 className={cls.title}>4D подлокотники </h2>
                <p className={text.text}>
                    С&nbsp;регулируемыми разными положениями, обеспечат удобство, а&nbsp;управление высотой кресла
                    снимет
                    напряжение с&nbsp;плеч и&nbsp;спины.
                </p>
            </div>

            <Image className={cls.image} width={327} height={311} src={'../images/gc-01/second/image.png'}
                   alt={'rgb 01 se kfa2'}/>

            <div className={cls.blur}/>
            <div className={cls.blurBot}/>

            {!query640 ? (
                <Image className={cls.images} width={1280} height={177} src={'../images/gc-01/second/images640.png'}
                       alt={'rgb 01 se kfa2'}/>
            ) : (
                <Image className={cls.images} width={374} height={218} src={'../images/gc-01/second/images.png'}
                       alt={'rgb 01 se kfa2'}/>
            )}
        </div>
    );
};
