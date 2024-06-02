import cls from './HomeSeries.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {HomeList} from "./HomeList/HomeList";
import {Line} from "@/shared/ui/Line/Line";
import {BlackButton} from "@/shared/ui/blackButton/BlackButton";

interface HomeSeriesProps {
    className?: string;
}

export const HomeSeries = ({className}: HomeSeriesProps) => {
    return (
        <div className={classNames(cls.HomeSeries, {}, [className])}>
            <div className={cls.blur}/>

            <div className={cls.textContainer}>
                <div className={cls.container}>
                    <p className={cls.title}>Наши серии</p>
                    <BlackButton link='/graphics-cards' buttonText={'Подробнее'}/>
                </div>
                <Line className={cls.line}/>

                <p className={cls.text}>
                    В нашем ассортименте каждый найдет видеокарту для себя
                </p>
            </div>
            <HomeList/>
        </div>
    );
};
