import cls from './Colors.module.scss'
import {ColorsHeader} from "./ColorsHeader";

export const Colors = ({children}: any) => {
    return (
        <div className={cls.section}>
            {children}
        </div>
    );
};
