import cls from './Load.module.scss'
import Image from "next/image";

export const Load = () => {
    return (
        <div className={cls.section}>
            <div className={cls.topContainer}>
                <Image className={cls.lines} width={1758} height={1241} src={'../../images/rtx30x/load/lines.svg'}
                       alt={''}/>
                <Image className={cls.topImage} width={1430} height={793} src={'../../images/rtx30x/load/image.png'}
                       alt={''}/>
            </div>

            <div className={cls.textContainerTop}>
                <p className={cls.text}>
                    Надёжное охлаждение в&nbsp;условиях высокой игровой нагрузки. Высокий набранный радиатор
                    с&nbsp;частыми рёбрами пронизан длинными никелированными тепловыми трубками.&sup1;
                </p>
            </div>

            <div className={cls.botContainer}>
                <Image className={cls.botImage} width={1776} height={1001} src={'../../images/rtx30x/load/botImage.png'}
                       alt={''}/>
            </div>

            <div className={cls.textContainerBot}>
                <p className={cls.text}>
                    Медный теплосъёмник с&nbsp;большой площадью контакта отводит тепло от&nbsp;графического процессора
                    на&nbsp;радиатор. <br/>
                    Охлаждение всех ключевых зон нагрева: графического процессора, чипы памяти и&nbsp;подсистемы
                    питания.
                </p>
            </div>

            <div className={cls.blackContainer}>
                <video controls className={cls.video}>
                    <source src={'../../images/rtx30x/load/video.mp4'} type={'video/mp4'}/>
                </video>
            </div>
        </div>
    );
};
