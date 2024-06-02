import cls from './XPageComfort.module.scss';
import {Box} from "./Box/Box";

export const XPageComfort = () => {
    return (
        <div className={cls.section}>
            <div className={cls.borderL}/>
            <div className={cls.borderR}/>

            <h2 className={cls.title}>
                У неё есть всё, что нужно
                <br/> для комфортного гейминга
            </h2>
            <div className={cls.line}/>
            <p className={cls.text}>
                Высокая производительность и&nbsp;проработанная система охлаждения гарантируют высокие показатели
                и&nbsp;сочные кадры в&nbsp;современных играх&nbsp;&mdash; от&nbsp;релизов небольших студий
                до&nbsp;открытых миров столпов геймдев индустрии.
            </p>

            <Box/>
        </div>
    );
};
