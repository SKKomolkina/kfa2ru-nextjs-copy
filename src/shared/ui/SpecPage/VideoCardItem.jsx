import cls from './SpecPage.module.scss';
import Image from "next/image";
import {useEffect, useState} from "react";

export const VideoCardItem = ({item, itemNumber, handleSelect, buttonNumber, count}) => {
    const [imageNumber, setImageNumber] = useState(0)
    const [activeImage, setActiveImage] = useState(item.images[0])

    useEffect(() => {
        setActiveImage(item.images[0])
    }, [buttonNumber, item])

    useEffect(() => {
        setActiveImage(item.images[imageNumber])
    }, [imageNumber, item.images])

    return (
                <li className={count ? cls.itemFull : cls.item}>
                    <div className={cls.box}>
                        <Image className={cls.image} src={activeImage} alt={item.name}/>
                    </div>
                    <div className={cls.box}>
                        <div className={cls.colorButtonContainer}>
                            {item.colors && item.colors.map((color, index) => (
                                <button
                                    key={index}
                                    style={{backgroundColor: `#${color}`}}
                                    className={imageNumber === index ? cls.colorButtonActive : cls.colorButton}
                                    onClick={() => setImageNumber(index)}
                                />
                            ))}
                        </div>

                        <h1 className={cls.subtitle}>
                            {item.name}
                        </h1>

                        <h2 className={cls.title}>
                            {item.series}
                        </h2>

                        {/*<p className={cls.text}>{item.price}</p>*/}
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Код модели</p>
                        <p className={cls.text}>{item.modelCode}</p>
                    </div>

                    <div className={cls.boxCode}>
                        <p className={cls.textTitle}>Код продукта</p>
                        <p className={cls.text}>{item.productCode}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Fan-Stop</p>
                        <p className={cls.text}>{item.fanStop}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Тип вентиляторов</p>
                        <p className={cls.text}>{item.fanType}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Размеры вентиляторов (мм)</p>
                        <p className={cls.text}>{item.fanSize}</p>
                    </div>

                    {item.coolingFeatures && (
                        <div className={cls.box}>
                            <p className={cls.textTitle}>Особенности системы охлаждения</p>
                            <p className={cls.text}>{item.coolingFeatures}</p>
                        </div>
                    )}

                    {item.backplate && (
                        <div className={cls.box}>
                            <p className={cls.textTitle}>Бэкплейт</p>
                            <p className={cls.text}>{item.backplate}</p>
                        </div>
                    )}

                    {item.lightType && (
                        <div className={cls.box}>
                            <p className={cls.textTitle}>Тип подсветки</p>
                            <p className={cls.text}>{item.lightType}</p>
                        </div>
                    )}

                    {item.lightZone && (
                        <div className={count ? cls.boxFull : cls.box}>
                            <p className={cls.textTitle}>Зоны подсветки</p>
                            <Image className={cls.lightZone} src={item.lightZone} alt={item.name}/>
                        </div>
                    )}
                </li>
    );
};
