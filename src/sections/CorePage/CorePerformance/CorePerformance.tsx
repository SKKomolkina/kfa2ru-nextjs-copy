import cls from './CorePerformance.module.scss'
import {Title} from "./Title";
import {Table} from "./Table";
import {List} from "./List";
import Image from "next/image";

export const CorePerformance = () => {
    return (
        <div className={cls.section}>
            <div className={cls.background}/>

            <Title/>
            <Table/>
            <List/>
            <Image width={2320} height={887} className={cls.image} src={'../images/core/performance/image.png'}
                   alt={''}/>
        </div>
    );
};
