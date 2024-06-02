import cls from './ClickOc.module.scss'
import title from './XtremeTunerPage.module.scss'
import Image from "next/image";

export const ClickOc = () => {
    return (
        <section className={cls.section}>
            <h3 className={title.title}>
                РАЗГОН 1-CLICK OC
            </h3>

            <div className={cls.container}>
                <div className={cls.line}/>

                <p className={title.subText}>
                    Разгон видеокарты в&nbsp;один щелчок в&nbsp;безопасных пределах. Простой способ увеличить игровую
                    производительность без необходимости изучений тонкостей оверклокинга.
                </p>

                <div className={cls.shadow}/>
                <div className={cls.blur}/>
                <Image className={cls.image} width={1643} height={915} src={'./images/extreme-tuner-page/click/image.png'} alt={''}/>
            </div>
        </section>
    );
};
