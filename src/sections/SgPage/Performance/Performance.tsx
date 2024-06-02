import cls from './Performance.module.scss';
import {Title} from "./Title/Title";
import {Table} from "./Table/Table";
import {List} from "./List/List";
import {Images} from "./Images/Images";
import {Connect} from "./Connect/Connect";
import SGPageSubtitle from "@/sections/SgPage/SGPageSubtitle";
import Image from "next/image";

export const Performance = () => {
    return (
        <div className={cls.section}>
            <SGPageSubtitle title={'Высокая производительность_'}/>
            <Image width={1922} height={1343} className={cls.blur} src={'../../images/sg-st/performance/blur.svg'} alt={''}/>

            {/*<Title/>*/}
            <Table/>
            <List/>
            <Images/>
            {/*<Connect/>*/}
        </div>
    );
};
