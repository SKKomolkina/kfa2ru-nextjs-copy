import cls from './HomeSlider.module.scss';
import Image from "next/legacy/image";

export const HomeSlider = () => {
    return (
        <div className={cls.HomeSlider}>
            <div className={cls.background}>
                {/*<Image layout={"fill"} src={'/images/home-page/slide.png'} alt={''}/>*/}
            </div>
        </div>
    );
};
