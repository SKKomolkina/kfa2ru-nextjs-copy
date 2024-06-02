import cls from './XPagePerformance.module.scss';
import {Title} from "./Title/Title";
import {Table} from "./Table/Table";
import {List} from "./List/List";
import {Images} from "./Images/Images";
import {Connect} from "./Connect/Connect";

export const XPagePerformance = () => {
    return (
        <div className={cls.section}>
            <div className={cls.lights}/>
            <div className={cls.background}/>

            <Title/>
            <Table/>
            <List/>
            <Images/>
            <Connect/>
        </div>
    );
};
