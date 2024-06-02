import cls from './PerformanceTable.module.scss'
import {useEffect, useState} from "react";
import {PerformanceFooter} from "@/sections/Rtx30X/PerformanceFooter";

const items = [
    {
        value: '8 ГБ',
        type: 'до GDDR6X',
        turbo: '1 695 МГц',
        cuda: '4 864'
    },
    {
        value: 'до 12 ГБ',
        type: 'до GDDR6X',
        turbo: '1 822 МГц',
        cuda: '3 584'
    },
    {
        value: '8 ГБ',
        type: 'GDDR6',
        turbo: '1 837 МГц',
        cuda: '2 560'
    }
]

export const PerformanceTable = () => {
    const [active, setActive] = useState(0)
    const [item, setItem] = useState({
        value: '8 ГБ',
        type: 'до GDDR6X',
        turbo: '1 695 МГц',
        cuda: '4 864'
    })

    useEffect(() => {
        setItem(items[active])
    }, [active])

    return (
        <div className={cls.section}>
            <ul className={cls.header}>
                <li onClick={() => setActive(0)} className={cls.headerItem}>
                    <h4 className={active === 0 ? cls.titleActive : cls.title}>3060 Ti</h4>
                </li>
                <li onClick={() => setActive(1)} className={cls.headerItem}>
                    <h4 className={active === 1 ? cls.titleActive : cls.title}>3060</h4>
                </li>
                <li onClick={() => setActive(2)} className={cls.headerItem}>
                    <h4 className={active === 2 ? cls.titleActive : cls.title}>3050</h4>
                </li>
            </ul>

            <div className={cls.titleLine}/>
            <div className={
                ((active === 0) && cls.gradientLine) ||
                ((active === 1) && cls.gradientLineMid) ||
                ((active === 2) && cls.gradientLineRight)
            }/>

            <ul className={cls.specsContainer}>
                <li className={cls.specsItem}>
                    <p className={cls.specsTitle}>{item.value}</p>
                    <p className={cls.specsText}>Объём видеопамяти</p>
                </li>
                <li className={cls.specsItem}>
                    <p className={cls.specsTitle}>{item.type}</p>
                    <p className={cls.specsText}>Тип видеопамяти</p>
                </li>
                <li className={cls.specsItem}>
                    <p className={cls.specsTitle}>{item.turbo}</p>
                    <p className={cls.specsText}>Turbo Boost (1-Click OC)</p>
                </li>
                <li className={cls.specsItem}>
                    <p className={cls.specsTitle}>{ item.cuda}</p>
                    <p className={cls.specsText}>Ядер</p>
                </li>
            </ul>

            <ul className={cls.gamesContainer}>
                <li className={cls.gamesItem}>
                    <p className={cls.gamesTitle}>A Plague Tale: Requiem</p>
                    <div style={{width: '43%'}} className={cls.gamesGradientLine}/>
                    <div style={{width: '38%'}} className={cls.gamesBlackLine}/>
                    <div style={{width: '9%'}} className={cls.gamesGrayLine}/>
                </li>

                <li className={cls.gamesItem}>
                    <p className={cls.gamesTitle}>Hogwarts Legacy</p>
                    <div style={{width: '100%'}} className={cls.gamesGradientLine}/>
                    <div style={{width: '86%'}} className={cls.gamesBlackLine}/>
                    <div style={{width: '18%'}} className={cls.gamesGrayLine}/>
                </li>

                <li className={cls.gamesItem}>
                    <p className={cls.gamesTitle}>Resident Evil 4 Remake*</p>
                    <div style={{width: '82%'}} className={cls.gamesGradientLine}/>
                    <div style={{width: '80%'}} className={cls.gamesBlackLine}/>
                    <div style={{width: '14%'}} className={cls.gamesGrayLine}/>
                </li>

                <li className={cls.gamesItem}>
                    <p className={cls.gamesTitle}>Cyberpunk 2077</p>
                    <div style={{width: '63%'}} className={cls.gamesGradientLine}/>
                    <div style={{width: '45%'}} className={cls.gamesBlackLine}/>
                    <div style={{width: '3%'}} className={cls.gamesGrayLine}/>
                </li>

                <li className={cls.gamesItem}>
                    <p className={cls.gamesTitle}>Atomic Heart</p>
                    <div style={{width: '93%'}} className={cls.gamesGradientLine}/>
                    <div style={{width: '62%'}} className={cls.gamesBlackLine}/>
                    <div style={{width: '15%'}} className={cls.gamesGrayLine}/>
                </li>

                <li className={cls.gamesItem}>
                    <p className={cls.gamesTitle}>The Last of Us part 1</p>
                    <div style={{width: '35%'}} className={cls.gamesGradientLine}/>
                    <div style={{width: '29%'}} className={cls.gamesBlackLine}/>
                    <div style={{width: '9%'}} className={cls.gamesGrayLine}/>
                </li>

                <li className={cls.gamesItem}>
                    <p className={cls.gamesTitle}>Elden Ring**</p>
                    <div style={{width: '20%'}} className={cls.gamesGradientLine}/>
                    <div style={{width: '20%'}} className={cls.gamesBlackLine}/>
                    <div style={{width: '12%'}} className={cls.gamesGrayLine}/>
                </li>
            </ul>

            <PerformanceFooter/>
        </div>
    );
};
