import cls from '../SpecPage.module.scss'
import Image from "next/image"
// import {useEffect, useState} from "react"

export const AccItem = ({item}) => {
    return (
                <li className={cls.itemFull}>
                    <div className={cls.box}>
                        <h1 style={{marginTop: '5%'}} className={cls.title}>
                            {item.name}
                        </h1>

                        <h2 className={cls.title}>
                            {item.series}
                        </h2>

                        <p className={cls.text}>{item.price}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Код модели</p>
                        <p className={cls.text}>{item.modelCode}</p>
                    </div>

                    <div style={{marginBottom: '0'}} className={cls.boxCode}>
                        <p className={cls.textTitle}>Код продукта</p>
                        <p className={cls.text}>{item.productCode}</p>
                    </div>

                    <div style={{marginBottom: '0'}} className={cls.boxCode}>
                        <p className={cls.textTitle}>Код EAN</p>
                        <p className={cls.text}>{item.productEan}</p>
                    </div>

                    <div className={cls.line} style={{width: '100%'}} />

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Диагональ экрана (дюйм)</p>
                        <p className={cls.text}>{item.diagonal}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Максимальное разрешение</p>
                        <p className={cls.text}>{item.maxpermission}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Соотношение сторон</p>
                        <p className={cls.text}>{item.sides}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Тип подсветки матрицы</p>
                        <p className={cls.text}>{item.light}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Технология изготовления матрицы</p>
                        <p className={cls.text}>{item.manufacturing}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Частота при максимальном разрешении</p>
                        <p className={cls.text}>{item.frequency}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Покрытие экрана</p>
                        <p className={cls.text}>{item.coating}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Угол обзора</p>
                        <p className={cls.text}>{item.corner}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Время отклика пикселя (MPRT)</p>
                        <p className={cls.text}>{item.mprt}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Время отклика пикселя (GtG)</p>
                        <p className={cls.text}>{item.gtg}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Яркость</p>
                        <p className={cls.text}>{item.bright}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Контрастность</p>
                        <p className={cls.text}>{item.contrast}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Поддержка HDR</p>
                        <p className={cls.text}>{item.hdrsupport}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Глубина цвета</p>
                        <p className={cls.text}>{item.colordeep}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Цветовой охват sRGB</p>
                        <p className={cls.text}>{item.srgb}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Цветовой охват Adobe RGB</p>
                        <p className={cls.text}>{item.argb}</p>
                    </div>

                    <div style={{marginBottom: '0'}} className={cls.box}>
                        <p className={cls.textTitle}>Технология защиты зрения</p>
                        <p className={cls.text}>{item.care}</p>
                    </div>

                    <div style={{marginBottom: '0'}} className={cls.box}>
                        <p className={cls.textTitle}>Технология динамического обновления экрана</p>
                        <p className={cls.text}>{item.update}</p>
                    </div>

                    <div className={cls.line} style={{width: '100%'}} />

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Тип крепления</p>
                        <p className={cls.text}>{item.bracing}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Размеры крепления</p>
                        <p className={cls.text}>{item.bracingsize}</p>
                    </div>

                    <div className={cls.box}>
                        <p className={cls.textTitle}>Габариты монитора (ШВГ)</p>
                        <p className={cls.text}>{item.size}</p>
                    </div>

                    <div style={{marginBottom: '0'}} className={cls.box}>
                        <p className={cls.textTitle}>Габариты монитора с подставкой (ШВГ)</p>
                        <p className={cls.text}>{item.bigsize}</p>
                    </div>

                    <div style={{marginBottom: '0'}} className={cls.box}>
                        <p className={cls.textTitle}>Вес с подставкой (кг)</p>
                        <p className={cls.text}>{item.weight}</p>
                    </div>

                    <div className={cls.line} style={{width: '100%'}} />

                    <div style={{marginBottom: '0'}} className={cls.box}>
                        <p className={cls.textTitle}>Видеоразъемы</p>
                        <p className={cls.text}>{item.videoconnect}</p>
                    </div>

                    <div style={{marginBottom: '0'}} className={cls.box}>
                        <p className={cls.textTitle}>Выход на наушники</p>
                        <p className={cls.text}>{item.audioconnect}</p>
                    </div>

                    <div className={cls.line} style={{width: '100%'}} />
                </li>
    );
};
