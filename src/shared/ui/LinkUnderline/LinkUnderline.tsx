import cls from './LinkUnderline.module.scss'
import {Item} from "./Item";

interface ItemProps {
        title?: string,
        text?: string,
        link?: string,
}

export const LinkUnderline = ({items}: any) => {
    return (
        <ul className={cls.List}>
            {items.map((item: any, index: number) =>
                <Item key={index} index={index} item={item}/>)
            }
        </ul>
    );
};
