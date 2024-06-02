import cls from './Table.module.scss';
import {useEffect, useState} from "react";

const items = [
    [{
        name: '4070',
        value: '12 ГБ',
        type: 'GDDR6X',
        boost: '2 550 МГц',
        cuda: '7 680'
    }],
    [{
        name: '4070 Ti',
        value: '12 ГБ',
        type: 'GDDR6X',
        boost: '2 550 МГц',
        cuda: '5 888'
    }],
    [{
        name: '4060 Ti',
        value: '8 ГБ',
        type: 'GDDR6',
        boost: '2 655 МГц',
        cuda: '4 352'
    }],
    [{
        name: '4060',
        value: '8 ГБ',
        type: 'GDDR6',
        boost: '2 580 МГц',
        cuda: '3 072'
    }]
]

export const Table = () => {
    const [active, setActive] = useState(0)
    const [num, setNum] = useState(0)

    useEffect(() => {
        setNum(active)
    }, [active])

    return (
        <div className={cls.container}>
            <div className={cls.titleContainer}>
                <button onClick={() => setActive(0)} className={(active === 0) ? cls.title : cls.titleDisable}>
                    4070 Ti <div className={active === 0 ? cls.line : cls.lineDisable}/>
                </button>
                <button onClick={() => setActive(1)} className={(active === 1) ? cls.title : cls.titleDisable}>
                    4070 <div className={active === 1 ? cls.line : cls.lineDisable}/>
                </button>
                <button onClick={() => setActive(2)} className={(active === 2) ? cls.title : cls.titleDisable}>
                    4060 Ti <div className={active === 2 ? cls.line : cls.lineDisable}/>
                </button>
                <button onClick={() => setActive(3)} className={(active === 3) ? cls.title : cls.titleDisable}>
                    4060 <div className={active === 3 ? cls.line : cls.lineDisable}/>
                </button>

                <div className={cls.lineAbsolute}/>
            </div>

            {items[num].map((item) =>
                (
                    <ul key={item.name} className={cls.characteristic}>
                        <li className={cls.characteristicItem}>
                            <h4 className={cls.characteristicTitle}>
                                {item.value}
                            </h4>
                            <p className={cls.characteristicText}>
                                Объём видеопамяти
                            </p>
                        </li>

                        <li className={cls.characteristicItem}>
                            <h4 className={cls.characteristicTitle}>
                                {item.type}
                            </h4>
                            <p className={cls.characteristicText}>
                                Тип видеопамяти
                            </p>
                        </li>

                        <li className={cls.characteristicItem}>
                            <h4 className={cls.characteristicTitle}>
                                {item.boost}
                            </h4>
                            <p className={cls.characteristicText}>
                                Turbo Boost
                            </p>
                        </li>

                        <li className={cls.characteristicItem}>
                            <h4 className={cls.characteristicTitle}>
                                {item.cuda}
                            </h4>
                            <p className={cls.characteristicText}>
                                CUDA Ядер
                            </p>
                        </li>
                    </ul>
                )
            )}
        </div>
    );
};
