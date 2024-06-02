import cls from './Table.module.scss';
import {useEffect, useState} from "react";

const items = [
    [{
        name: '4090',
        value: '24 ГБ',
        type: 'GDDR6X',
        boost: '2 595 МГц',
        cuda: '16 384'
    }],
    [{
        name: '4080',
        value: '16 ГБ',
        type: 'GDDR6X',
        boost: '2 580 МГц',
        cuda: '9 728'
    }],
    [{
        name: '4080 Ti',
        value: '12 ГБ',
        type: 'GDDR6x',
        boost: '2 685 МГц',
        cuda: '7 680'
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
                    4090 <div className={active === 0 ? cls.line : cls.lineDisable}/>
                </button>
                <button onClick={() => setActive(1)} className={(active === 1) ? cls.title : cls.titleDisable}>
                    4080 <div className={active === 1 ? cls.line : cls.lineDisable}/>
                </button>
                <button onClick={() => setActive(2)} className={(active === 2) ? cls.title : cls.titleDisable}>
                    4080 Ti <div className={active === 2 ? cls.line : cls.lineDisable}/>
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
