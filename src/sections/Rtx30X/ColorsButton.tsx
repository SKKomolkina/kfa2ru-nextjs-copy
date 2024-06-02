import cls from './ColorsButton.module.scss'
import Image from "next/image";

export const ColorsButton = ({lightOn}: any) => {
    return (
        <div className={cls.section}>
            <div className={cls.imageContainer}>
                <Image width={1374} height={773} className={lightOn ? cls.imageHidden : cls.image}
                       src={'../../images/rtx30x/colors/button/image.png'}
                       alt={''}/>
                <Image width={1374} height={773} className={lightOn ? cls.image : cls.imageHidden}
                       src={'../../images/rtx30x/colors/button/imageOn.png'}
                       alt={''}/>
                <Image width={1161} height={440} className={cls.blend}
                       src={'../../images/rtx30x/colors/button/blend.png'}
                       alt={''}/>
            </div>

            <div className={cls.textContainer}>
                <p className={cls.text}>
                    Переключатель на&nbsp;торце видеокарты позволяет легко включить или выключить подсветку вентиляторов
                    без использования утилит или выключения системы.
                </p>
            </div>
        </div>
    );
};
