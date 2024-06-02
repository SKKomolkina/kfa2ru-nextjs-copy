import cls from './SpecPage.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Software} from "./Software";
import {AboutUs} from "@/shared/ui/AboutUs/AboutUs";
import {VideoCardItem} from "./VideoCardItem";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";

export const SpecPage = ({className, specsList, itemNames}) => {
    const [itemNumber, setItemNumber] = useState(0)
    const [buttonNumber, setButtonNumber] = useState(0)
    const [list, setList] = useState(specsList[0])

    const [itemCount, setItemCount] = useState(false)

    useEffect(() => {
        // console.log(list)
        setList(specsList[buttonNumber])
    }, [buttonNumber, specsList, list])

    useEffect(() => {
        setList(specsList[buttonNumber])
    }, [])

    useEffect(() => {
        if (list.length <= 1) {
            setItemCount(true)
            // console.log(itemCount)
        } else {
            setItemCount(false)
            // console.log(itemCount)
        }
    }, [list.length])

    const selectColor = (evt, index) => {
        setItemNumber(index)
    }

    return (
        <div className={classNames(cls.main, {}, [className])}>
            {!itemNames.find(i => i === 'hof') && (
                <div className={cls.buttonContainer}>
                    {itemNames.map((name, index) =>
                        <button
                            onClick={() => setButtonNumber(index)}
                            key={index}
                            className={buttonNumber === index ? cls.buttonActive : cls.button}>
                            {name}
                        </button>
                    )}
                </div>
            )}


            <ul className={cls.itemsContainer}>
                {list.map((item, index) => (
                    <VideoCardItem
                        buttonNumber={buttonNumber}
                        handleSelect={selectColor}
                        key={index}
                        item={item}
                        itemNumber={itemNumber}
                        count={itemCount}
                    />
                ))}
            </ul>

            {itemNames.find(i => i !== 'hof') ? (
                <Software hof={false} classNameTitle={cls.textTitle} classNameText={cls.text}/>
            ) : (
                <Software hof={true} classNameTitle={cls.textTitle} classNameText={cls.text}/>
            )
            }

            <div className={cls.line}/>

            <ul className={cls.itemsContainer}>
                {list.map((specItem, index) => (
                    <li key={index} className={itemCount ? cls.itemFull : cls.item}>
                        <div className={cls.box}>
                            <p className={cls.textTitle}>Тактовая частота c 1-Click OC (МГц)</p>
                            <p className={cls.text}>{specItem.clockPurityClick}</p>
                        </div>

                        <div className={cls.box}>
                            <p className={cls.textTitle}>Тактовая частота с ускорением (МГц)</p>
                            <p className={cls.text}>{specItem.clockPurity}</p>
                        </div>

                        <div className={cls.box}>
                            <p className={cls.textTitle}>Базовая тактовая частота (МГц)</p>
                            <p className={cls.text}>{specItem.clickPurityBase}</p>
                        </div>

                        <div className={cls.box}>
                            <p className={cls.textTitle}>Ядра NVIDIA CUDA</p>
                            <p className={cls.text}>{specItem.nvidiaCuda}</p>
                        </div>

                        <div className={cls.box}>
                            <p className={cls.textTitle}>Стандартная конфигурация памяти</p>
                            <p className={cls.text}>{specItem.baseMemoryConfiguration}</p>
                        </div>

                        <div className={cls.box}>
                            <p className={cls.textTitle}>Пропускная способность (ГБ/c)</p>
                            <p className={cls.text}>{specItem.throughput}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className={cls.line}/>

            <ul className={cls.itemsContainer}>
                {list.map((specItem, index) => (
                    <li key={index} className={itemCount ? cls.itemFull : cls.item}>
                        <div className={cls.box}>
                            <p className={cls.textTitle}>Максимальное разрешение
                                и частота обновления экрана</p>
                            <p className={cls.text}>{specItem.screenResolution}</p>
                        </div>

                        <div className={cls.box}>
                            <p className={cls.textTitle}>Стандартные разъемы дисплея</p>
                            <p className={cls.text}>{specItem.displayConnectors}</p>
                        </div>

                        <div className={cls.box}>
                            <p className={cls.textTitle}>Поддержка нескольких мониторов</p>
                            <p className={cls.text}>{specItem.displaySupport}</p>
                        </div>

                        {specItem.videoCardSize && (
                            <div className={cls.box}>
                                <p className={cls.textTitle}>Размеры видеокарты</p>
                                <p className={cls.text}>{specItem.videoCardSize}</p>
                            </div>
                        )}

                        {specItem.videoCardSizeImage && (
                            <div className={itemCount ? cls.boxFull : cls.box}>
                                <Image className={cls.lightZone} src={specItem.videoCardSizeImage}
                                       alt={specItem.videoCardSize}/>
                            </div>
                        )}

                        <div className={cls.box}>
                            <p className={cls.textTitle}>Количество занимаемых слотов расширения</p>
                            <p className={cls.text}>{specItem.slots}</p>
                        </div>

                        {specItem.supply && (
                            <div className={cls.box}>
                                <p className={cls.textTitle}>Рекомендованные системные требования по питанию (Вт)</p>
                                <p className={cls.text}>{specItem.supply}</p>
                            </div>
                        )}

                        {specItem.supplyConnectors && (
                            <div className={cls.boxSupply}>
                                <p className={cls.textTitle}>Требуемые разъемы питания</p>
                                <p className={cls.text}>{specItem.supplyConnectors}</p>
                            </div>
                        )}

                        {specItem.set && (
                            <div className={cls.box}>
                                <p className={cls.textTitle}>Комплект поставки</p>
                                <p className={cls.text}>{specItem.set}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <div className={cls.line}/>

            <div className={cls.box}>
                <h3 className={cls.textTitle}>Технологии NVIDIA</h3>
                <p className={cls.text}>
                    Ray Tracing, DLSS&nbsp;3 (суперразрешение + генерация кадров), Reflex, Broadcast,
                    GeForce
                    Experience, Shadowplay, Highlights, Ansel, Omniverse, драйверы Game Ready, драйверы
                    Studio,
                    поддержка VR, G-SYNC, Microsoft DirectX 12&nbsp;Ultimate, энкодер NVENC, декодер NVDEC,
                    кодирование
                    и&nbsp;декодирование AV1.
                </p>
            </div>

            <HomeAbout boxClassName={cls.boxClassName}/>

            <BotBlob/>
        </div>
    );
};

const BotBlob = () => {
    return (
        <svg className={cls.botBlob} width="1745" height="1476" viewBox="0 0 1745 1476" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_4368_451)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M857.523 1273.43C714.658 1261.04 601.45 1171.73 492.408 1078.57C369.474 973.546 178.585 873.368 201.961 713.35C225.521 552.075 457.208 541.724 585.509 441.255C684.704 363.579 731.549 200.196 857.523 200C983.523 199.805 1029.74 364.583 1130.38 440.41C1266.36 542.857 1501 547.341 1538.9 713.35C1577.46 882.212 1425.72 1037.92 1291.93 1147.89C1170.87 1247.4 1013.63 1286.96 857.523 1273.43Z"
                      fill="url(#paint0_linear_4368_451)"/>
            </g>
            <defs>
                <filter id="filter0_f_4368_451" x="0" y="0" width="1745" height="1476" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4368_451"/>
                </filter>
                <linearGradient id="paint0_linear_4368_451" x1="1545" y1="1276" x2="11.667" y2="712.177"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#44FC8E"/>
                    <stop offset="1" stopColor="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
