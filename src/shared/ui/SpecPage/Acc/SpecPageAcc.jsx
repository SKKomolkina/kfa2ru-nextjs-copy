import cls from '../SpecPage.module.scss'
import Image from "next/image"
import {AccItem} from './AccItem'

export const SpecPageAcc = ({accItem}) => {
    return (
        <div className={cls.main}>
            <Image className={cls.imageAcc} src={accItem.image} alt={accItem.name}/>

            <AccItem item={accItem}/>

            <div className={cls.box}>
                <p className={cls.textTitle}>Программное обеспечение</p>
                <p className={cls.text}>{accItem.po}</p>
            </div>

            <div className={cls.box}>
                <p className={cls.textTitle}>Настройка</p>
                <p className={cls.text}>{accItem.setting}</p>
            </div>

            <div className={cls.box}>
                <p className={cls.textTitle}>Комплектация</p>
                <p className={cls.text}>{accItem.set}</p>
            </div>
        </div>
    )
}
