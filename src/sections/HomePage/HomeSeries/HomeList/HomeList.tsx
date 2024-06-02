import cls from './HomeList.module.scss';

import {HomeItem} from "@/sections/HomePage/HomeSeries/HomeList/HomeItem/HomeItem";

interface HomeListProps {
    className?: string;
}

const items = [
    { title: 'Серия HOF', text: 'Легендарная серия', link: '/graphics-cards/hof'},
    { title: 'Серия S', text: 'Свобода выбора', link: '/graphics-cards/s'},
    { title: 'Серия X', text: 'Играть по максимуму', link: '/graphics-cards/x'},
    { title: 'Серия Core', text: 'То, что нужно', link: '/graphics-cards/core'},
]

export const HomeList = ({className}: HomeListProps) => {
    return (
        <ul className={cls.HomeList}>
            {items.map((item, index) =>
                <HomeItem key={index} index={index} item={item}/>)
            }
        </ul>
    );
};
