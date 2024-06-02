import cls from './ColorsColor.module.scss'
import Image from "next/image";
import {useState} from "react";

export const ColorsColor = () => {
    const [color, setColor] = useState(1)

    return (
        <div className={cls.section}>
            <Image className={color === 1 ? cls.imageVisible : cls.image} width={975} height={571}
                   src={'../../images/rtx30x/colors/color/1.png'} alt={'изумруд'}/>
            <Image className={color === 2 ? cls.imageVisible : cls.image} width={975} height={571}
                   src={'../../images/rtx30x/colors/color/2.png'} alt={'вельвет'}/>
            <Image className={color === 3 ? cls.imageVisible : cls.image} width={975} height={571}
                   src={'../../images/rtx30x/colors/color/3.png'} alt={'янтарь'}/>
            <Image className={color === 4 ? cls.imageVisible : cls.image} width={975} height={571}
                   src={'../../images/rtx30x/colors/color/4.png'} alt={'бирюза'}/>
            <Image className={color === 5 ? cls.imageVisible : cls.image} width={975} height={571}
                   src={'../../images/rtx30x/colors/color/5.png'} alt={'ситхи'}/>

            <div className={cls.textContainer}>
                <h3 className={cls.title}>3060 Ti / 3060</h3>

                <div className={cls.buttonsContainer}>
                    <button onClick={() => setColor(1)} className={cls.button1}/>
                    <button onClick={() => setColor(2)} className={cls.button2}/>
                    <button onClick={() => setColor(3)} className={cls.button3}/>
                    <button onClick={() => setColor(4)} className={cls.button4}/>
                    <button onClick={() => setColor(5)} className={cls.button5}/>
                </div>
            </div>
        </div>
    );
};
