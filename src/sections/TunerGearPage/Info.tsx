import cls from './Info.module.scss'
import Image from "next/image";

export const Info = () => {
    return (
        <div className={cls.info}>
            <div className={cls.imagesContainer}>
                <div className={cls.top}>
                    <Image width={1142} height={760} className={cls.imageTop} src={'../images/gear/info/image.png'}
                           alt={'xtreme tuner gear'}/>
                </div>

                <div className={cls.left}>
                    <Image width={337} height={333} className={cls.imageLeft} src={'../images/gear/info/left.png'}
                           alt={'xtreme tuner gear'}/>
                </div>

                <div className={cls.right}>
                    <Image width={514} height={343} className={cls.imageRight} src={'../images/gear/info/right.png'}
                           alt={'xtreme tuner gear'}/>
                </div>

                <div className={cls.bot}>
                    <div className={cls.textBoxGreen}>
                        <p className={cls.textBlack}>Программирование макросов</p>
                    </div>

                    <div className={cls.textBoxBlack}>
                        <p className={cls.text}>Чувствительность</p>
                    </div>

                    <div className={cls.textBoxGray}>
                        <p className={cls.text}>Установка DPI</p>
                    </div>

                    <div className={cls.textBoxBlue}>
                        <p className={cls.text}>
                            Настройка подсветки
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
