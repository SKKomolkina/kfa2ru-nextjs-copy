import cls from './CoreLight.module.scss';
import Image from "next/image";

export const CoreLight = () => {
    return (
        <div className={cls.section}>
            <Image width={845} height={600} className={cls.imageFirst} src={'../images/core/light/image1.png'}
                   alt={'Geforce RTX'}/>

            <div className={cls.imageSecondContainer}>
                <div className={cls.imageSecondBlur}/>
                <Image width={565} height={500} className={cls.imageSecond} src={'../images/core/light/image2.png'}
                       alt={'Geforce RTX'}/>
            </div>

            <div className={cls.textContainerTop}>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className={cls.title}>
                    //Яркий акцент в вашей сборке
                </p>

                <p className={cls.text}>
                    Ненавязчивая LED подсветка с&nbsp;возможностью отключения.
                </p>
            </div>

            <Image width={1085} height={700} className={cls.imageThird} src={'../images/core/light/image3.png'}
                   alt={'Geforce RTX'}/>

            <div className={cls.textContainerBot}>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className={cls.title}>
                    //Переключатель
                </p>

                <p className={cls.text}>
                    Удобный переключатель на&nbsp;корпусе видеокарты позволит включить и&nbsp;выключить подсветку
                    торцевого элемента.
                </p>
            </div>
        </div>
    );
};
