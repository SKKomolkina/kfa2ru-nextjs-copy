import cls from './List.module.scss';

export const List = () => {
    return (
        <>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <p className={cls.title}>
                        Hogwarts Legacy*
                    </p>

                    <div className={cls.greenLine} style={{width: '100%'}}/>
                    <div className={cls.greyLine} style={{width: '42%'}}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.title}>
                        Cyberpunk 2077**
                    </p>

                    <div className={cls.greenLine} style={{width: '86%'}}/>
                    <div className={cls.greyLine} style={{width: '21%'}}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.title}>
                        Witcher 3 NextGen**
                    </p>

                    <div className={cls.greenLine} style={{width: '78%'}}/>
                    <div className={cls.greyLine} style={{width: '16%'}}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.title}>
                        Far Cry 6
                    </p>

                    <div className={cls.greenLine} style={{width: '96%'}}/>
                    <div className={cls.greyLine} style={{width: '57%'}}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.title}>
                        Assassins Creed Valhalla
                    </p>

                    <div className={cls.greenLine} style={{width: '78%'}}/>
                    <div className={cls.greyLine} style={{width: '34%'}}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.title}>
                        Metro Exodus***
                    </p>

                    <div className={cls.greenLine} style={{width: '71%'}}/>
                    <div className={cls.greyLine} style={{width: '25%'}}/>
                </li>
            </ul>

            <div className={cls.container}>
                <p className={cls.text}>
                    * DLSS Качество + Frame Generation <br/>
                    ** RT+&nbsp;DLSS Качество + Frame Generation <br/>
                    *** RT + DLSS Качество
                </p>
                <div className={cls.subtitleContainer}>
                    <p className={cls.subtitle}>RTX 4070 TI</p>
                    <div className={cls.greenLine} style={{width: '20%'}}/>
                    <p className={cls.subtitle}>RTX 2070 sUPER</p>
                    <div className={cls.greyLine} style={{width: '20%'}}/>
                </div>

                <p className={cls.textBot}>
                    Система: Ryzen 7 5800X3D, 32&nbsp;ГБ DDR4 3600МГц, Win&nbsp;11, 1440p, максимальные настройки
                    графики
                </p>
            </div>
        </>
    );
};
