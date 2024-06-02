import cls from './HomeCards.module.scss'
import Image from "next/legacy/image";
import Link from "next/link";
import cardCls from './Card3.module.scss'

export const Card3 = () => {
    return (
        <div className={`${cardCls.card}`}>

            <div className={cardCls.image}>
                <Image layout='intrinsic' width={448} height={487} src={'/images/home-page/image3.png'}
                       alt={'Монитор kfa2'}
                />
            </div>
            <div className={cardCls.back}/>
            <p className={cardCls.text}>Slider-3 Slider-3 Slider-3</p>

            <Link href={'/accessories/chairs-gc-01'} className={cls.button}>Подробнее</Link>

            <p className={cls.text}>Slider-03</p>
            <p className={cls.text}>3/3</p>
        </div>
    );
};
