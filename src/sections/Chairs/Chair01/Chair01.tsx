import cls from './Chair01.module.scss'
import {Header} from './Header'
import {First} from './First'
import {Second} from './Second'
import {Third} from './Third'
import {Fourth} from './Fourth'
import {Fifth} from './Fifth'
import {Six} from './Six'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";

export const Chair01 = () => {
    return (
        <div className={cls.page}>
            <Header/>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fifth/>
            <Six/>

            <HomeAbout blackText={true} boxClassName={cls.boxClassName}/>
        </div>
    );
};
