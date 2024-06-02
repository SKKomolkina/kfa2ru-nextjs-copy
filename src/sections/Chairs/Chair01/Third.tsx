import cls from './Third.module.scss'
import text from './Chair01.module.scss'
import Image from "next/image";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const Third = () => {
    const query640 = useMediaQuery(640)
    return (
        <div className={cls.section}>
            <div className={cls.textContainer}>
                <div className={cls.line}/>
                <p className={text.text}>
                    Если настроены на&nbsp;серьёзный отдых, то&nbsp;&laquo;откиньте&raquo; спинку кресла
                    до&nbsp;180&nbsp;градусов, подставьте под ноги пуфик и&nbsp;возьмите тёплый плед.
                </p>
            </div>

            <Image width={1150} height={849} className={cls.image} src={'../images/gc-01/third/image.png'}
                   alt={'01 rgb se kfa2'}/>

            {query640 ? (
                <Image width={515} height={348} className={cls.lines} src={'../images/gc-01/third/lines.png'}
                       alt={'01 rgb se kfa2'}/>) : (
                <Image width={1150} height={748} className={cls.lines} src={'../images/gc-01/third/lines640.png'}
                       alt={'01 rgb se kfa2'}/>
            )}


            <div className={cls.blur}/>
        </div>
    );
};
