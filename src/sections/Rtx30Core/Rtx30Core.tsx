import cls from './Rtx30Core.module.scss'
import {Header} from './Header'
import {Compact} from './Compact'
import {Cooling} from "./Cooling"
import {CoolingBot} from "./CoolingBot"
import {Footer} from '../Rtx30X/Footer'
import {Performance} from "./Performance";

export const Rtx30Core = () => {
    return (
        <div className={cls.core}>
            <Header/>
            <Compact/>
            <Cooling/>
            <CoolingBot/>

            <Performance/>
            <Footer/>
        </div>
    );
};
