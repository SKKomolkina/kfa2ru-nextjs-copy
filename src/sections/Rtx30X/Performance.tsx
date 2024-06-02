import cls from './Performance.module.scss'
import Image from "next/image";
import {PerformanceTable} from "./PerformanceTable";

export const Performance = () => {
    return (
        <div className={cls.section}>
            <div className={cls.titleContainer}>
                <Image width={376} height={84} className={cls.subtitle}
                       src={'../../images/rtx30x/performance/subtitle.svg'}
                       alt={'высокая'}/>
                <p className={cls.title}>производительность</p>
            </div>

            <PerformanceTable/>

            <p className={cls.text}>
                &sup1; Данный тип системы охлаждения используется на&nbsp;видеокартах со&nbsp;следующими продуктовыми
                кодами: 36ISL6MD1WTK, 36ISL6MD1WGK, 36ISL6MD1WQK, 36ISM6MD2WWK, 36NOL7MD2O1K, 36NOL7MD2NEK. <br/> <br/>
                &sup2; Настаиваемая RGB подсветка присутствует на&nbsp;видеокартах RTX 3060 (Ti). Видеокарты RTX 3050
                оснащены статичной LED подсветкой с&nbsp;функцией отключения. <br/> <br/>
                &sup3; Верно для большинства моделей серии X&nbsp;3FAN. Модели 39IXM5MD6KKK и&nbsp;39IXM5MD6HEK имеют
                в&nbsp;комплекте металлический держатель без RGB элементов.
            </p>
        </div>
    );
};
