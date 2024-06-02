import cls from './Sections.module.scss'

export const Sections = () => {
    return (
        <section className={cls.section}>
            <h3 className={cls.title}>
                У&nbsp;нас
                <span className={cls.titleSpan}> собственные</span>
            </h3>

            <ul className={cls.list}>
                <li className={cls.item}>
                    <p className={cls.number}>01</p>
                    <p className={cls.subtitle}>Отдел Исследований и&nbsp;Разработок (R&amp;D)</p>

                    <div className={cls.line}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.number}>02</p>
                    <p className={cls.subtitle}>Управление</p>

                    <div className={cls.line}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.number}>03</p>
                    <p className={cls.subtitle}>Производство (завод)</p>

                    <div className={cls.line}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.number}>04</p>
                    <p className={cls.subtitle}>Сервисная служба</p>

                    <div className={cls.line}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.number}>05</p>
                    <p className={cls.subtitle}>Специальная команда инженеров по&nbsp;разработке продукции серии HOF</p>

                    <div className={cls.line}/>
                </li>
            </ul>
        </section>
    );
};
