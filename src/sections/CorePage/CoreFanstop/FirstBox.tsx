import cls from './FirstBox.module.scss';

export const FirstBox = () => {
    return (
        <div className={cls.box}>
            <div className={cls.titleContainer}>
                <h4 className={cls.title}>fan stop</h4>

                <ul className={cls.tags}>
                    <li className={cls.tag}>
                        <p>Долговечность</p>
                    </li>
                    <li className={cls.tag}>
                        <p>Тишина</p>
                    </li>
                </ul>
            </div>

            <p className={cls.text}>
                В&nbsp;своём стремлении повысить качество жизни, они забывают, что перспективное планирование
                не&nbsp;даёт нам иного выбора, кроме определения направлений прогрессивного развития.
            </p>
        </div>
    );
};
