import cls from './Fifth.module.scss'
import text from './Chair04.module.scss'
import Image from "next/image"

export const Fifth = () => {
    return (
        <div className={cls.section}>
            <div className={cls.textContainerTop}>
                <h3 className={cls.title}>
                    Удобные подлокотники
                </h3>
                <p className={text.text}>
                    Вы&nbsp;можете регулировать высоту и&nbsp;горизонтальный угол подлокотников, снимая напряжение
                    с&nbsp;рук и&nbsp;плеч.
                </p>
            </div>

            <div className={cls.textContainerBot}>
                <h3 className={cls.title}>Механизм качания</h3>
                <p className={text.text}>
                    Кресло подстраивается под распределение веса и&nbsp;движения, позволяя полностью погрузиться
                    в&nbsp;игровой процес, физически и&nbsp;эмоционально. Играйте с&nbsp;комфортом.
                </p>
            </div>

            <div className={cls.lineTop}/>
            <div className={cls.lineBot}/>

            <Image width={1035} height={1351} className={cls.image} src={'../images/gc-04/fifth/image.png'}
                   alt={'04 L'}/>

            <div className={cls.blurTop}/>
            <div className={cls.blurBot}/>
        </div>
    );
};
