import cls from './Radiator.module.scss'
import SGPageSubtitle from "@/sections/SgPage/SGPageSubtitle";
import Image from "next/image";

export const Radiator = () => {
    return (
        <div className={cls.section}>
            <SGPageSubtitle title={'Радиатор_'}/>
            <p className={cls.text}>
                Улучшенная схема расположения ребер позволила добиться оптимального распределения воздушного потока
                и&nbsp;создания высокоэффективного массивного радиатора.
            </p>
            <p className={cls.text}>
                Формула использования композитных тепловых трубок диаметрами 6&nbsp;мм и&nbsp;8&nbsp;мм достигает
                лучшего перераспределения тепла.
            </p>

            <Image width={1922} height={1343} className={cls.blur} src={'../../images/sg-st/fans/blur.svg'} alt={''}/>
            <Image width={1085} height={827} className={cls.image} src={'../../images/sg-st/radiator/image.png'}
                   alt={''}/>
        </div>
    );
};
