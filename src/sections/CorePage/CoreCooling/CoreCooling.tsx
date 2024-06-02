import cls from './CoreCooling.module.scss'
import tagsStyles from '@/shared/ui/ColorTags/ColorTags.module.scss'

export const CoreCooling = () => {
    return (
        <div className={cls.section}>
            <h4 className={cls.title}>Продуманная</h4>
            <h4 className={cls.title}>система</h4>
            <p className={cls.text}>
                Продуманная система охлаждения&nbsp;&mdash; залог стабильных игровых показателей.
            </p>
            <div className={cls.line}/>
            <h4 className={cls.title}>охлаждения</h4>

            <div className={`${tagsStyles.blueTag} ${cls.blueTag}`}>
                <p>WINGS</p>
            </div>
            <div className={`${tagsStyles.redTag} ${cls.redTag}`}>
                <p>Бэкплейт</p>
            </div>
            <div className={`${tagsStyles.yellowTag} ${cls.yellowTag}`}>
                <p>Теплосъёмник</p>
            </div>
        </div>
    );
};
