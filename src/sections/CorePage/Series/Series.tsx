import cls from './Series.module.scss';
import {FirstBox} from "./FirstBox";
import {SecondBox} from "./SecondBox";
import {Colors} from "./Colors";

export const Series = () => {
    return (
        <div className={cls.section}>
            <div className={cls.background}/>
            <div className={cls.titleContainer}>
                <h2 className={cls.title}>видеокарты</h2>
                <h2 className={cls.title}>Серии</h2>
                <div className={cls.line}/>
                <h2 className={cls.titleBorder}>core</h2>
            </div>

            <div className={cls.blueTag}>
                <p>Игры</p>
            </div>
            <div className={cls.redTag}>
                <p>Работа</p>
            </div>
            <div className={cls.yellowTag}>
                <p>Графика и 3D</p>
            </div>

            <FirstBox/>
            <SecondBox/>
            <Colors/>
        </div>
    );
};
