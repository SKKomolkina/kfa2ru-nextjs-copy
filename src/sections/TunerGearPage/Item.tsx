import cls from './Item.module.scss'

export const Item = ({children}: any) => {
    return (
        <div className={cls.item}>
            {children}
        </div>
    );
};
