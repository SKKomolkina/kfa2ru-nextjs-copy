import cls from './ColorsHeader.module.scss'
import Image from "next/image";

export const ColorsHeader = () => {
    return (
        <div className={cls.header}>
            <div className={cls.left}>
                <p className={cls.textAbsolute}>Яркие</p>

                <Image width={367} height={84} className={cls.subtitle}
                       src={'../../images/rtx30x/colors/header/subtitle.svg'} alt={'акценты'}/>

            </div>

            <div className={cls.right}>
                <h2 className={cls.title}>Настраиваемая RGB подсветка</h2>
                <p className={cls.text}>
                    Управляемая подсветка вентиляторов и&nbsp;торцевой панели с&nbsp;возможностью полного отключения
                    и&nbsp;синхронизации с&nbsp;остальными элементами системы&sup2;.
                </p>
            </div>
        </div>
    );
};
