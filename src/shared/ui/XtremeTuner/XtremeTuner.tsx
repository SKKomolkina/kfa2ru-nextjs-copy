import cls from './XtremeTuner.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Link from "next/link";
import Image from "next/image";

interface XtremeTunerProps {
    classNameBox?: string;
    black?: boolean;
    deep?: boolean;
    classNameFill?: boolean;
    firstBox?: boolean;
}

import image from './image.png'

export const XtremeTuner = ({classNameBox, black, deep, classNameFill, firstBox}: XtremeTunerProps) => {
    return (
        !firstBox ? (
                <div className={classNameFill ? cls.container : cls.containerWhite}>

                    <div className={classNames(cls.titleBox, {}, [classNameBox])}>
                        <Image className={cls.image} width={500} height={615} src={image} alt={'Xtreme Tuner'}/>
                        <h5 className={cls.title}>XTREME TUNER</h5>
                        <p className={cls.text}>
                            Управляй системой в&nbsp;режиме онлайн простым щелчком мыши. Приложение позволяет легко мониторить
                            и&nbsp;изменять работу видеокарты и&nbsp;режим подсветки с&nbsp;ПК и&nbsp;мобильного устройства.
                        </p>
                        <Link className={cls.link} href={'/xtreme-tuner'}>
                            {classNameFill ? (
                                <svg className={cls.arrow} width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M45.3536 4.35356C45.5488 4.1583 45.5488 3.84171 45.3536 3.64645L42.1716 0.46447C41.9763 0.269208 41.6597 0.269208 41.4645 0.46447C41.2692 0.659732 41.2692 0.976314 41.4645 1.17158L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34028 41.4645 7.53554C41.6597 7.7308 41.9763 7.7308 42.1716 7.53554L45.3536 4.35356ZM-4.37114e-08 4.5L45 4.5L45 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#1B1B1B"/>
                                </svg>
                            ) : (
                                <svg className={cls.arrow} viewBox="0 0 46 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M45.3536 4.35356C45.5488 4.1583 45.5488 3.84171 45.3536 3.64645L42.1716 0.46447C41.9763 0.269208 41.6597 0.269208 41.4645 0.46447C41.2692 0.659732 41.2692 0.976314 41.4645 1.17158L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34028 41.4645 7.53554C41.6597 7.7308 41.9763 7.7308 42.1716 7.53554L45.3536 4.35356ZM-4.37114e-08 4.5L45 4.5L45 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                        fill="white"/>
                                </svg>
                            )}
                            <p className={cls.text}>Подробнее</p>
                        </Link>
                    </div>

                    <div className={classNames(cls.box, {}, [classNameBox])}>
                        <p className={cls.subtitle}>Игровые возможности</p>
                        <div className={classNameFill ? cls.lineBlack : cls.line}/>
                        <p className={cls.text}>
                            RayTracing <br/>
                            DLSS 3.0 <br/>
                            Reflex
                        </p>
                    </div>

                    <div className={classNames(cls.box, {}, [classNameBox])}>
                        <p className={cls.subtitle}>Общение без границ</p>
                        <div className={classNameFill ? cls.lineBlack : cls.line}/>
                        <p className={cls.text}>
                            Студия в домашних условиях <br/>
                            ИИ заменит фон и избавит то лишних шумов.
                        </p>
                    </div>

                    <div className={classNames(cls.box, {}, [classNameBox])}>
                        <p className={cls.subtitle}>Хобби и творчество</p>
                        <div className={classNameFill ? cls.lineBlack : cls.line}/>
                        <p className={cls.text}>
                            Ускорение рендеринга и стабильность работы приложений для творчества.
                        </p>
                    </div>
                </div>
                ) : (
                <div className={classNameFill ? cls.container : cls.containerWhite}>

                    <div className={classNames(cls.titleBox, {}, [classNameBox])}>
                        <Image className={cls.image} width={500} height={615} src={image} alt={'Xtreme Tuner'}/>
                        <h5 className={cls.title}>XTREME TUNER</h5>
                        <p className={cls.text}>
                            Управляй системой в&nbsp;режиме онлайн простым щелчком мыши. Приложение позволяет легко мониторить
                            и&nbsp;изменять работу видеокарты и&nbsp;режим подсветки с&nbsp;ПК и&nbsp;мобильного устройства.
                        </p>
                        <Link className={cls.link} href={'/xtreme-tuner'}>
                            {classNameFill ? (
                                <svg className={cls.arrow} width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M45.3536 4.35356C45.5488 4.1583 45.5488 3.84171 45.3536 3.64645L42.1716 0.46447C41.9763 0.269208 41.6597 0.269208 41.4645 0.46447C41.2692 0.659732 41.2692 0.976314 41.4645 1.17158L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34028 41.4645 7.53554C41.6597 7.7308 41.9763 7.7308 42.1716 7.53554L45.3536 4.35356ZM-4.37114e-08 4.5L45 4.5L45 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#1B1B1B"/>
                                </svg>
                            ) : (
                                <svg className={cls.arrow} viewBox="0 0 46 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M45.3536 4.35356C45.5488 4.1583 45.5488 3.84171 45.3536 3.64645L42.1716 0.46447C41.9763 0.269208 41.6597 0.269208 41.4645 0.46447C41.2692 0.659732 41.2692 0.976314 41.4645 1.17158L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34028 41.4645 7.53554C41.6597 7.7308 41.9763 7.7308 42.1716 7.53554L45.3536 4.35356ZM-4.37114e-08 4.5L45 4.5L45 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                        fill="white"/>
                                </svg>
                            )}
                            <p className={cls.text}>Подробнее</p>
                        </Link>
                    </div>
                </div>
            )
    );
};
