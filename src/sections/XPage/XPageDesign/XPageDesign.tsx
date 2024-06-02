import cls from './XPageDesign.module.scss';
import Image from "next/image";

export const XPageDesign = () => {
    return (
        <div className={cls.section}>
            <div className={cls.background}/>

            <div className={cls.titleContainer}>
                <h4 className={cls.title}>Массивный</h4>
                <p className={cls.subText}>
                    Толстый радиатор с&nbsp;частыми высокими набранными рёбрами пронизан длинными тепловыми трубками
                </p>
                <h4 className={cls.title}>Радиатор</h4>
            </div>

            <div className={cls.firstContainer}>
                <p className={cls.textFirstContainer}>
                    Массивный высокий радиатор
                    с&nbsp;частыми набранными рёбрами.
                </p>
                <p className={cls.textFirstContainer}>
                    Множество длинных
                    <span className={cls.textSpan}> никелированных толстых тепловых трубок </span>
                    пронизывают радиатор, отводя тепло
                    от&nbsp;зон нагрева и&nbsp;способствуя его быстрому рассеиванию.
                </p>

                <Image width={1085} height={574} className={cls.firstImage} src={'../images/extreme/design/image1.png'}
                       alt={'Массивный радиатор'}/>
                <p className={cls.textSpanAbsolute}>
                    Дополнительные рёбра жёсткости придают прочность всей конструкции
                </p>
            </div>

            <div className={cls.secondContainer}>
                <p className={cls.subtitle}>
                    Медный теплосъёмник с большой площадью контакта и тщательно отпалированной подошвой
                </p>
                <Image width={955} height={594} className={cls.secondImage} src={'../images/extreme/design/image2.png'}
                       alt={'Медный теплосъёмник с большой площадью контакта и тщательно отпалированной подошвой'}/>
            </div>

            <div className={cls.thirdContainer}>
                <p className={cls.subtitle}>
                    Металлический бэкплейт из лёгкого и прочного сплава
                </p>
                <Image width={1430} height={826} className={cls.thirdImage} src={'../images/extreme/design/image3.png'}
                       alt={'Металлический бэкплейт из лёгкого и прочного сплава'}/>
                <div>
                    <p className={cls.subtitle}>
                        Вентиляционная решётка
                    </p>
                    <p className={cls.text}>
                        Для дополнительного отвода тепла от элементов системы охлаждения.
                    </p>

                    <p className={cls.textBack}>бэкплейт</p>
                </div>
            </div>
        </div>
    );
};
