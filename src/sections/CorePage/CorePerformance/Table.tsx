import cls from './Table.module.scss';
import {useEffect, useState} from "react";

const items = [
    [{
        name: '4070',
        value: '12 ГБ',
        type: 'GDDR6X',
        boost: '2 505 МГц',
        cuda: '5 888'
    }],
    [{
        name: '4060 Ti',
        value: '8 ГБ',
        type: 'GDDR6',
        boost: '2 565 МГц',
        cuda: '4 352'
    }],
    [{
        name: '4060',
        value: '8 ГБ',
        type: 'GDDR6',
        boost: '2 490 МГц',
        cuda: '3 072'
    }]
]

export const Table = () => {
    const [active, setActive] = useState(0)
    const [num, setNum] = useState(0)

    useEffect(() => {
        setNum(active)
    },[active])

    return (
        <div className={cls.section}>
            <div className={cls.buttonContainer}>
                <button onClick={() => setActive(0)} className={cls.model}>4070</button>
                <button onClick={() => setActive(1)} className={cls.model}>4060 ti</button>
                <button onClick={() => setActive(2)} className={cls.model}>4060</button>

                <div className={cls.line}/>
                <div
                    className={
                        ((active === 0) && cls.lineActive) ||
                        ((active === 1) && cls.lineActivePositionMid) ||
                        ((active === 2) && cls.lineActivePositionRight)
                    }
                />
            </div>


                {items[num].map(item => (
                    <ul key={item.name} className={cls.titleContainer}>
                        <li className={cls.titleItem}>
                            <h5 className={cls.title}>
                                {item.value}
                            </h5>
                            <p className={cls.subtitle}>
                                Объём видеопамяти
                            </p>
                        </li>
                        <li className={cls.titleItem}>
                            <h5 className={cls.title}>
                                {item.type}
                            </h5>
                            <p className={cls.subtitle}>
                                Тип видеопамяти
                            </p>
                        </li>
                        <li className={cls.titleItem}>
                            <h5 className={cls.title}>
                                {item.boost}
                            </h5>
                            <p className={cls.subtitle}>
                                Turbo Boost (1-Click OC)
                            </p>
                        </li>
                        <li className={cls.titleItem}>
                            <h5 className={cls.title}>
                                {item.cuda}
                            </h5>
                            <p className={cls.subtitle}>
                                Ядер
                            </p>
                        </li>
                    </ul>
                ))}
        </div>
    );
};
