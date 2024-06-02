import cls from './Border.module.scss'
import styles from './Vivance32QPage.module.scss'
import Image from "next/image";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const Border = () => {
    const query640 = useMediaQuery(640)

    return (
        <div className={`${styles.box} ${cls.section}`}>
            <h3 className={styles.title}>Borderless</h3>

            <p className={styles.text}>
                Полное погружение. Монитор с&nbsp;тонкими рамками позволяет вам получить максимально широкий
                и&nbsp;безупречный обзор.
            </p>
            <p className={styles.text}>
                Вы&nbsp;можете наслаждаться увлекательными видеороликами, фильмами и&nbsp;играми, обеспечивающими
                непрерывное погружение без отвлекающих элементов вокруг экрана. Использовать все возможности систем
                с&nbsp;несколькими установленными экранами.
            </p>

            <div className={cls.imageContainer}>
                {query640 ? <Image width={1006} height={700} className={cls.image}
                                   src={'../../images/monitors/vivance32/border/image.png'} alt={''}/> :
                    <Image width={565} height={700} className={cls.image}
                           src={'../../images/monitors/vivance32/border/image640.png'} alt={''}/>
                }
            </div>
        </div>
    );
};
