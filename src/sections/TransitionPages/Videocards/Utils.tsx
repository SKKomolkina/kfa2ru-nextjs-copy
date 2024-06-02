import cls from '@/sections/HomePage/HomeSeries/HomeSeries.module.scss';
import listStyles from '@/sections/HomePage/HomeSeries/HomeList/HomeList.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {HomeItem} from "@/sections/HomePage/HomeSeries/HomeList/HomeItem/HomeItem";

interface UtilsProps {
    className?: string;
}

interface ListProps {
    className?: string;
}

const items = [
    { title: 'Xtreme tuner', text: 'Утилита для мониторинга и настройки видеокарт KFA2', link: '/xtreme-tuner'},
    { title: 'Драйвера', text: 'Актуальные версии драйверов NVIDIA', link: 'https://www.nvidia.ru/Download/index.aspx?lang=ru'},
    { title: 'Руководства', text: 'Руководства по установке и использованию', link: '/manual'},
]

export const Utils = ({className}: UtilsProps) => {
    return (
        <div className={classNames(cls.HomeSeries, {}, [className])}>
            <div className={cls.blur}/>
            <List/>
        </div>
    );
};

const List = ({className}: ListProps) => {
    return (
        <ul className={listStyles.HomeList}>
            {items.map((item, index) =>
                <HomeItem key={index} index={index} item={item}/>)
            }
        </ul>
    );
};
