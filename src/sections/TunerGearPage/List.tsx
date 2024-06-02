import cls from './List.module.scss'
import titleCls from "@/sections/ManualPage/ManualPage.module.scss";
import {catalogItemsArchive} from "@/utils/catalog";
import {useState} from "react";

export const List = ({item, index, children}: any) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={cls.item}>
            <div onClick={() => setOpen(!open)} className={cls.titleContainer}>
                <p className={cls.num}>{item.num}</p>

                <h2 className={titleCls.itemTitle}>{item.name}</h2>

                <svg className={cls.buttonArrow} width="26" height="26" viewBox="0 0 26 26" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1V25H1" stroke="#1B1B1B" strokeLinecap="round"/>
                    <path d="M1 1L24.4667 24.4667" stroke="#1B1B1B" strokeLinecap="round"/>
                </svg>
            </div>

            <div className={open ? cls.container : cls.containerHidden}>
                {children}
            </div>

            <div className={titleCls.line}/>
        </div>
    );
};
