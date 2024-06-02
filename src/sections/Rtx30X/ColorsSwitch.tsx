import cls from './ColorsSwitch.module.scss'
import {useState} from "react";
import Image from "next/image";

export const ColorsSwitch = ({lightOn, setLightOn}: any) => {
    return (
        <div className={cls.section}>
            <div className={cls.buttonContainer}>
                <button onClick={() => setLightOn(!lightOn)} className={!lightOn ? cls.button : cls.buttonActive}>
                    <p className={cls.buttonTextActive}>On</p>
                    <p className={cls.buttonText}>Off</p>

                    <div className={!lightOn ? cls.buttonInner : cls.buttonInnerActive}/>
                </button>
            </div>

            <Image width={1613} height={908} className={lightOn ? cls.image : cls.imageHidden}
                   src={'../../images/rtx30x/colors/switch/on.png'}
                   alt={'3050 On'}/>
            <Image width={1613} height={908} className={lightOn ? cls.imageHidden : cls.image}
                   src={'../../images/rtx30x/colors/switch/off.png'}
                   alt={'3050 Off'}/>

            <p className={cls.text}>3050</p>
        </div>
    );
};
