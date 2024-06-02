import cls from './Fourth.module.scss'
import text from './Chair04.module.scss'
import {useMediaQuery} from "@/features/lib/useMediaQuery";
import {useEffect, useState} from "react";
import Image from "next/image";

export const Fourth = () => {

    return (
        <div className={cls.section}>
            <p className={`${text.text} ${cls.textTop}`}>Эргономичная форма</p>
            <p className={`${text.text} ${cls.textMid}`}>Прочная кожаная обивка</p>
            <p className={`${text.text} ${cls.textBot}`}>
                Дышащая легкоочищаемая тканевая поверхность сидения, спинки и&nbsp;подушки под поясницу
            </p>

            <svg className={cls.lineTop} width="511" height="2" viewBox="0 0 511 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H511.004" stroke="white" strokeDasharray="10 10"/>
            </svg>
            <svg className={cls.lineMid} width="511" height="2" viewBox="0 0 511 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H511.004" stroke="white" strokeDasharray="10 10"/>
            </svg>
            <svg className={cls.lineBot} width="511" height="2" viewBox="0 0 511 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H511.004" stroke="white" strokeDasharray="10 10"/>
            </svg>

            <Image width={890} height={780} className={cls.image} src={'../images/gc-04/fourth/image.png'}
                   alt={'04 L'}/>

            <div className={cls.blurTop}/>
            <div className={cls.blurBot}/>
        </div>
    );
};
