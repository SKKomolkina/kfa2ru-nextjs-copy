import cls from './Item.module.scss'
import titleCls from './ManualPage.module.scss'
import {useState} from "react";

export const Item = ({item, index}: any) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={cls.item}>
            <div onClick={() => setOpen(!open)} className={cls.titleContainer}>
                <p className={cls.num}>{`0${index + 1}`}</p>

                <h4 className={titleCls.itemTitle}>{item.title}</h4>

                <svg className={cls.buttonArrow} width="26" height="26" viewBox="0 0 26 26" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1V25H1" stroke="#1B1B1B" strokeLinecap="round"/>
                    <path d="M1 1L24.4667 24.4667" stroke="#1B1B1B" strokeLinecap="round"/>
                </svg>
            </div>

            <div className={open ? cls.container : cls.containerHidden}>
                <p className={`${cls.textMargin} ${titleCls.text}`}>{item.text}</p>

                {item.text2 && (
                    <p className={`${cls.textMargin} ${titleCls.text}`}>{item.text2}</p>
                )}

                {item.video && (
                    item.video.map((i:any) => i)
                )}

                {item.link && (
                    <a href={item.link} className={cls.buttonContainer}>
                        <svg className={cls.arrow} width="33" height="8" viewBox="0 0 33 8" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M32.3536 4.35356C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464469C28.9763 0.269206 28.6597 0.269206 28.4645 0.464469C28.2692 0.659731 28.2692 0.976313 28.4645 1.17158L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53554C28.6597 7.7308 28.9763 7.7308 29.1716 7.53554L32.3536 4.35356ZM-4.37114e-08 4.5L32 4.5L32 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                fill="#1B1B1B"/>
                        </svg>

                        <p className={cls.buttonText}>
                            Подробнее
                        </p>
                    </a>
                )}
            </div>

            <div className={titleCls.line}/>
        </div>
    );
};
