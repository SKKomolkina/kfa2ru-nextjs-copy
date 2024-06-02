import cls from './HomeCards.module.scss'
import Image from "next/legacy/image";
import Link from "next/link";
import imageCls from './Card1.module.scss'

export const Card1 = () => {
    return (
        <div className={cls.card}>
            <p className={imageCls.textAbsoluteOpacity}>Стильно и комфортно</p>
            <p className={imageCls.textAbsolute}>Стильно и комфортно</p>
            <p className={imageCls.textAbsoluteOpacityLast}>Стильно и комфортно</p>

            <div className={cls.noise}>
                <Image layout='intrinsic' width={1670} height={800} src={'/images/home-page/noise.png'}
                       alt={''}/>
            </div>

            <div className={imageCls.image}>
                <Image layout='intrinsic' width={670} height={712} src={'/images/home-page/cards-image1.png'}
                       alt={'Игровое кресло'}
                />
            </div>

            <Link href={'/accessories/chairs-gc-01'} className={cls.button}>Подробнее</Link>

            <p className={cls.text}>Игровое кресло</p>
            <p className={cls.text}>1/3</p>
        </div>
    );
};
