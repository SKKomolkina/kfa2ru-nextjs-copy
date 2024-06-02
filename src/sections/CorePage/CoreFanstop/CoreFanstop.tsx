import cls from './CoreFanstop.module.scss';
import {FirstBox} from "./FirstBox";
import {SecondBox} from "./SecondBox";
import {ThirdBox} from "./ThirdBox";

export const CoreFanstop = () => {
    return (
        <div className={cls.section}>
            <FirstBox/>
            <SecondBox/>
            <ThirdBox/>
        </div>
    );
};
