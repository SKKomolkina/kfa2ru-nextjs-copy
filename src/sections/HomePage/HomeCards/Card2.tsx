import cls from './HomeCards.module.scss'
import Image from "next/legacy/image";
import Link from "next/link";
import cardCls from './Card2.module.scss'

export const Card2 = () => {
    return (
        <div className={`${cardCls.card}`}>

            <div className={cardCls.image}>
                <Image layout='intrinsic' width={575} height={545} src={'/images/home-page/image2.png'}
                       alt={'Монитор kfa2'}
                />
            </div>

            <p className={cardCls.text}>VIVANCEVIVANCEVIVANCE</p>

            <Link href={'/accessories/chairs-gc-01'} className={cls.button}>Подробнее</Link>

            <p className={cls.text}>Монитор</p>
            <p className={cls.text}>2/3</p>
        </div>
    );
};
