import cls from './XPageColors.module.scss';
import Image from "next/image";
import {useState} from "react";

export const XPageColors = () => {
    const [card, setCard] = useState(0)
    const [white, setWhite] = useState(true)

    return (
        <div className={cls.section}>
            <div className={cls.background}/>

            {/*<p className={cls.textAbsolute}>Выбери свой облик</p>*/}

            <div className={cls.titleContainer}>
                <p className={cls.text}>Выбери свой облик</p>

                <div className={cls.switchButtonContainer}>
                    <button onClick={() => setCard(0)}
                            className={card === 0 ? cls.switchButtonActive : cls.switchButton}>
                        4070 Ti
                    </button>
                    <button onClick={() => setCard(1)}
                            className={card === 1 ? cls.switchButtonActive : cls.switchButton}>
                        4070
                    </button>
                    <button onClick={() => setCard(2)}
                            className={card === 2 ? cls.switchButtonActive : cls.switchButton}>
                        4060 Ti
                    </button>

                    <button onClick={() => setCard(3)}
                            className={card === 3 ? cls.switchButtonActive : cls.switchButton}>
                        4060
                    </button>
                </div>
            </div>

            <div className={card === 0 ? cls.imagesContainer : cls.imagesContainerHidden}>
                <Image width={1920} height={1128} className={white ? cls.image : cls.imageHidden}
                       src={'../images/extreme/colors/black4070ti.png'}
                       alt={'Geforce Rtx 4070 Black'}/>
                <Image width={1920} height={1128} className={white ? cls.imageHidden : cls.image}
                       src={'../images/extreme/colors/white4070ti.png'}
                       alt={'Geforce Rtx 4070 White'}/>
            </div>

            <div className={card === 1 ? cls.imagesContainer : cls.imagesContainerHidden}>
                <Image width={1920} height={1128} className={white ? cls.image : cls.imageHidden}
                       src={'../images/extreme/colors/black4070ti.png'}
                       alt={'Geforce Rtx 4070i Black'}/>
                <Image width={1920} height={1128} className={white ? cls.imageHidden : cls.image}
                       src={'../images/extreme/colors/white4070ti.png'}
                       alt={'Geforce Rtx 4070i White'}/>
            </div>

            <div className={card === 2 ? cls.imagesContainer : cls.imagesContainerHidden}>
                <Image width={1920} height={981} className={white ? cls.image : cls.imageHidden}
                       src={'../images/extreme/colors/black4060ti.png'}
                       alt={'Geforce Rtx 4060i Black'}/>
                <Image width={1920} height={981} className={white ? cls.imageHidden : cls.image}
                       src={'../images/extreme/colors/white4060ti.png'}
                       alt={'Geforce Rtx 4060i White'}/>
            </div>

            <div className={card === 3 ? cls.imagesContainer : cls.imagesContainerHidden}>
                <Image width={1920} height={981} className={white ? cls.image : cls.imageHidden}
                       src={'../images/extreme/colors/black4060.png'}
                       alt={'Geforce Rtx 4060i Black'}/>
                <Image width={1920} height={981} className={white ? cls.imageHidden : cls.image}
                       src={'../images/extreme/colors/white4060.png'}
                       alt={'Geforce Rtx 4060i White'}/>
            </div>

            <div className={cls.colorButtonContainer}>
                <button onClick={() => setWhite(true)} className={cls.colorButton}>
                    <div className={white ? cls.colorButtonLineActive : cls.colorButtonLine}/>
                    <p className={cls.colorButtonText}>Чёрная</p>
                </button>
                <button onClick={() => setWhite(false)} className={cls.colorButton}>
                    <div className={white ? cls.colorButtonLine : cls.colorButtonLineActive}/>
                    <p className={cls.colorButtonText}>Белая</p>
                </button>
            </div>

            <p className={cls.textBack}>Выбери свой облик</p>
        </div>
    );
};
