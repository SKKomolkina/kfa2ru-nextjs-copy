import cls from './Download.module.scss'
import Link from "next/link";

export const Download = () => {
    return (
        <div className={cls.section}>
            <p className={cls.title}>Загрузить</p>

            <div className={cls.boxContainer}>
                <Link href={'../downloads/tuner/XTGearv1.38.zip'} className={cls.topContainer}>
                    <svg className={cls.arrow} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17V1H1" stroke="#1B1B1B" strokeWidth="0.623388" strokeLinecap="round"/>
                        <path d="M1 17L16.6444 1.35556" stroke="#1B1B1B" strokeWidth="0.623388" strokeLinecap="round"/>
                    </svg>

                    <h4 className={cls.boxTitle}>Xtreme Tuner Gear</h4>
                    <p className={`${cls.text} ${cls.version}`}>v1.38</p>

                    <p className={cls.text}>Для поддерживаемых моделей игровых мышек серии SLIDER, гарнитур SONAR
                        и&nbsp;клавиатур STEALTH.
                    </p>
                </Link>

                <Link target={'_blank'} href={'https://www.youtube.com/watch?v=EgsQgge-uMc'} className={cls.midContainer}>
                    <svg className={cls.arrow} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17V1H1" stroke="#1B1B1B" strokeWidth="0.623388" strokeLinecap="round"/>
                        <path d="M1 17L16.6444 1.35556" stroke="#1B1B1B" strokeWidth="0.623388" strokeLinecap="round"/>
                    </svg>

                    <h5 className={cls.subtitle}>Видео инструкция по <span className={cls.subtitleSpan}>установке</span></h5>
                </Link>

                <Link target={'_blank'} href={'https://www.youtube.com/watch?v=9I0CE3W61WI'} className={cls.midContainer}>
                    <svg className={cls.arrow} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17V1H1" stroke="#1B1B1B" strokeWidth="0.623388" strokeLinecap="round"/>
                        <path d="M1 17L16.6444 1.35556" stroke="#1B1B1B" strokeWidth="0.623388" strokeLinecap="round"/>
                    </svg>

                    <h5 className={cls.subtitle}>Видео инструкция по <span className={cls.subtitleSpan}>настройке</span></h5>
                </Link>
            </div>
        </div>
    );
};
