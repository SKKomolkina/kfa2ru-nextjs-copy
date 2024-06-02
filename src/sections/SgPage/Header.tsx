import cls from './Header.module.scss'

export const Header = () => {
    return (
        <div className={cls.section}>
            <div className={cls.container}>
                <div className={cls.textContainer}>
                    <div className={cls.line}/>
                    <p className={cls.text}>
                        Серия SG&nbsp;разработана с&nbsp;учётом ежедневных потребностей современного геймера
                        <br/><br/>
                        Она гарантирует комфорт игрового процесса
                        в&nbsp;сочетании с&nbsp;актуальными дизайнерскими решениями для ценителей стильных сборок.
                    </p>
                </div>

                <div className={cls.titleContainer}>
                    <h1 className={cls.title}>40 s</h1>

                    <div className={cls.subtitleContainer}>
                        <p className={cls.subtitle}>Высокое качество
                            элементной базы</p>
                        <p className={cls.subtitle}>Надежность
                            и долговечность</p>
                    </div>
                </div>

                <div className={cls.triangle}/>
                <div className={cls.border}/>
            </div>

            <p className={cls.subtextTransparent}>Serious</p>
            <p className={cls.subtext}>gaming</p>

            <p className={cls.spanText}>kfa2</p>
        </div>
    );
};
