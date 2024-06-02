import cls from './Header.module.scss'
import box from './Vivance32QPage.module.scss'
import Image from "next/image"

export const Header = () => {
    return (
        <section className={cls.section}>
            <div className={`${box.box} ${cls.box}`}>
                <div className={cls.line}/>

                <div className={cls.titleBox}>
                    <div className={cls.textContainer}>
                        <h1 className={cls.title}>
                            VIVANCE
                        </h1>
                        <p className={cls.subtitle}>
                            Залог победы
                        </p>
                    </div>
                </div>

                <Image width={1348} height={738} className={cls.image} src={'../../images/monitors/vivance32/image.png'}
                       alt={''}/>
            </div>

            <div className={`${box.box} ${cls.topBox}`}>
                <h2 className={`${box.title} ${cls.boxTitle}`}>
                    Vivance
                </h2>

                <p className={box.text}>
                    Живые цвета, реалистические оттенки, яркие детали&nbsp;&mdash; это&nbsp;то, что вы&nbsp;получите
                    с&nbsp;монитором VIVANCE с&nbsp;высокой частотой смены кадров. Каждый кадр будет буквально оживать
                    перед вашими глазами.
                </p>
            </div>

            <div className={`${box.box} ${cls.botBox}`}>
                <h2 className={`${box.title} ${cls.boxTitle}`}>
                    1 MC
                </h2>

                <p className={box.text}>
                    Сверхбыстрый отклик матрицы предотвращает искажение картинки при передаче динамичных сцен
                    и&nbsp;позволяет в&nbsp;полном объёме насладиться плавностью игрового процесса.
                </p>
            </div>
        </section>
    );
};
