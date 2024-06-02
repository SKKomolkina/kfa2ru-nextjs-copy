import cls from './Performance.module.scss'
import {PerformanceTable} from "./PerformanceTable"
import Image from "next/image";

export const Performance = () => {
    return (
        <div className={cls.section}>
            <div className={cls.titleContainer}>
                <Image width={1941} height={1688} className={cls.blur}
                       src={'../../images/rtx30core/performance/blur.svg'} alt={''}/>
                <p className={cls.title}>высокая <br/> производительность</p>
            </div>

            <PerformanceTable/>
        </div>
    );
};
