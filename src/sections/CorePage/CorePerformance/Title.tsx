import cls from './Title.module.scss';
import tagStyles from "@/shared/ui/ColorTags/ColorTags.module.scss";

export const Title = () => {
    return (
        <div className={cls.container}>
            <div className={`${tagStyles.blueTag} ${cls.tagBlue}`}>
                <p>Игры</p>
            </div>
            <div className={`${tagStyles.redTag} ${cls.tagRed}`}>
                <p>Нейросети</p>
            </div>
            <div className={`${tagStyles.yellowTag} ${cls.tagYellow}`}>
                <p>Творчество</p>
            </div>

            <h5 className={cls.title}>Высокая</h5>
            <p className={cls.text}>
                Видеокарты CORE обладают высокой производительностью, которая позволяет в&nbsp;полной мере наслаждаться
                новинками индустрии.
            </p>
            <h5 className={cls.title}>производительность</h5>
        </div>
    );
};
