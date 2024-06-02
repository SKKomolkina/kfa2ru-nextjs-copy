import cls from './PerformanceFooter.module.scss';

export const PerformanceFooter = () => {
    return (
        <div className={cls.section}>
            <ul className={cls.textAbsolute}>
                <li className={cls.item}>
                    <div className={cls.spanBlue}/>
                    <p className={cls.text}>
                        RTX 3060&nbsp;Ti G6X + DLSS Quality
                    </p>
                </li>
                <li className={cls.item}>
                    <div className={cls.spanBlack}/>
                    <p className={cls.text}>
                        RTX 3060&nbsp;Ti G6X
                    </p>
                </li>
                <li className={cls.item}>
                    <div className={cls.spanGray}/>
                    <p className={cls.text}>
                        GTX 1050&nbsp;Ti
                    </p>
                </li>
            </ul>

           <div className={cls.lineContainer}>
               <div className={cls.line}/>
               <div className={cls.line}/>
               <div className={cls.line}/>
               <div className={cls.lineHorizontal}/>
               <p className={cls.num}>0</p>
               <p className={cls.numMar}>160</p>
               <p className={cls.num}>320</p>
           </div>

            <p className={cls.text}>
                ССистема: Intel Core i7-13700KF, MB&nbsp;Z790,32&nbsp;Gb DDR5-6000, SSD 1Tb. <br/>
                * FSR 2.0 Quality <br/>
                ** В&nbsp;игре применен лок на&nbsp;60&nbsp;FPS
            </p>
        </div>
    );
};
