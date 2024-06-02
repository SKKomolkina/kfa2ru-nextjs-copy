import cls from './Switch.module.scss'
import {useState} from "react";

export const Switch = () => {
    const [on, setOn] = useState(false)

    return (
        <div className={cls.section}>
            <div className={cls.container}>
            <button onClick={() => setOn(!on)} className={!on ? cls.button : cls.buttonActive}>
                <p className={`${cls.buttonText} ${cls.left}`}>Чёрная</p>
                <p className={`${cls.buttonText} ${cls.right}`}>Белая</p>

                <div className={!on ? cls.buttonInner : cls.buttonInnerActive}/>
            </button>
            </div>

            {!on ? (
                <div className={cls.white}/>
            ) : (
                <div className={cls.black}/>
            )}

        </div>
    );
};
