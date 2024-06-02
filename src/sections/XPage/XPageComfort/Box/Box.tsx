import cls from './Box.module.scss';

export const Box = () => {
    return (
        <article className={cls.box}>
            <div className={cls.subtitleContainer}>
                <p className={cls.text}>
                    Вставки в стиле карбон
                </p>
                <p className={cls.text}>
                    Аккуратный матовый корпус
                </p>
            </div>

            <div className={cls.titleContainer}>
                <h3 className={cls.title}>Дизайн</h3>
                <p className={cls.text}>
                    Стильный внешний облик с&nbsp;ненавязчивой настраиваемой подсветкой прекрасно вписывается
                    в&nbsp;любую систему.
                </p>
            </div>
        </article>
    );
};
