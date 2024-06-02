import cls from './Fifth.module.scss'
import text from './Chair01.module.scss'

export const Fifth = () => {
    return (
        <div className={cls.section}>
            <div className={cls.line}/>
            <p className={text.text}>
                Настраиваемая RGB подсветка, расположенная по&nbsp;всей высоте спинки и&nbsp;сиденья, создаёт
                эстетическую привлекательность.
            </p>

            <video controls className={cls.video}>
                <source type={'video/mp4'} src={'../images/gc-01/fifth/video.mp4'}/>
            </video>
        </div>
    );
};
