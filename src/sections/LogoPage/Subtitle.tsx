import cls from './Subtitle.module.scss'
import Image from "next/image";

export const Subtitle = () => {
    return (
        <div className={cls.section}>
            <div className={cls.box}>
                <p className={cls.title}>
                    ВАЖНО
                </p>

                <p className={cls.text}>
                    Размещение логотипа компании на&nbsp;сторонних ресурсах может происходить только в&nbsp;рамках
                    партнёрства.
                    <br/><br/>
                    Не&nbsp;изменяйте и&nbsp;не&nbsp;создавайте свою версию логотипа KFA2, не&nbsp;используйте другие
                    цветовые схемы, помимо указанных на&nbsp;данной странице.
                </p>
            </div>

            <div className={cls.box}>
                <Image width={444} height={134} className={cls.logo} src={'../images/logo/subtitle/logo.png'}
                       alt={'kfa2'}/>

                <div className={cls.linksContainer}>
                    <a href={'./downloads/logo/KFA2-Logo-Kit.zip'} className={cls.link}>
                        <svg className={cls.arr} width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M45.3536 4.35356C45.5488 4.1583 45.5488 3.84171 45.3536 3.64645L42.1716 0.46447C41.9763 0.269208 41.6597 0.269208 41.4645 0.46447C41.2692 0.659732 41.2692 0.976314 41.4645 1.17158L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34028 41.4645 7.53554C41.6597 7.7308 41.9763 7.7308 42.1716 7.53554L45.3536 4.35356ZM-4.37114e-08 4.5L45 4.5L45 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                fill="#1B1B1B"/>
                        </svg>

                        <p className={cls.linkText}>
                            KFA2 Logo Скачать
                        </p>
                    </a>

                    <a href={'./downloads/logo/KFA2_logo.ai'} className={cls.link}>
                        <svg className={cls.arr} width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.3536 4.35356C45.5488 4.1583 45.5488 3.84171 45.3536 3.64645L42.1716 0.46447C41.9763 0.269208 41.6597 0.269208 41.4645 0.46447C41.2692 0.659732 41.2692 0.976314 41.4645 1.17158L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34028 41.4645 7.53554C41.6597 7.7308 41.9763 7.7308 42.1716 7.53554L45.3536 4.35356ZM-4.37114e-08 4.5L45 4.5L45 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#1B1B1B"/>
                        </svg>

                        <p className={cls.linkText}>
                            KFA2 Logo (.ai) Скачать
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};
