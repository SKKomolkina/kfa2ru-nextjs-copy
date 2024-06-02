import cls from './Software.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Link from "next/link";

interface SoftwareProps {
    classNameBox?: string;
    classNameTitle?: string;
    classNameText?: string;
    hof?: boolean;
}

export const Software = ({classNameBox, classNameTitle, classNameText, hof}: SoftwareProps) => {
    return (
        <div className={classNames(cls.Software, {}, [classNameBox])}>
            <p className={cls.title}>
                Программное обеспечение
            </p>

            <h3 className={cls.subtitle}>
                {hof ? 'HOF AI Suite и XT App' : 'Xtreme Tuner и XT App'}
            </h3>

            <p className={classNames(cls.text, {}, [classNameText])}>
                Широкие возможности для мониторинга и&nbsp;настройки устройств KFA2&nbsp;в десктоп и&nbsp;мобильном
                формате.
                Разгон, управление режимами и&nbsp;цветовыми схемами подсветки вентиляторов и&nbsp;прочих зон с&nbsp;RGB
                элементами (в&nbsp;зависимости от&nbsp;модели видеокарты), синхронизация режимов подсветки
                с&nbsp;другими продуктами KFA2.
            </p>

            <Link href={hof ? 'https://old.kfa2.ru/hof-ai' : '/xtreme-tuner'} className={cls.buttonContainer}>
                <svg className={cls.arrow} width="33" height="8" viewBox="0 0 33 8" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M32.3536 4.64652C32.5488 4.45126 32.5488 4.13468 32.3536 3.93942L29.1716 0.757437C28.9763 0.562175 28.6597 0.562175 28.4645 0.757437C28.2692 0.9527 28.2692 1.26928 28.4645 1.46454L31.2929 4.29297L28.4645 7.1214C28.2692 7.31666 28.2692 7.63324 28.4645 7.82851C28.6597 8.02377 28.9763 8.02377 29.1716 7.82851L32.3536 4.64652ZM-4.37114e-08 4.79297L32 4.79297L32 3.79297L4.37114e-08 3.79297L-4.37114e-08 4.79297Z"
                        fill="#1B1B1B"/>
                </svg>

                <p className={classNames(cls.buttonText, {}, [classNameText])}>
                    Подробнее
                </p>
            </Link>

            {hof && (
                <div className={cls.add}>
                    <h3 className={cls.subtitle}>
                        Дополнительные возможности
                    </h3>

                    <p className={classNames(cls.text, {}, [classNameText])}>
                        Два режима работы микрокода BIOS с&nbsp;аппаратным переключением<br/>
                        Аппаратное управление системой вентиляторов Turbo Boost<br/>
                        Премиум класс компонентов печатной платы<br/>
                        Разъёмы подключения с&nbsp;позолоченными контактами<br/>
                    </p>
                </div>
            )}
        </div>
    );
};
