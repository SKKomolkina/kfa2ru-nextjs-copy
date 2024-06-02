import cls from './Fourth.module.scss'
import text from './Chair01.module.scss'

import {useMediaQuery} from "@/features/lib/useMediaQuery"
import Image from "next/image"

export const Fourth = () => {
    const query640 = useMediaQuery(640)

    return (
        <div className={cls.section}>
            <p className={`${cls.text1} ${text.text}`}>Качественная эко-кожа с&nbsp;прострочкой.</p>
            <p className={`${cls.text2} ${text.text}`}>Сиденье кресла выставляется по&nbsp;нужной высоте. Оно достаточно
                широкое&nbsp;&mdash; 52&nbsp;см. И&nbsp;рассчитано на&nbsp;вес до&nbsp;120&nbsp;кг.</p>
            <p className={`${cls.text3} ${text.text}`}>Так&nbsp;же в&nbsp;нем удобно устроиться за&nbsp;чтением
                книги.</p>
            <p className={`${cls.text4} ${text.text}`}>Две подушки под шею и&nbsp;спину регулируются. Не&nbsp;нужно
                будет контролировать осанку во&nbsp;время очередной битвы или серьёзного отчета для
                руководителя&nbsp;&mdash; кресло снизит напряжение с&nbsp;мышц.</p>
            <p className={`${cls.text5} ${text.text}`}>Игровое кресло KFA2 имеет надёжную металлическую крестовину
                и&nbsp;4&nbsp;устойчивые опоры&nbsp;&mdash; прочные колёсики с&nbsp;прорезиненной основой. Можете
                не&nbsp;переживать за&nbsp;напольное покрытие.</p>

            {query640 ? (
                <Image className={cls.image} width={598} height={934} src={'../images/gc-01/fourth/image.png'}
                       alt={'01 rgb se kfa2'}/>
            ) : (
                <Image className={cls.image} width={1283} height={644} src={'../images/gc-01/fourth/image640.png'}
                       alt={'01 rgb se kfa2'}/>
            )}
        </div>
    );
};
