import cls from './List.module.scss'
import titleCls from './ManualPage.module.scss'
import {Item} from './Item'

export const List = ({list, title}: any) => {
    return (
            <div className={cls.list}>
                <h3 className={titleCls.title}>{title}</h3>

                {list.map((i:any, index: any) =>
                    <Item key={index} item={i} index={index}/>
                )}
            </div>
    );
};
