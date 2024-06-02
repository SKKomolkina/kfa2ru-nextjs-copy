import cls from './TitleContainer.module.scss'
import Image from "next/image";
import {usePathname} from "next/navigation";

export const TitleContainer = () => {
    const pathname = usePathname()

    return (
        <section className={cls.container}>
            <a href={`${pathname}/hof`} className={cls.backLink}/>
            <div className={cls.background}/>

            <Image width={1424} height={957} className={cls.image}
                   src={'../images/transition/videocards/title/image.png'} alt={'RTX 40 HOF'}/>

            <ul className={cls.tagsContainer}>
                <li className={cls.tag}><p>Overclocking</p></li>
                <li className={cls.tag}><p>Dual BIOS</p></li>
            </ul>

            <div className={cls.titleContainer}>
                <h1 className={cls.title}>RTX 40 HOF</h1>
                <p className={cls.text}>
                    Тандем производительности и&nbsp;эстетики для самых искушённых ценителей
                </p>

                <a href={`${pathname}/hof`} className={cls.link}>
                    <p className={cls.linkText}>Узнать больше</p>
                </a>
            </div>
        </section>
    );
};
