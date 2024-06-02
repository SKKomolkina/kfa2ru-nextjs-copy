import styles from './HofPageHeader.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import Image from "next/image";
import {HeaderFrame} from "@/sections/HofPage/HofPageHeader/HeaderFrame";

interface HofPageHeaderProps {
    className?: string;
}

export const HofPageHeader = ({className}: HofPageHeaderProps) => {
    return (
        <section className={classNames(styles.section, {}, [className])}>
            <div className={styles.container}>
                <Image width={1150} height={594} className={styles.image} alt='' src='../images/hof-page/header/image.png'/>

                <h1 className={styles.title}>
                    Hall Of Fame
                </h1>
                <h1 className={styles.titleBorder}>
                    Hall Of Fame
                </h1>

                <div className={styles.textContainer}>
                    <p className={styles.textTransparent}>ЛЕГЕНДА</p>

                    <p className={styles.textWhite}>ЭКСТРЕМАЛЬНОГО <span
                        className={styles.textTransparent}> РАЗГОНА</span></p>
                </div>

                <div className={styles.lightContainer}>
                    <div className={styles.lightL}/>
                    <div className={styles.lightR}/>
                </div>

                {/*<HeaderFrame/>*/}
                <div className={styles.linearGradient}/>
            </div>
        </section>
    );
};
