import cls from './List.module.scss'

export const List = () => {
    return (
        <>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <p className={cls.title}>
                        Hogwarts Legacy*
                    </p>
                    <div className={cls.lineRed} style={{width: '100%'}}/>
                    <div className={cls.lineGrey} style={{width: '39%'}}/>
                </li>
                <li className={cls.item}>
                    <p className={cls.title}>
                        Cyberpunk 2077**
                    </p>
                    <div className={cls.lineRed} style={{width: '86%'}}/>
                    <div className={cls.lineGrey} style={{width: '25%'}}/>
                </li>
                <li className={cls.item}>
                    <p className={cls.title}>
                        Witcher 3 NextGen**
                    </p>
                    <div className={cls.lineRed} style={{width: '75%'}}/>
                    <div className={cls.lineGrey} style={{width: '26%'}}/>
                </li>
                <li className={cls.item}>
                    <p className={cls.title}>
                        Far Cry 6
                    </p>
                    <div className={cls.lineRed} style={{width: '97%'}}/>
                    <div className={cls.lineGrey} style={{width: '64%'}}/>
                </li>
                <li className={cls.item}>
                    <p className={cls.title}>
                        Resident Evil 4***
                    </p>
                    <div className={cls.lineRed} style={{width: '81%'}}/>
                    <div className={cls.lineGrey} style={{width: '44%'}}/>
                </li>
                <li className={cls.item}>
                    <p className={cls.title}>
                        Last of Us part 1
                    </p>
                    <div className={cls.lineRed} style={{width: '74%'}}/>
                    <div className={cls.lineGrey} style={{width: '27%'}}/>
                </li>
            </ul>

            <div className={cls.about}>
                <p className={cls.aboutText}>
                    * DLSS Качество + Frame Generation <br/>
                    ** RT + DLSS Качество + Frame Generation <br/>
                    *** RT
                </p>

                <div>
                    <div className={cls.linesContainer}>
                        <p className={cls.linesText}>RTX 4070</p>
                        <div className={cls.lineRed}/>
                    </div>
                    <div className={cls.linesContainer}>
                        <p className={cls.linesText}>RTX 2070 SUPER</p>
                        <div className={cls.lineGrey}/>
                    </div>
                </div>

                <p className={cls.aboutTextSpan}>
                    Система: Ryzen 7 5800X3D, 32&nbsp;ГБ DDR4 3600МГц, Win&nbsp;11, 1440p, максимальные настройки
                    графики.
                </p>
            </div>
        </>
    );
};
