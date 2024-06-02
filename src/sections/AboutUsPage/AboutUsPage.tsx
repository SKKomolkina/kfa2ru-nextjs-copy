import cls from './AboutUsPage.module.scss'
import {AboutContainer} from "./AboutContainer"
import {Sections} from './Sections'
import {AboutSwiper} from "./AboutSwiper"

export const AboutUsPage = () => {
    return (
        <div className={cls.page}>
            <h1 className={cls.title}>Наша <span className={cls.titleGradient}>история</span></h1>

            <AboutContainer/>
            <Sections/>
            <AboutSwiper/>
        </div>
    );
};
